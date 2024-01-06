document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#333'; // Change the color as per your preference
        });

        item.addEventListener('mouseleave', function () {
            this.style.backgroundColor = ''; // Reset to the default background color
        });
    });

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(tabname, event) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // FOR media side menu//
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }
});
