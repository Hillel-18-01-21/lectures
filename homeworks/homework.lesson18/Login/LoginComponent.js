class LoginComponent {
    _formEl = null;
    _loginInputEl = null;
    _passwordInputEl = null;
    _messageEl = null;

    constructor(template, containerEl, onLoginCb) {
        this.template = template;
        this.containerEl = containerEl;
        this.onLogin = onLoginCb;
    }

    init() {
        this.containerEl.innerHTML = this.template.replace('{{message}}', 'Incorrect credentials, please check one and try again!');

        // TODO: change selector from ID to class
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

    // Callback Way
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

    checkUserCredentialsP(login, password) {
        return fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify({
                "email": login,
                "password": password
            }),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    onLoginSubmit = () => {
        this._messageEl.classList.add('d-none');

        const result = this.checkUserCredentialsP(this._loginInputEl.value, this._passwordInputEl.value);

        result.then(e => {
            console.log('then', e);
            if (e.ok) {
                if (this.onLogin) {
                    this.onLogin();
                }
            } else {
                this._messageEl.classList.remove('d-none');
            }
            return e.json();
        })
        .then(({ token }) => {
            localStorage.setItem('authToken', token);
        })
        .catch(e => {
            console.log('catch');
            this._messageEl.classList.remove('d-none');
        });

        {
            // this.checkUserCredentials(
            //     this._loginInputEl.value,
            //     this._passwordInputEl.value,
            //     authResult => {
            //         if (authResult.success) {
            //             // TODO: add some action
            //             if (this.onLogin) {
            //                 this.onLogin();
            //             }
            //         } else {
            //             this._messageEl.classList.remove('d-none');
            //         }
            //     }
            // );
        }
    }

}