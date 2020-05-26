const Store = require('electron-store');

const store = new Store({accessPropertiesByDotNotation: true});

let gen_btn = document.getElementById('btn_generate');
let list_element = document.getElementsByTagName('li');

let lista = []

    gen_btn.addEventListener('click', () =>{
        for (let i = 0; i < list_element.length; i++) {
            list_element[i].removeChild(list_element[i].lastChild);
            list_element[i].innerHTML = list_element[i].innerText;
            list_element[i].setAttribute("id", list_element[i].innerHTML);

            lista.push(list_element[i].id);
        };
        store.set('el_list', lista)
    });