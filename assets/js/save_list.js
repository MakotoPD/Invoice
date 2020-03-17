const fs = require('fs');
const path = require('path');

let gen_btn = document.getElementById('btn_generate');
let list_element = document.getElementsByTagName('li');




const GlobalProject = []

    gen_btn.addEventListener('click', () =>{
        for (let i = 0; i < list_element.length; i++) {
            list_element[i].removeChild(list_element[i].lastChild);
            list_element[i].innerHTML = list_element[i].innerText;
            list_element[i].setAttribute("id", list_element[i].innerHTML);

            GlobalProject.push(list_element[i].id);

            let pathToFile = path.join(__dirname, 'json_files/nazwy.json')
            let data = JSON.stringify((GlobalProject));

            fs.writeFileSync(pathToFile, data, 'utf-8')
        };
    });
