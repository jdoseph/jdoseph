import React, { useEffect, useRef } from 'react';
import { scrapbookMarkup } from '../scrapbook/markup';
import { initPage } from '../scrapbook/page';
import { initYarnBoard } from '../scrapbook/yarnboard';
import { initHoop } from '../scrapbook/hoop';
import { initEggs } from '../scrapbook/eggs';
import { initMusic } from '../scrapbook/music';
import { initProjects, initCerts } from '../scrapbook/projects';
import '../scrapbook/scrapbook-base.css';
import '../scrapbook/scrapbook-sections.css';

/**
 * Smiski Yarn Scrapbook portfolio.
 *
 * The page is the imported design's markup verbatim (rendered via
 * dangerouslySetInnerHTML so inline styles, SVGs, and CSS custom properties
 * survive untouched). The interactive behavior — scroll reveals, the yarn
 * board physics, the cross-stitch hoop, and the easter eggs — is attached
 * after mount by the vanilla init modules. A ref guard keeps StrictMode's
 * double-invoke in development from wiring everything up twice.
 */
const Scrapbook = () => {
  const inited = useRef(false);

  useEffect(() => {
    if (inited.current) return;
    inited.current = true;

    // Theme hooks the scrapbook CSS reads off <html>.
    const html = document.documentElement;
    html.dataset.theme = 'mint';
    html.dataset.headfont = 'yarn';
    html.dataset.anim = 'on';

    // Order matters: yarn board exposes board.yarnPerturb that the eggs use.
    initPage();
    initYarnBoard();
    initHoop();
    initEggs();
    initMusic();
    initProjects();
    initCerts();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: scrapbookMarkup }} />;
};

export default Scrapbook;
