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
const contactform=document.getElementById("contact-form"),
contactMessage =document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");
const sendEmail =async(e)=>{//to use await properties=async to prevent half filled submission of form, prevents default form submission
e.preventDefault();
sendButton.disabled=true;
sendButton.textContent="Sending...."
try{
    await emailjs.sendForm(
        "service_0v6bmdn",
        "template_ygauvmb",
        "#contact-form",
        "JrPgaGuRHYQ_Fcr0S",
    );
    contactMessage.textContent="Message sent successfully";
    setTimeout(()=>{
        contactMessage.textContact="";
    },4000);
    contactform.requestFullscreen();
}
catch(error){
    contactMessage.textContent="Message not sent(service error)";
}
finally{
    sendButton.disabled=false;
    sendButton.textContent="Send Message";
}
};
contactform.addEventListener("Submit",sendEmail);