const scriptURL = 'https://script.google.com/macros/s/AKfycby7NDyJSHgMPgiHTczCLr8cZ6SC1XxbVU-jmwU5187-7yIJnQkXYUcmhNHmfmPv1tihQg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Mesajul a fost trimis!" ))
  .catch(error => console.error('Error!', error.message))
  console.log('Form submitted')
})