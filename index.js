const form = document.getElementById('login');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});


function take(){

    console.log("recieved")
    document.getElementById('Username').value
    form.reset();
    if ('Username'=="Tim"){
        console.log(true)
    }
}
