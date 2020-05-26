const Store = require('electron-store');

let next_btn = document.getElementById('btn_next');
let inpu = document.getElementById('name_of_valuation')

const store = new Store()


    next_btn.addEventListener('click', () =>{

        store.set({
                name_val: inpu.value
        })
           
    });
