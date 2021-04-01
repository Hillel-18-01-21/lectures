const contentEl = document.getElementById('content');

const loginComponent = new LoginComponent(
    document.getElementById('login-template').innerText,
    contentEl
);

loginComponent.init();
