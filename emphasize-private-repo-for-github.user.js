// ==UserScript==
// @name         Emphasize private repo for GitHub
// @namespace    http://kyanny.me/
// @version      0.1
// @description  Display very large sticky `lock` icon.
// @author       Kensuke Nagae
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.querySelectorAll('h1.private').length > 0) {
        var svg = document.querySelector('svg.octicon.octicon-lock').cloneNode(true);
        svg.setAttribute('height', 160);
        svg.setAttribute('width', 120);
        var div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '60px';
        div.style.left = '60px';
        div.appendChild(svg);
        document.body.appendChild(div);
    }
})();
