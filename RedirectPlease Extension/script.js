document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("Hello World!");
});

(function() {
    'use strict';

    setTimeout(function() {
        var path0 = window.location.pathname;
        var path1 = path0.substring(0, 5);
        if (path1 === "/u/0/") {
            window.location.replace(path0.replace("/u/0/", "/u/1/"));
        }
    }, 100);
 
	
})();
