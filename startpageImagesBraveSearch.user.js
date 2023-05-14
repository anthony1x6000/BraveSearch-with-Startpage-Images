// ==UserScript==
// @name         Brave to StartPage DuckDuckGo Images
// @namespace    https://github.com/anthony1x6000/BraveSearch-with-Startpage-Images
// @version      0.2
// @description  Use StartPage or other services as an image service for Brave Search.
// @author       anthony1x6000
// @match        https://search.brave.com/search?*
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
    let imageService = "duckduckgo";
    let tabImages = document.querySelector("#tab-images");
    tabImages.onclick = function() {
        switch (imageService) {
            case "startpage":
                imgredir = `https://www.startpage.com/sp/search?&query=${storeValue()}&cat=images`;
                break;
            case "duckduckgo":
                imgredir = `https://duckduckgo.com/?hps=1&q=${storeValue()}&iax=images&ia=images`;
                break;
            default:
                imgredir = `https://www.startpage.com/sp/search?&query=${storeValue()}&cat=images`;
        }
        window.open(imgredir);
        popup = document.querySelector("#tab-images > div");
        popup.remove();
    }

})();
