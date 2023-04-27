// ==UserScript==
// @name         Brave to Startpage Images
// @namespace    https://github.com/anthony1x6000/BraveSearch-with-Startpage-Images
// @version      0.1
// @description  Use StartPage as an image service for Brave Search.
// @author       anthony1x6000
// @match        https://search.brave.com/search?q=*
// @icon         https://brave.com/static-assets/images/brave-favicon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function storeValue() {
        let searchBox = document.querySelector("#searchbox");
        let searchValue = searchBox.value;
        return searchValue;
    }

    let popup;
    let imgredir;
    let SPpreference;
    let tabImages = document.querySelector("#tab-images");
    tabImages.onclick = function() {
        //SPpreference = "prfe=" + "adfa3411ba8020cd76c17db84e9cb1bb72ed463f538f4b3f308bc6f294facedabfc8d5d231f716d048f5419444e3f969f432445f5268362ac9d1d9ad03bf78892908f9f6d0a683f079b4f2d1";
        if (SPpreference) {
            imgredir = `https://www.startpage.com/sp/search?${SPpreference}&query=${storeValue()}&cat=images`;
        } else {
            imgredir = `https://www.startpage.com/sp/search?&query=${storeValue()}&cat=images`;
        }

        window.open(imgredir);
        popup = document.querySelector("#tab-images > div");
        popup.remove();
    }

})();