const buttonEls = document.getElementsByClassName('fib-btn');

Array.from(buttonEls).forEach(e => {
    e.addEventListener('click', fibClosure(e));
});

function fibClosure(e) {
    let next = 0;
    let prev = 1;
    return () => {
        next = next + prev;
        prev = next - prev;
        e.nextElementSibling.innerText = next;
    };
}