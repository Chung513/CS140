document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const first = document.getElementById("firstName").value;
            const last = document.getElementById("lastName").value;
            const age = document.getElementById("age").value;
            const birthdate = document.getElementById("birthdate").value;

            if (!first || !last) {
                alert("Please provide your full name.");
                return;
            }

            if (!age || age < 18) {
                alert("You must be 18 years or older to submit this form.");
                return;
            }

            const data = {
                firstName: first,
                lastName: last,
                age: age
                password: document.getElementById("password").value,
                remember: document.getElementById("remember").checked,
                state: document.getElementById("state").value,
                birthdate: birthdate,
            };

            console.log(formData);
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    //alert('form submitted successfully.');
                    const message = document.getElementById("message");
                    const response = JSON.parse(xhr.responseText);
                    message.textContent = response.message;
                    const form = document.getElementById("myForm");
                    form.rest();
                    // document.getElementById("message").innerHTML = response.message;
                    // document.getElementById("myForm").innerHTML = "";
                } else if (xhr.readyState === 4) {
                    alert("Error submitting form.");
                }
            };
            xhr.send(JSON.stringify(data));
            alert("Success: ${fist} ${last}");
            // console.log(data);
        });