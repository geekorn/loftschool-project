// CSS
import 'reset-css/reset.css';
import './../../scss/base.scss';

import 'font-awesome/css/font-awesome.css';

import './../../scss/blocks/text.scss';
import './../../scss/blocks/btn.scss';
import './../../scss/blocks/heading.scss';
import './../../scss/blocks/avatar.scss';
import './../../scss/blocks/social.scss';
import './../../scss/blocks/nav.scss';
import './../../scss/blocks/textfield.scss';
import './../../scss/blocks/checkbox.scss';
import './../../scss/blocks/radio.scss';
import './../../scss/blocks/copyright.scss';
import './../../scss/blocks/radio-group.scss';

import './../../scss/blocks/page-welcome.scss';
import './../../scss/blocks/flip-panel.scss';
import './../../scss/blocks/user.scss';
import './../../scss/blocks/login.scss';
import './../../scss/blocks/form-guard.scss';


// JS
const clientFeatureDetector = require(`Modules/clientFeatureDetector`);
const mediaBackground = require('Modules/mediaBackground');
const parallax = require('Modules/parallax');
const flipPanel = require('Modules/flipPanel');

$(function() {
    // Create animated background
    mediaBackground.init({
        layerHolder: `.page-welcome__bg-media-holder`,
        videoSrc: `media-background.mp4`,
        gifSrc: `media-background.gif`,
        className: `page-welcome__bg-media`
    });

    // Create parallax
    clientFeatureDetector.touchevents().then(touchDevice => {
        if (!touchDevice) {
            parallax.init([
                {
                    selector: `.flip-panel`,
                    divider: 0
                },
                {
                    selector: '.page-welcome__bg',
                    divider: 0.01
                }
            ]);
        }
    });

    // Init flip-panel
    flipPanel.init({
        frontTogglerSelector: `.flip-panel__front-toggler`,
        backTogglerSelector: `.flip-panel__back-toggler`,
        flipPanelSelector: `.flip-panel`
    });

});
