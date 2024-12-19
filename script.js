const button = document.getElementById("button");



function validate(event) {
  event.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let feedback = document.getElementById("feedback")
  nameMessages.style.display = "none";
  emailMessages.style.display = "none";
  feedbackMessages.style.display = "none";
  let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  let valid = true;

  if (!name.value) {
    nameMessages.style.display = "block";
    nameMessages.innerHTML = "<p style='color:red'>Name is required!<p>";
    valid = false;
  }

  if (!email.value) {
    emailMessages.style.display = "block";
    emailMessages.innerHTML = "<p style='color:red'>Email is required!<p>";
    valid = false;
    if(!name.value){
      name.focus()
    }else{
      email.focus();
    }
    
   
  } else if (!emailRegex.test(email.value)) {
    emailMessages.style.display = "block";
    emailMessages.innerHTML =
      "<p style='color:red'>Valid email is required!<p>";
    valid = false;
    if(!name.value){
      name.focus()
    }else{
      email.focus();
    }
    
  }

  if (valid) {
    feedbackMessages.style.display = "block";
    feedbackMessages.innerHTML =
      "<p style='color:green'>Thank you for your feedback!<p>";
    document.feedbackForm.reset();
  }
}
button.addEventListener("click", validate);