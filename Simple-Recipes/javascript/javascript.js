// RECIPE POP UP MODAL SECTION

// button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

// all modals for each recipe:
var modals = document.querySelectorAll(".recipe-modal");

var closeBtn = document.getElementsByClassName("close-btn");

function modalTimeout(){
    modal.style.display = "none";
}

for(var i = 0; i < btns.length; i++){
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
        setTimeout(modalTimeout, 10000);
    }
}

// close modal:
for(var i = 0; i < closeBtn.length; i++){
    closeBtn[i].onclick = function(){
        for (var index in modals){
            if(modals[index].style){
                modals[index].style.display = "none";
            }
        }
    }
}

// EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit',
    function(event){
        // override browser refresh when submit is pushed
        event.preventDefault();
    
        // field validation
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        var valMsg = document.getElementById('validateMsg');

        if(!firstName || !lastName || !phone || !message){
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields </p>';
        } else if (!emailPattern.test(email)) {
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email </p>';
        } else {
            // all fields ok:
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>';
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        console.log(JSON.stringify(formData));
    }
)