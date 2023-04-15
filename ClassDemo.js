var items =document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
 items[1].textContent = 'Hello 2';
 items[1].style.fontweight = 'bold';
 items[1].style.backgroundcolor = 'yellow';

  items.style.backgroundcolor='#f4f4f4';
for(var i=0;i<items.length;i++){
    items[i].style.backgroundcolor ='#f4f4f4';
 } 
 
 
 
 
 
 
 
