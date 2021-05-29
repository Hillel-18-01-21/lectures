const useState = (initValue) => {
    let state = initValue;
    const setState = (newValue) => {
        state = newValue;
    };
    return [state, setState];
};

export {
    useState,
};