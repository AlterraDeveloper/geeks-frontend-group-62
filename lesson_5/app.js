const originalArray = [48, 14, 5, 89, 102, 55, 12];

const originalContainer = document.querySelector("#original");
const resultContainer = document.querySelector("#result");

// for (const item of originalArray) {
//   const div = document.createElement("div");
//   div.classList.add("color-box");
//   div.textContent = item;
//   originalContainer.appendChild(div);
// }

// Call back functions - колбек функции (функции обратного вызова)

// 1. forEach

originalArray.forEach(function (item) {
  const div = document.createElement("div");
  div.classList.add("color-box");
  div.textContent = item;
  originalContainer.appendChild(div);
});


function showResult(array) {
    const html = array.map(function(item) {
        return `<div class="color-box">${item}</div>`;
    });
    resultContainer.innerHTML = html.join("");
}

// [1, 2, 3]

// <div class="color-box">1</div>
// <div class="color-box">2</div>
// <div class="color-box">3</div>

function makeMap(){
    // const newPrices = originalArray.map(function(item){
    //     return item / 2;
    // });
    const dollars = originalArray.map((item) => (item / 87.8).toFixed(2) + "$");
    showResult(dollars);
}


function makeFilter(){
    const filtered = originalArray.filter(x => x  > 0);
    showResult(filtered);
}

function makeReduce(){
    const max = originalArray.reduce(function(maxValue, current){
        return current > maxValue ? current : maxValue;
    });

    const min = originalArray.reduce(function(minValue, current){
        return current < minValue ? current : minValue;
    });

    const sum = originalArray.reduce(function(sumValue, current){
        return sumValue + current;
    })

    const average = Math.round(sum / originalArray.length);

    showResult([max, min, sum, average]);
}





