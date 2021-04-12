const contentEl = document.getElementById('content');

const loginComponent = new LoginComponent(
    document.getElementById('login-template').innerText,
    contentEl,
    onSuccessLogin
);
const mainComponent = new MainComponent(
    document.getElementById('main-template').innerText,
    contentEl
);

const userListComponent = new UserListComponent(
    document.getElementById('user-list-template').innerText,
    document.getElementById('user-item-template').innerText,
    contentEl
);

loginComponent.init();

function onSuccessLogin() {
    loginComponent.dispose();

    userListComponent.init();
}
