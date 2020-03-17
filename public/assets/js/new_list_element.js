
/************ Użycie entera **************/
let txt_input = document.getElementById('new_elem');
let new_elem_btn = document.getElementById('btn_new');
txt_input.addEventListener('keyup', () =>{
    if (event.keyCode === 13) {
        event.preventDefault();
        new_elem_btn.click();
    }
})


/****************** Ukrycie LI ***********************/
var close = document.getElementsByClassName("close");
let li_el = document.getElementsByTagName('li')
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


/************* Zmiana klasy 'checked' na LI ****************/
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('x')
  }
}, false);

/****************** Tworzenie LI po kliknięciu przyciusku ********************/

let new_btn = document.getElementById('btn_new');

new_btn.addEventListener('click', () =>{
  var li = document.createElement("li");
  var inputValue = document.getElementById("new_elem").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('Pole nie może być puste!')
    return
  } else {
    document.getElementById("list_ul").appendChild(li);
  }
  document.getElementById("new_elem").value = "";

  var span = document.createElement("SPAN");

  li.appendChild(span);
})