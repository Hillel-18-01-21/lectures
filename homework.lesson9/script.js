const colorInputEl = document.getElementById('color-input');
const shapeSelectorEl = document.getElementById('shape-selector');
const shapeEl = document.getElementById('shape');
const canvasEl = document.getElementById('canvas');

/** Handlers */

colorInputEl.addEventListener('change', onColorChange);
shapeSelectorEl.addEventListener('change', onShapeChange);
canvasEl.addEventListener('click', onMouseClick);

function onShapeChange() {
    setShape(shapeSelectorEl.value);
}

function onColorChange() {
    setColor(colorInputEl.value);
}

function onMouseClick(e) {
    const x = e.x - canvasEl.offsetLeft - shapeEl.offsetWidth / 2;
    const y = e.y - canvasEl.offsetTop - shapeEl.offsetHeight / 2;
    setPosition(x, y);
}

/** Functions */

function setShape(shape) {
    shapeEl.className = `shape ${shape}`;
}

function setColor(color) {
    shapeEl.style.backgroundColor = color;
}

function setPosition(left, top) {
    shapeEl.style.top = `${top}px`;
    shapeEl.style.left = `${left}px`;
}
