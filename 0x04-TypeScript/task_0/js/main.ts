const tbl = document.createElement('table');
const tbl_head = document.createElement('th');
const tbl_head_cell1 = document.createElement('td');
tbl_head_cell1.textContent = 'Name';
const tbl_head_cell2 = document.createElement('td');
tbl_head_cell2.textContent = 'Age';
const tbl_head_cell3 = document.createElement('td');
tbl_head_cell3.textContent = 'Location';
const tbl_head_cell4 = document.createElement('td');
tbl_head_cell4.textContent = 'Class';
tbl_head.appendChild(tbl_head_cell1);
tbl_head.appendChild(tbl_head_cell2);
tbl_head.appendChild(tbl_head_cell3);
tbl_head.appendChild(tbl_head_cell4);
tbl.appendChild(tbl_head);
