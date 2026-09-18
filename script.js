
const menuButton = document.getElementById("menuButton");

const closeMenu = document.getElementById("closeMenu");

const sideMenu = document.getElementById("sideMenu");

const profileButton = document.getElementById("profileButton");

const profilePanel = document.getElementById("profilePanel");

const overlay = document.getElementById("overlay");

const about = document.getElementById("about");

const contest = document.getElementById("contest");

const resources = document.getElementById("resources"); 

const leaderboard = document.getElementById("leaderboard");

const updates = document.getElementById("updates");


/* ========================================
   OPEN SIDE MENU
======================================== */

menuButton.addEventListener("click", () => {

    sideMenu.classList.add("active");

    overlay.classList.add("active");

    profilePanel.classList.remove("active");

});



/* ========================================
   CLOSE SIDE MENU
======================================== */

closeMenu.addEventListener("click", () => {

    sideMenu.classList.remove("active");

    overlay.classList.remove("active");

});



/* ========================================
   PROFILE BUTTON
======================================== */

profileButton.addEventListener("click", () => {

    profilePanel.classList.toggle("active");

    sideMenu.classList.remove("active");

    overlay.classList.remove("active");

});



/* ========================================
   CLICK OUTSIDE
======================================== */

overlay.addEventListener("click", () => {

    sideMenu.classList.remove("active");

    overlay.classList.remove("active");

});



/* ========================================
   ESCAPE KEY
======================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        sideMenu.classList.remove("active");

        profilePanel.classList.remove("active");

        overlay.classList.remove("active");

    }

});
about.addEventListener("click", () => {

    window.location.href = "menu/about.html";
});

contest.addEventListener("click", () => {

    window.location.href = "menu/contest.html";
});

resources.addEventListener("click", () => {

    window.location.href = "menu/resources.html";
}); 

leaderboard.addEventListener("click", () => {

    window.location.href = "menu/leaderboard.html";
}); 

updates.addEventListener("click", () => {

    window.location.href = "menu/updates.html";
}); 

