class LoginComponent {
    _formEl = null;
    _loginInputEl = null;
    _passwordInputEl = null;
    _messageEl = null;

    _loginService = null;

    constructor(template, containerEl) {
        this.template = template;
        this.containerEl = containerEl;

        // this._loginService = new LoginService();
    }

    init() {
        this.containerEl.innerHTML = this.template.replace('{{message}}', 'Incorrect credentials, please check one and try again!');

        this._formEl = this.containerEl.querySelector('#login-form');
        this._loginInputEl = this.containerEl.querySelector('#email-input');
        this._passwordInputEl = this.containerEl.querySelector('#password-input');
        this._messageEl = this.containerEl.querySelector('#message');

        this._formEl.addEventListener('submit', this.resetDefault);
        this._formEl.addEventListener('submit', this.onLoginSubmit);
    }

    dispose() {
        this._formEl.removeEventListener('submit', this.resetDefault);
        this._formEl.removeEventListener('submit', this.onLoginSubmit);
    }

    resetDefault(evt) {
        evt.preventDefault();
    }

    checkUserCredentials(login, password, callback) {
        const xhr = new XMLHttpRequest();
        
        xhr.open('POST', 'https://reqres.in/api/login');
        xhr.setRequestHeader('content-type', 'application/json');

        xhr.send(JSON.stringify({
            "email": login,
            "password": password
        }));

        xhr.onload = e => {
            const result = {
                status: xhr.status,
                success: false
            };
    
            if (result.status >= 200 && result.status < 300) {
                result['response'] = JSON.parse(xhr.responseText);
                result.success = true;
            }

            callback(result);
        };

    }

    onLoginSubmit = () => {
        this._messageEl.classList.add('d-none');

        this.checkUserCredentials(
            this._loginInputEl.value,
            this._passwordInputEl.value,
            authResult => {
                if (authResult.success) {
                } else {
                    this._messageEl.classList.remove('d-none');
                }
            }
        );
    }

}