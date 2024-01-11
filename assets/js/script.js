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