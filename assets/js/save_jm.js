
const path = require('path');

let gen_btn = document.getElementById('btn_next');
let inp = document.getElementsByTagName('input');




const GlobalProject = []

    gen_btn.addEventListener('click', () =>{
        for (let i = 0; i < inp.length; i++) {
            inp[i].setAttribute("name", inp[i].value);
            GlobalProject.push(inp[i].name);

            let pathToFile = path.join(__dirname, 'json_files/jm.json')
            let data = JSON.stringify((GlobalProject));

            fs.writeFileSync(pathToFile, data, 'utf-8')
        };
    });
