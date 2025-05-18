// ==UserScript==
// @name         Civitai X
// @namespace    Civitai-X
// @version      1.0.19
// @description  Some new features for working with Civitai
// @author       Duane Moody
// @match        https://civitai.com
// @match        https://civitai.green
// @include      https://civitai.com/*
// @include      https://civitai.green/*
// @connect      civitai.com
// @connect      civitai.green
// @icon         https://www.google.com/s2/favicons?sz=64&domain=civitai.com
// @updateURL    https://github.com/duanemoody/CivitaiX/raw/refs/heads/main/CivitaiX.user.js
// @downloadURL  https://github.com/duanemoody/CivitaiX/raw/refs/heads/main/CivitaiX.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    console.info('CivitaiX running');

	const
		body = document.querySelector('body'),
		// Selectors are defined here because mantine could change them later
		sel = {
			generationsColumn:	'div.mantine-1avyp1d',
			gensCountBadge:		'div.mantine-Badge-root',
			prmptSelector:		'div.mantine-1s7mjhu',
			cbSelector:			'input[type="checkbox"]',
			badgeEarlyAccess:	'div.mantine-1503eym',
			modelTitle:			'div.mantine-pd27lf',
			modelGrid:			'div.mantine-1ofgurw',
			saveTo:				'div.mantine-1usso6i'
		};

    // CSS: Don't use Greasemonkey because they removed this method
	GM_addStyle(`
		${sel.badgeEarlyAccess} {background-color: orange;} 
		/* ${sel.modelGrid}	{grid-template-columns: repeat(4, 25%)!important;} */ 
		${sel.modelTitle} {
			-webkit-text-stroke: 2px black; 
			paint-order: stroke fill;
		} 
		${sel.saveTo} {max-height:70vh;} 
		${sel.gensCountBadge} {cursor: pointer;}
	`);

    // Add event listeners
    body.addEventListener(
		'click', e => {
		    /* Make prompt gen count badges into buttons to click all the that prompt's gens' checkboxes. Raw clicks are sent instead of directly changing checkbox values because the download/delete buttons don't actually reference checkbox values. */
			e.target.closest(sel.gensCountBadge) && e.target.closest(sel.prmptSelector).querySelectorAll(sel.cbSelector).forEach(cb => {cb.click()});
		}
	, false);

})();
