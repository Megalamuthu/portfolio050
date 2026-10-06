

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");


    const icon =
        menuBtn.querySelector("i");


    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }

    else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =====================================
   CLOSE MOBILE MENU
===================================== */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");


            const icon =
                menuBtn.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =====================================
   TYPING EFFECT
===================================== */

const typingText =
    document.getElementById("typing");


const words = [

    "Embedded Systems Enthusiast",

    "Digital Electronics Learner",

    "Motor Control Enthusiast",

    "Edge AI Explorer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {


    const currentWord =
        words[wordIndex];


    if (!deleting) {


        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    }


    else {


        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        if (charIndex === 0) {


            deleting = false;


            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 45 : 80

    );

}


typeEffect();


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
    document.querySelectorAll("section");


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {


        let current = "";


        sections.forEach(section => {


            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {


            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/* =====================================
   BACK TO TOP
===================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    () => {


        if (
            window.scrollY > 500
        ) {

            topBtn.style.display =
                "block";

        }

        else {

            topBtn.style.display =
                "none";

        }

    }
);


topBtn.addEventListener(
    "click",
    () => {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(

        ".project-card, " +
        ".skill-card, " +
        ".stat, " +
        ".timeline-item, " +
        ".interest-item"

    );


const observer =
    new IntersectionObserver(

        entries => {


            entries.forEach(entry => {


                if (
                    entry.isIntersecting
                ) {


                    entry.target.style.opacity =
                        "1";


                    entry.target.style.transform =
                        "translateY(0)";


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },


        {

            threshold: 0.15

        }

    );


revealElements.forEach(element => {


    element.style.opacity = "0";


    element.style.transform =
        "translateY(30px)";


    element.style.transition =
        "opacity 0.7s ease, " +
        "transform 0.7s ease";


    observer.observe(element);

});
```
