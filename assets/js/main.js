document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("mobileMenuToggle");
    const navigation = document.getElementById("mainNavigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("active");

            if (navigation.classList.contains("active")) {

                menuToggle.textContent = "✕ Close";

            } else {

                menuToggle.textContent = "☰ Menu";

            }

        });

        const navLinks = navigation.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuToggle.textContent = "☰ Menu";

            });

        });

    }

    const form = document.getElementById("opportunityForm");

    if (!form) return;

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = new FormData(form);

        try {

            const response = await fetch(form.action, {

                method: "POST",

                body: data,

                headers: {

                    "Accept": "application/json"

                }

            });

            if (response.ok) {

                form.reset();

                const successMessage = document.getElementById("successMessage");

                if (successMessage) {

                    successMessage.style.display = "block";

                }

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            } else {

                alert("There was a problem submitting your opportunity. Please try again.");

            }

        } catch(error){

            alert("There was a network error. Please try again.");

        }

    });

});