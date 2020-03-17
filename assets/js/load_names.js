const fs = require('fs');

let data = fs.readFileSync('json_files/nazwy.json', 'utf-8');
let object = JSON.parse(data);

let val = fs.readFileSync('json_files/nameValuation.json', 'utf-8');
let nameval = JSON.parse(val);

let nm_val = document.getElementById('name_valutation');

nm_val.append(nameval[0]);


for (let i = 0; i < object.length; i++) {
    
    let table = document.getElementById('table_');

    
    const t_r = document.createElement('tr');
    const t_d1 = document.createElement('td');
    const t_d2 = document.createElement('td');

    //...

    const inp2 = document.createElement('input');


    /**********************/

    table.appendChild(t_r);

    t_d1.classList.add('name_');
    t_d2.classList.add('unit_');


    /**********************/

    table.appendChild(t_r);

    t_r.appendChild(t_d1);
    t_r.appendChild(t_d2);
    //...

    t_d1.append(object[i]);
    t_d2.appendChild(inp2);


    //...

    inp2.classList.add('inp2')

    //...


    inp2.setAttribute("type", "text");
    inp2.placeholder = 'Jednostka miary';

    
}

    