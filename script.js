function transferData() {
  const sourceTable = document.querySelector('.oilpricenettable2');
  const goldPrice = sourceTable.querySelector('tr:nth-child(2) td:first-child span').textContent.trim(); 
  const dataTds = sourceTable.querySelectorAll('tr:nth-child(2) td'); 
  const targetRow = document.getElementById('targetRow');
  const goldPriceTd = document.createElement('td');
  
  goldPriceTd.textContent = goldPrice.replace('$', ''); 
  targetRow.appendChild(goldPriceTd);
  
  const changeSymbol = dataTds[1].textContent.trim().charAt(0); 
  const percentageContent = dataTds[3].textContent.trim(); 
  const newTd = document.createElement('td');
  
  if (changeSymbol === '▲') {
    newTd.textContent = `+${percentageContent}`; 
    newTd.classList.add('up'); 
  } else if (changeSymbol === '▼') {
    newTd.textContent = `-${percentageContent}`; 
    newTd.classList.add('down'); 
  } else {
    newTd.textContent = percentageContent; 
  }
  
  targetRow.appendChild(newTd); 
}


window.onload = transferData;

// make fill color on tr
const tabless = document.querySelectorAll('table');
if (tabless.length >= 4) {
  const secondTableRows = tabless[1].querySelectorAll('tr'); // Tabel kedua
  const fourthTableRows = tabless[3].querySelectorAll('tr'); // Tabel keempat
  secondTableRows.forEach(row => {
      row.style.backgroundColor = '#f4f9fe'; // Ganti warna sesuai keinginan
  });
  fourthTableRows.forEach(row => {
      row.style.backgroundColor = '#e0f7fa'; // Ganti warna sesuai keinginan
  });
}