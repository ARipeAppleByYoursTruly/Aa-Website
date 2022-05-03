"use strict";

w3.includeHTML(main);



function main() {
    // ----- Scroll to top -----
    // Scroll to top button
    document.querySelector(".page-footer .scroll-to-top").onclick = function() {
        window.scrollTo(0, 0);
    }
}