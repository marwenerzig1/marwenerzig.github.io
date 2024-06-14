const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

          
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


/* ---------------------------------------------------- */

// Get references to the select element and flag images
const select = document.getElementById('languageSelect');
const frFlag = document.getElementById('frFlag');
const enFlag = document.getElementById('enFlag');


// Add an event listener to update the selected option based on the flag clicked
frFlag.addEventListener('click', () => {
    select.value = 'fr';
});
enFlag.addEventListener('click', () => {
    select.value = 'en';
});

// Update the flag display based on the selected option
select.addEventListener('change', () => {
    if (select.value === 'fr') {
        frFlag.classList.add('active');
        enFlag.classList.remove('active');
    } else if (select.value === 'en') {
        enFlag.classList.add('active');
        frFlag.classList.remove('active');
    }
});

// Initialize the flag display based on the initial selected option
if (select.value === 'fr') {
    frFlag.classList.add('active');
} else if (select.value === 'en') {
    enFlag.classList.add('active');
}

//mail 
function validateEmail(email) {
    // Regular expression for validating email address
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function composeEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all required fields.");
        return false; 
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }
    
    // Construct mailto link with pre-filled subject and body
    var subject = encodeURIComponent("New Contact Form Submission");
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    var mailtoLink = "mailto:marwenerzig4@gmail.com?subject=" + subject + "&body=" + body;

    // Open email client
    window.location.href = mailtoLink;
    return false;
}

//refrech page 
function refreshPage() {
    location.reload();
}