const inputEl = document.createElement('input');
const firstHeadingEl = document.getElementsByClassName('bar')[0];
const button = document.createElement('button');
const ulEl = document.getElementsByTagName('ul')[0];

button.innerText = 'Click me';
button.addEventListener('click', onBtnClick);

firstHeadingEl.append(button);
document.body.prepend(inputEl);

let i = 0;

function onBtnClick() {
    const liEl = document.createElement('li');
    liEl.innerText = 'Test ' + i++;
    const text = inputEl.value;
    // alert(text);

    ulEl.appendChild(liEl);
    const localInputEl = document.body.removeChild(inputEl);
    if (localInputEl) {
        ulEl.appendChild(localInputEl);
    }
}
