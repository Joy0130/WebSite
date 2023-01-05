var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
var products = [ 
'Underpants:6.99',
'Socks:5.99',
'T-shirt:14.99',
'Trousers:31.99',
'Shoes:23.99'];
 

                

for (var i = 0; i < products.length; i++) { // 當i不在小於products陣列長度時停止迴圈
  // 將陣列拆分單獨2項(名稱&價格)
  var input = products[i].split(':'); //var myNewString = myArray.join(',');
  var name1 = input[0];
  // 將字串轉為數字
  var price = Number(input[1]); //let myNum = Number(myString); or let myString = myNum.toString();
  total += price;
  // 將正確的文字顯示在上面
  itemText =  name1 +'---$' + price;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
