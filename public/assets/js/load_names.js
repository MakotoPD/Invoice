
const Store = require('electron-store');

const store = new Store({accessPropertiesByDotNotation: false});

let object = store.get('el_list');

let nameval = store.get('name_val');

let nm_val = document.getElementById('name_valutation');

nm_val.append(nameval);


for (let i = 0; i < object.length ; i++) {
    
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

    