// ==UserScript==
// @name         Civitai X
// @namespace    Civitai-X
// @version      1.0.16
// @description  Some new features for working with Civitai
// @author       Duane Moody
// @match        https://civitai.com
// @include      https://civitai.com/*
// @connect      civitai.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=civitai.com
// @updateURL    https://github.com/duanemoody/CivitaiX/raw/refs/heads/main/CivitaiX.user.js
// @downloadURL  https://github.com/duanemoody/CivitaiX/raw/refs/heads/main/CivitaiX.user.js
// @grant        GM_addStyle

// ==/UserScript==

(function() {
    'use strict';
    console.info('CivitaiX running');

    const	generationsColumn	= 'div.mantine-1avyp1d',
		gCol			= document.querySelector(generationsColumn),
	    	body = document.querySelector('body'),
 		gensCountBadge		= 'div.mantine-Badge-root',
		prmptSelector		= 'div.mantine-1s7mjhu',
		cbSelector		= 'input[type="checkbox"]',
		badgeEarlyAccess	= 'div.mantine-1503eym',
		modelTitle		= 'div.mantine-pd27lf',
        	modelGrid		= 'div.mantine-1ofgurw',
	    	saveTo			= 'div.mantine-1usso6i',
		nolo			= null;

    // CSS:
    GM_addStyle(`${badgeEarlyAccess} {background-color: orange;} ${saveTo} {max-height:70vh;} ${modelGrid} {grid-template-columns: repeat(4, 25%)!important;} ${modelTitle} {-webkit-text-stroke: 2px black;
  paint-order: stroke fill;}`);

    // Make prompt gen count badges into buttons to click all the that prompt's gens' checkboxes
    // Delegate this to body because the column may not exist at page load
    body.addEventListener('click', e => {e.target.closest(gensCountBadge) && e.target.closest(prmptSelector).querySelectorAll(cbSelector).forEach(cb => {cb.click()})}, false);

})();
