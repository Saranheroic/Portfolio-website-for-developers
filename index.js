let menuIcon =document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

let sections =document.querySelectorAll("section");
let navLinks =document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add("active");
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbxM6aFVdg1ARwgsIUrPDLe9L8V9R46gaNhf1F-G0Kz87LvRm6Nn9Ovd-xzNZ_6s-VA_/exec'
const form = document.forms['submit-to-google-sheet']
  
form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })

    form.addEventListener('submit', e => {
        e.preventDefault();
        // Display a loading message
        const loadingMessage = document.createElement('p');
        loadingMessage.textContent = 'Submitting...';
        form.appendChild(loadingMessage);
    
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                // Remove the loading message
                form.removeChild(loadingMessage);
                form.reset(); // Reset the form
            })
            .catch(error => {
                console.error('Error!', error.message);
                // Remove the loading message
                form.removeChild(loadingMessage);
            });
    });
    