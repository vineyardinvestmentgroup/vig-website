document.addEventListener("DOMContentLoaded", function () {

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

                document.getElementById("successMessage").style.display = "block";

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