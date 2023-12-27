function sendemail(){
    emailjs.init("Lr9KLHVcgc-5FPKjr");

  var serviceID = "service_8icdots";
  var templateID = "template_h8fpx94";

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    sendercontact: document.querySelector("#contact").value,
    message: document.querySelector("#message").value,
  };

  emailjs.send(serviceID, templateID, params)
  .then(function (res){
    alert('Thank you, ' + params['sendername'] + '! Your message has been sent.');
  })
  .catch(function (error) {
    console.error('Error sending email:', error);
    alert('There was an error sending your message. Please try again later.');
  });
}