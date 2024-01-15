/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    distance:"60px",
    duration:2000,
    delay:100
});
sr.reveal(`.contact-headline, .projects-headline`,{
    delay:500,
});
sr.reveal(`.nav, .footer-home, .footer-social, .skills-tem, .projects-item`,{
    origin:"top",
    interval:100,
});
sr.reveal(`.contact-description, .contact-form`,{
    origin:"left",
    interval:100,
});

sr.reveal(`.hero-image`,{origin:"top"});
sr.reveal(`.hero-text`);
/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
//selecting elements
const contactForm=document.getElementById("contact-form"),
contactMessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail = async(e)=>{
    e.preventDefault(); //prevents default form submission

    sendButton.disbaled=true;
    sendButton.textContent="Sending....";

    try{
        await emailjs.sendForm(
        "service_0v6bmdn",
        "template_ygauvmb",
        "#contact-form",
        "JrPgaGuRHYQ_Fcr0S",
        );
        contactMessage.textContent="Message sent succesfully";
        setTimeout(()=>{
            contactMessage.textContent="";
        },4000);

        contactForm.reset();
    }
    catch(error){
        contactMessage.textContent="Message not sent(Network error)";
    }
    finally{
        sendButton.disbaled=false;
        sendButton.textContent="Send message";
    }
};
contactForm.addEventListener("submit",sendEmail);

function scrollToContent() {
    // Scroll to the hidden content when the button is pressed
    document.querySelector('.aboutme').scrollIntoView({
    behavior: 'smooth'
    });
}
function scrollToContent1() {
    // Scroll to the hidden content when the link is clicked
    var element = document.querySelector('.tech');

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'skills-item' not found.");
    }
}
function scrollToContent2() {
    // Scroll to the hidden content when the link is clicked
    var element = document.querySelector('.projects');

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'skills-item' not found.");
    }
}
function scrollToContent3() {
    // Scroll to the hidden content when the link is clicked
    var element = document.querySelector('.contact');

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'skills-item' not found.");
    }
}
