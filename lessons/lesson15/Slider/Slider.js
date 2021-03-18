function Slider(element, slides) {
    const slideEls = slides.map(e => {
        const el = document.createElement('img');
        el.src = e;
        return el;
    });

    slideEls.forEach(e => {
        element.append(e);
    });
}