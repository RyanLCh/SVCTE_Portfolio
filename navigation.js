
/* navigation.js */

/*  To do:
    1. Make a list of all the files in the navigation sequence
    2. Find the current file in the list
    3. Create links for the previous and next files in the list
*/

var pages = [
    "clock/clock.html",
    "basketball/basketball2d.html",
    "bmi.html",
    "zodiac.html",
    "sliders.html",
    "keys.html",
    "naviconsai/navicons.html",
    "resistors.html",
    "snake.html",
    "theobromine.html",
    "tictactoe.html",
    "icons/icons.html",
    "pollution/pollution.html",
    "college/college.html"
];

function findPage(page) {
    /*for(var i = 0; i < pages.length; i++) {
        if(page.search(pages[i]) > -1) {
            return i;
        }
    }*/
    
    for(var i = 0; i < pages.length; i++) {
        if(page.includes(pages[i])) {
            return i;
        }
    }
    return -1;
}

function findCurrentPage() {
    //returns index # of the current page
    var currentPage = document.location.href;
    var index = findPage(currentPage);
    return index;
}

function isInFolder(page) {
    return page.indexOf('/') > -1;
}

function setupNavigation() {
    var index = findCurrentPage();
    var nextIndex = (index+1) % pages.length;
    var previousIndex = (index-1+pages.length) % pages.length;
    var nextPage = pages[nextIndex];
    var previousPage = pages[previousIndex];
    
    if(isInFolder(pages[index])) {
        nextPage = "../" + nextPage;
        previousPage = "../" + previousPage;
    }
    
    document.getElementById('back').href = previousPage;
    document.getElementById('next').href = nextPage;
}

window.onload = setupNavigation;
