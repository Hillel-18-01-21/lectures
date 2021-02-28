const ENTER_KEY_CODE = 13;

const inputEl = document.getElementById('task-input');
const buttonEl = document.getElementById('task-add-btn');
const listEl = document.getElementById('task-list');
const liTemplate = document.getElementById('li-template').innerHTML;

// const containerEl = document.getElementById('task-input-container');

buttonEl.addEventListener('click', onTaskCreate);
inputEl.addEventListener('keypress', e => {
    console.log('input keypress');
    if (e.keyCode === ENTER_KEY_CODE && !e.altKey) {
        onTaskCreate(e);
    }
    e.stopPropagation(); // stopping handling of following keypressing
});

listEl.addEventListener('click', onLiClick);

// containerEl.addEventListener('click', e => {
//     alert('wrong click');
// });

function onLiClick(e) {
    e.target.remove();
}

function onTaskCreate(e) {
    const taskEl = document.createElement('li');
    taskEl.innerHTML = liTemplate
        .replace('{{number}}', listEl.childElementCount + 1)
        .replace('{{task}}', inputEl.value);
    
    listEl.append(taskEl);

    inputEl.value = '';
}

// const aEl = document.getElementById('a-element');

// aEl.addEventListener('click', e => {
//     e.preventDefault(); // canceling default behaviour
//     if (confirm('Are you sure?')) {
//         console.log(e);
//         window.location = e.target.href;
//     }
// });