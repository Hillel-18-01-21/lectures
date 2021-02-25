const ENTER_KEY_CODE = 13;

const inputEl = document.getElementById('task-input');
const buttonEl = document.getElementById('task-add-btn');
const listEl = document.getElementById('task-list');

buttonEl.addEventListener('click', onTaskCreate);
inputEl.addEventListener('keypress', e => {
    if (e.keyCode === ENTER_KEY_CODE && !e.altKey) {
        onTaskCreate(e);
    }
});

function onTaskCreate() {
    const taskEl = document.createElement('li');
    taskEl.innerHTML = `${listEl.childElementCount + 1}. ${inputEl.value}`;
    listEl.append(taskEl);

    inputEl.value = '';
}