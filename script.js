/* =========================================
   TELEGRAM LINKS
========================================= */

const TELEGRAM_LINKS = {

    tutoring:
        "https://t.me/YOUR_TUTORING_BOT",

    works:
        "https://t.me/YOUR_WORKS_BOT"

};


/* =========================================
   TELEGRAM BUTTONS
========================================= */

document
    .querySelectorAll("[data-link]")
    .forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const type =
                button.dataset.link;

            const url =
                TELEGRAM_LINKS[type];


            if (!url) {
                return;
            }


            if (
                url.includes("YOUR_TUTORING_BOT") ||
                url.includes("YOUR_WORKS_BOT")
            ) {

                console.log(
                    "Здесь должна быть Telegram-ссылка:",
                    type
                );

                return;
            }


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
    document.querySelector("header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 10px 35px rgba(7, 52, 90, 0.07)";

        } else {

            header.style.boxShadow =
                "none";

        }

    },
    { passive: true }
);


/* =========================================
   ANCHOR LINKS
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });