import './sass/main.scss';

import 'babel-polyfill';
import $ from 'jquery';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

// Fontawesome setup
import fontawesome from '@fortawesome/fontawesome';
import fontawesomeSolid from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(fontawesomeSolid);

import titleSlide from './slides/000-title.slide.html';
import indexSlide from './slides/001-index.slide.html';

import ermSlide from './slides/010-erm.slide.html';
import apiSlide from './slides/011-api.slide.html';
import uiRegisterSlide from './slides/100-ui-register.slide.html';
import uiResetSlide from './slides/101-ui-reset.slide.html';
import uiLoginSlide from './slides/102-ui-login.slide.html';
import uiGamesSlide from './slides/103-ui-games.slide.html';
import uiRankingSlide from './slides/104-ui-ranking.slide.html';
import uiTeamSlide from './slides/105-ui-team.slide.html';
import uiProfileSlide from './slides/106-ui-profile.slide.html';
import challenges1Slide from './slides/107-challenges.slide.html';
import challenges2Slide from './slides/108-challenges.slide.html';

import questionSlide from './slides/900-questions.slide.html';

// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

const slides = [
  titleSlide,
  indexSlide,

  ermSlide,
  apiSlide,

  uiLoginSlide,
  uiRegisterSlide,
  uiResetSlide,
  uiGamesSlide,
  uiRankingSlide,
  uiTeamSlide,
  uiProfileSlide,

  challenges1Slide,
  challenges2Slide,

  questionSlide,
]
  .forEach(s => $('#slides').append(s));

// -------------------------------------------------------------------------
// Reveal.js Configuration
// -------------------------------------------------------------------------

Reveal.initialize({
  center: false,
  margin: 0,
  width: "100%",
  height: "100%",
});

RevealMarkdown.initialize();

hljs.initHighlightingOnLoad();
