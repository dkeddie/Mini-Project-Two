function sendMail(contactForm) {
  emailjs.send("Coding","template_45bz6nb", {
    "from_name": contactForm.name.value,
    "reply_to": contactForm.emailaddress.value,
    "message": contactForm.projectsummary.value
    })
  .then(
    function(response) {
      console.log("SUCCESS", response);
    },
    function(error) {
      console.log("FAILED", response)
    });
  return false;
}