function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/*
  1. 找出頁面上所有按鈕，並把它們放到陣列中
  2. 使用迴圈，對每個按鈕偵聽 click 事件

  當任何按鈕被按下，執行 createParagraph() 函數
*/

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

