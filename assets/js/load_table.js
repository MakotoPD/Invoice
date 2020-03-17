const fs = require('fs');
const path = require('path');

let data = fs.readFileSync('json_files/nazwy.json', 'utf-8');
let object = JSON.parse(data);


let val = fs.readFileSync('json_files/nameValuation.json', 'utf-8');
let nameval = JSON.parse(val);

let nm_val = document.getElementById('name_valutation');

nm_val.append(nameval[0]);


let jm = fs.readFileSync('json_files/jm.json', 'utf-8');
let namejm = JSON.parse(jm);



for (let i = 0; i < object.length; i++) {
    
    let table = document.getElementById('table_');

    
    const t_r = document.createElement('tr');
    const t_d1 = document.createElement('td');
    const t_d2 = document.createElement('td');
    const t_d3 = document.createElement('td');

    //...

    const inp2 = document.createElement('input');
    const inp3 = document.createElement('input');

    //...

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    /**********************/

    table.appendChild(t_r);

    t_d1.classList.add('name_');
    t_d2.classList.add('meters_');
    t_d3.classList.add('price_');

    p1.classList.add('p1');
    p2.classList.add('p2');

    /**********************/

    table.appendChild(t_r);

    t_r.appendChild(t_d1);
    t_r.appendChild(t_d2);
    t_r.appendChild(t_d3);

    //...

    t_d1.append(object[i]);
    t_d2.appendChild(inp2);
    t_d3.appendChild(inp3);

    //...

    t_d2.appendChild(p1);
    t_d3.appendChild(p2);

    p1.append('zł')
    p2.append(namejm[i])

    //...

    inp2.classList.add('inp2')
    inp3.classList.add('inp3')

    //...


    inp2.setAttribute("type", "number");
    inp3.setAttribute("type", "number");
    inp2.placeholder = 'Cena netto za ' + namejm[i];
    inp3.placeholder = 'Ilość';

    
}

    