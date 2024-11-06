function handleSubmit() {
    let parms = {
    // Collect data from the form
     name : document.getElementById('name').value,
     email : document.getElementById('email').value,
     subject : document.getElementById('subject').value,
     message : document.getElementById('message').value,
    }
    
    emailjs.send("service_vjyoo2t", "template_rsv070p",parms).then(alert("Email sent!!"))
}