function doInsertRowTable(num, nom, prenom, points) {

    // Get table and create a row
    const table = document.getElementById('tableau');
    let row = document.createElement('tr');
    row.className = 'row';

    // Number
    let col1 = document.createElement('td');
    col1.className = 'col_number';
    col1.innerText = num;
    row.appendChild(col1);

    // Last name
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