const persons = [
    { nom: 'Nom', prenom: 'Prénom', points: 10 },
    { nom: 'Nom', prenom: 'Prénom', points: 10 },
    { nom: 'Nom', prenom: 'Prénom', points: 10 },
];

let lignes = 0;
let Totalpoints = 0;

init();

function init() {
    for (let person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

function consoleTableau() {
    console.log(persons);
}

function doInsert(nom, prenom, points) {
    lignes++;
    Totalpoints += points;

    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

// Update table information
function update_summary() {
    document.getElementById('p1').innerText = lignes + " ligne(s)";
    document.getElementById('p3').innerText = "Total points = " + Totalpoints;
}

function doInsertRowTable(num, nom, prenom, points) {

    const table = document.querySelector('#tableau tbody');

    let row = document.createElement('tr');
    row.className = 'row';

    // Number
    let col1 = document.createElement('td');
    col1.className = 'col_number';
    col1.innerText = num;
    row.appendChild(col1);

    // Name
    let col2 = document.createElement('td');
    col2.className = 'col_text';
    col2.innerText = nom;
    row.appendChild(col2);

    // First name
    let col3 = document.createElement('td');
    col3.className = 'col_text';
    col3.innerText = prenom;
    row.appendChild(col3);

    // Points
    let col4 = document.createElement('td');
    col4.className = 'col_number';
    col4.innerText = points;
    row.appendChild(col4);

    // Checkbox
    let col5 = document.createElement('td');
    col5.className = 'col_chkbox';

    let chkbox = document.createElement('input');
    chkbox.type = 'checkbox';

    col5.appendChild(chkbox);
    row.appendChild(col5);

    table.appendChild(row);
}