// ==UserScript==
// @name         Civitai X
// @namespace    Civitai-X
// @version      2025-05-13
// @description  Some new features for working with Civitai
// @author       Duane Moody
// @match        https://civitai.com
// @include      https://civitai.com/*
// @connect      civitai.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=civitai.com
// @downloadURL  https://github.com/duanemoody/CivitaiX/raw/refs/heads/main/CivitaiX.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Make prompt gen count badges into buttons to click all the that prompt's gens' checkboxes
    const	generationsColumn	= 'div.mantine-1vbsd0c',
 			gensCountBadge		= 'div.mantine-Badge-root',
			prmptSelector		= 'div.mantine-1s7mjhu',
			cbSelector			= 'input[type="checkbox"]',
      badgeEarlyAccess	= 'div.mantine-1503eym',
      modelTitle			= 'div.mantine-pd27lf',
      nolo				= null;

    // div.mantine-1503eym {background-color: orange;}
    //.mantine-pd27lf {-webkit-text-stroke: 0.2px black;}

    // Delegate this to the ancestor column div

    GM_addStyle("div.mantine-1503eym { background-color: orange; } .mantine-pd27lf {-webkit-text-stroke: 0.2px black;}");

    if (document.querySelector(generationsColumn)) {
        document.querySelector(generationsColumn).addEventListener('click', e => {
            e.target.closest(gensCountBadge) && e.target.closest(prmptSelector).querySelectorAll(cbSelector).forEach(cb => {cb.click()})
        }, false);
    }


    //GM_addStyle("body { color: white; background-color: black } img { border: 0 }");



})();
