let randomNumber = Math.floor(Math.random() * 100) + 1; //randomNumber — 產生隨機數字 1-100
console.log(randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
console.log(lowOrHi);
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessField.focus(); // 一進入畫面自動顯示游標不需使用者點選

function checkGuess() {
    const userGuess = Number(guessField.value);
	
    //var userGuess = Number(guessField.value); //宣告 userGuess 的變數，並將其值設置為在表單中文字輸入格內的當前值。透過內建的 Number() 方法運行此值，確保該值是數字
    //判斷玩家遊玩的次數
    if (guessCount === 1) {
      guesses.textContent = '曾經猜過: ';
    }
    //將當前 userGuess 的值(玩家猜測的值)加上一個空格，讓顯示的每次猜測紀錄之間都有一個空格。
    guesses.textContent += userGuess + ' ';
    
    // 檢查用戶的猜測是否等於設置的randomNumber;如果是→代表玩家猜對了，贏了遊戲，顯示綠色訊息，清除 lowOrHigh 段落的內容，
    // 並運行 setGameOver() 的函式
    if (userGuess === randomNumber) {
      lastResult.textContent = '恭喜答對';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } 
	
    // 檢查本次猜測是否為玩家的最後一次猜測機會。如果是→則執行與上一個條件區塊相同的操作，遊戲結束訊息
    else if (guessCount === 10) {
      lastResult.textContent = '遊戲結束!!';
      lowOrHi.textContent = '';
      setGameOver();
    } 
	
    // 在其他兩個測試都沒有返回 true 時執行，當玩家沒有猜對，但他們還有猜測的機會
    // 檢查猜測是高於還是低於正確答案 randomNumber，並顯示訊息
    else {
        lastResult.textContent = '錯誤';
        lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
        lowOrHi.textContent = '太低';
      } 
    else if(userGuess > randomNumber) {
        lowOrHi.textContent = '太高';
      }
    }
	
    //讓玩家提交下一個猜測
    guessCount++; // 將guessCount變數加 1，來增加玩家已使用的猜測次數（++是遞增操作 - 遞增 1）
    guessField.value = ''; //將表單中文字輸入格內的文字清空
    guessField.focus(); //顯示文字輸入游標
  }

    //為 guessSubmit 按鈕添加一個事件偵聽器，當點擊事件發生時運行 checkGuess()函式的程式 <在編寫 addEventListener() 內部時我們不需要為函式加上括號>
    guessSubmit.addEventListener('click', checkGuess); //checkGuess 不需要括號

//遊戲結束後的動作
function setGameOver() {
    //將表單的文字輸入和按鈕的 disabled 屬性設為 true 將兩者變為無效，如果沒有這麼做，使用者可能會在遊戲結束後繼續送出更多猜測值
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = '重玩';
    //使用者按下resetButton 按鈕時執行 resetGame() 的函數
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//重新開始遊戲
//將所有東西重置到遊戲的初始狀態，讓玩家可以再玩一次
function resetGame() {
    guessCount = 1; //將 guessCount 設回 1
  
    //清除所有訊息段落
    var resetParas = document.querySelectorAll('.resultParas p'); 
    for (var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton); //將重置按鈕移除
  
    //將表單元素變為有效
    guessField.disabled = false;
    guessSubmit.disabled = false;
	
    //清空文字輸入並給予其焦點，讓玩家能夠進行新一輪的猜測
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white'; //將lastResult 段落的背景顏色設回白色
  
    randomNumber = Math.floor(Math.random() * 100) + 1; //生成一個新的隨機數值
    console.log(randomNumber);
  }
  



