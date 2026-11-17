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

// Read the form, check it, then add the new person
function doNewData() {
    let inputNom = document.getElementById('form_nom');
    let inputPrenom = document.getElementById('form_prenom');
    let inputPoints = document.getElementById('form_points');

    let nom = inputNom.value;
    let prenom = inputPrenom.value;
    let points = parseInt(inputPoints.value);

    // Check that no field is empty
    if (nom === '' || prenom === '' || isNaN(points)) {
        alert('Formulaire incomplet !');
    } else {
        doInsert(nom, prenom, points);
        persons.push({ nom: nom, prenom: prenom, points: points });

        // Empty the fields
        inputNom.value = '';
        inputPrenom.value = '';
        inputPoints.value = '';
    }
}

// Delete the selected rows
function deleteRow() {

    // 1. Is the table empty?
    if (lignes === 0) {
        alert('Le tableau est vide !');
        return;
    }

    // 2. Get all rows and the checked boxes
    let rows = document.querySelectorAll('#tableau tbody tr');
    let checked = document.querySelectorAll('#tableau tbody input:checked');

    // 3. Nothing selected?
    if (checked.length === 0) {
        alert('Sélectionnez au moins une ligne !');
        return;
    }

    // 4. Ask for confirmation
    if (!confirm('Supprimer ' + checked.length + ' ligne(s) ?')) {
        return;
    }

    // 5. Go through the rows from the end (so the indexes stay correct)
    for (let i = rows.length - 1; i >= 0; i--) {
        let chkbox = rows[i].querySelector('input');

        if (chkbox.checked) {
            // Points are in the 4th cell
            Totalpoints -= parseInt(rows[i].cells[3].innerText);
            lignes--;

            persons.splice(i, 1);   // remove from the array
            rows[i].remove();       // remove from the table
        }
    }

    // 6. Renumber the N column
    let remaining = document.querySelectorAll('#tableau tbody tr');
    for (let i = 0; i < remaining.length; i++) {
        remaining[i].cells[0].innerText = i + 1;
    }

    // 7. Update the summary and show a message
    update_summary();
    alert('Suppression effectuée !');
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