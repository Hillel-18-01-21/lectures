const signIn = (login, password) => {
    return fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
        headers: {
            "content-type": "application/json",
        },
    })
        .then(e => {
            if (e.ok) return e;
            throw new Error('auth error!');
        })
        .then((e) => e.json());
};

const signUp = () => {};

export {
    signIn,
    signUp,
};