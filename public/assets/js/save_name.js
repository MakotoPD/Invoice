const fs = require('fs');
const path = require('path');

let next_btn = document.getElementById('btn_next');
let inpu = document.getElementById('name_of_valuation')




const nameOfValuation = []

    next_btn.addEventListener('click', () =>{

            nameOfValuation.push(inpu.value);

            let pathToFile = path.join(__dirname, '/json_files/nameValuation.json')
            let data = JSON.stringify((nameOfValuation));

            fs.writeFileSync(pathToFile, data, 'utf-8')
    });
