const contentEl = document.getElementById('content');
let token = localStorage.getItem('authToken');

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

if (!token) {
    loginComponent.init();
} else {
    userListComponent.init();
}

function onSuccessLogin() {
    loginComponent.dispose();

    userListComponent.init();
}
