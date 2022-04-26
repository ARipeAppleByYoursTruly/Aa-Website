"use strict";

// ===== include HTMLs =====
w3.includeHTML(main);



function main() {
    // ===== Events =====
    // ----- Toggle top nav list in mobile -----
    // Menu button
    document.querySelector(".top-nav .menu").onclick = function() {
        // List of <li>
        document.querySelectorAll(".top-nav ul li").forEach(function(current_li) {
            // Ignore logo
            if (current_li.classList.contains("to-home")) {
                return;
            }
            else {
                var current_div = current_li.getElementsByTagName("div")[0];

                if (window.getComputedStyle(current_div).display == "none") {
                    current_div.style.display = "flex";
                }
                else {
                    current_div.style.display = "none";
                }
            }
        });
    }



    // ----- Scroll to top -----
    // Scroll to top button
    document.querySelector(".page-footer .scroll-to-top").onclick = function() {
        window.scrollTo(0, 0);
    }
}
