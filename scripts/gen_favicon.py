"""Render the scrapbook "stitch pin" (the .sewn-btn motif) as favicon assets.

The pin is a mint sewn-on button: a round mint disc with a soft bottom bevel
and four dark-mint thread holes in a 2x2 grid. We draw it big with
supersampling for clean edges, then downscale to each favicon size and pack a
multi-resolution .ico plus PNGs.
"""
from PIL import Image, ImageDraw

MINT = (141, 213, 180)       # --mint        #8DD5B4
MINT_DEEP = (63, 166, 126)   # --mint-deep   #3FA67E (bevel)
HOLE = (46, 125, 94)         # thread holes  rgba(46,125,94,~.85)

SS = 16  # supersample factor


def render(size):
    px = size * SS
    img = Image.new("RGBA", (px, px), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    pad = px * 0.06
    box = [pad, pad, px - pad, px - pad]
    cx = cy = px / 2
    r = (px - 2 * pad) / 2

    # bottom bevel: a slightly offset deeper disc peeking out the bottom
    off = px * 0.05
    d.ellipse([box[0], box[1] + off, box[2], box[3] + off], fill=MINT_DEEP + (255,))
    # main mint disc
    d.ellipse(box, fill=MINT + (255,))

    # four thread holes in a 2x2 grid
    hole_r = r * 0.135
    spread = r * 0.42
    for dx in (-spread, spread):
        for dy in (-spread, spread):
            hx, hy = cx + dx, cy + dy
            d.ellipse(
                [hx - hole_r, hy - hole_r, hx + hole_r, hy + hole_r],
                fill=HOLE + (255,),
            )

    return img.resize((size, size), Image.LANCZOS)


def main():
    # PNGs the manifest/html reference
    render(192).save("public/JD.png")            # used at 192 & 512 in manifest
    render(180).save("public/apple-touch-icon.png")

    # multi-size .ico — PIL packs every size in `sizes` from one base image,
    # so the base must be the LARGEST size requested.
    ico_sizes = [(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128)]
    base = render(128)
    base.save("public/JD.ico", format="ICO", sizes=ico_sizes)
    # favicon.ico fallback (served from root by default)
    base.save("public/favicon.ico", format="ICO", sizes=ico_sizes)

    # a clean PNG preview to eyeball
    render(256).save("scripts/_favicon_preview.png")
    print("wrote public/JD.png, public/JD.ico, public/favicon.ico, public/apple-touch-icon.png")


if __name__ == "__main__":
    main()
