// ==UserScript==
// @name         Brave to StartPage DuckDuckGo Images
// @namespace    https://github.com/anthony1x6000/BraveSearch-with-Startpage-Images
// @version      0.2
// @description  Use StartPage or other services as an image service for Brave Search.
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
    let imageService = "duckdg";
    let tabImages = document.querySelector("#tab-images");
    tabImages.onclick = function() {
        switch (imageService) {
            case "spage":
                var SPpreference;
                imgredir = `https://www.startpage.com/sp/search?&query=${storeValue()}&cat=images`;
                break;
            case "duckdg":
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