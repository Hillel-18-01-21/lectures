// const blockEl = document.getElementById('block');

// blockEl.innerHTML = '<h1>Test</h1>';

// blockEl.innerHTML += '<h2>Test 2</h2>';

// blockEl.outerHTML = '<h1>Test</h1>';

// console.log(blockEl);

// Events

// const btnEl = document.getElementById('btn');

// btnEl.addEventListener('click', onBtnClick);
// btnEl.addEventListener('click', onInlineBtnClick);

// btnEl.onclick = () => {
//     onBtnClick();
//     onInlineBtnClick();
// };

// console.dir(btnEl);

// function onBtnClick(evt) {
//     console.log(evt);
// }

// function onInlineBtnClick() {
//     btnEl.classList.toggle('red');
// }

// const megaBox = document.getElementById('mega-box');
const boxEl = document.getElementById('box');
const colorInputEl = document.getElementById('color-input');

boxEl.style.borderRadius = '100px';
boxEl.classList.add('black');

// document.addEventListener('click', onMouseClick, true);
// document.addEventListener('keypress', onKeyPress);

// boxEl.addEventListener('click', e => {
//     console.log('box event');
// });

// megaBox.addEventListener('click', e => {
//     console.log('mega-box event');
// });


// function onMouseClick(e) {
//     console.log('document event');
//     boxEl.style.top = e.clientY - 50 + 'px';
//     boxEl.style.left = e.clientX - 50 + 'px';
// }

// function onKeyPress(e) {
//     let color = 'black';
//     switch (e.code) {
//         case 'KeyB':
//             color = 'blue';
//             break;
//         case 'KeyG':
//             color = 'green';
//             break;
//         case 'KeyR':
//             color = 'red';
//             break;
//         default:
//             color = 'black';
//     }
//     boxEl.classList[1] && boxEl.classList.remove(boxEl.classList[1]);
//     boxEl.classList.add(color);
// }

colorInputEl.addEventListener('change', e => {
    boxEl.style.backgroundColor = e.target.value;
});