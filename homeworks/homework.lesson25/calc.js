let _value = 0;

const set = value => {
    console.log('[set][_value]', _value);
    console.log('[set]', value);
    _value = value;
};

const add = num => {
    console.log('[add][_value]', _value);
    console.log('[add]', num);
    _value += num;
};

const div = num => {
    console.log('[div][_value]', _value);
    console.log('[div]', num);
    _value /= num;
};

const printResult = () => {
    console.log(_value);
};

module.exports = {
    set,
    add,
    div,
    printResult
};