const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)


// function search() {
//     var f = 0;
//     var input = document.getElementById('srch').value;

//     var shipments = document.querySelectorAll(".shipments");

//     for (let i = 0; i < shipments.length; i++) {
//         if (shipments[i].id === input) {
//             shipments[i].style.display = "flex";
//             f = 1;
//         } else {
//             shipments[i].style.display = "none";
//         }
//     }
//     if (f == 0) {
//         document.getElementById("NoData").style.display = "flex";
//     } else {
//         document.getElementById("NoData").style.display = "none";
//     }
// }

// function empty() {
//     var shipments = document.querySelectorAll(".shipments");
//     shipments.forEach(element => {
//         element.style.display = "flex";
//     });
//     document.getElementById("NoData").style.display = "none";
// }


function search_keys() {
    var norows = document.getElementById('NoData');
    var matchedRow = false;
    let input = document.getElementById('srch').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('shipments');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "flex";
            matchedRow = true;
        }
    }

    norows.style.display = matchedRow ? 'none' : 'inherit';
    if (!matchedRow) {
        setTimeout(function() {
            norows.style.display = 'block';
        })
    }
}


var c = 370;


function prev() {
    c -= 370;
    if (c <= 2220) {
        document.getElementById("next").style.display = "flex";
    }
    if (c == 370) {
        document.getElementById("prev").style.display = "none";
    }
    var left = document.getElementById("g-scroll");
    left.scrollBy({
        top: 0,
        left: -370,
        behavior: 'smooth'
    });
}

function next() {
    c += 370;
    if (c >= 2220) {
        document.getElementById("next").style.display = "none";
    }
    if (c > 370) {
        document.getElementById("prev").style.display = "flex";
    }
    var right = document.getElementById("g-scroll");
    right.scrollBy({
        top: 0,
        left: 370,
        behavior: 'smooth'
    });
}

var y = 0;

function prevSearch() {
    var leftS = document.getElementById('sear');
    leftS.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
    });
    document.getElementById("inboundNext").style.display = "block";
    document.getElementById("inboundPrev").style.display = "none";
}

function nextSearch() {
    var rightS = document.getElementById("sear");
    rightS.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
    });
    document.getElementById("inboundNext").style.display = "none";
    document.getElementById("inboundPrev").style.display = "block";
}