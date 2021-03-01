/**
 * Queries
 */

/* --- Single selectors --- */

// returns an Element (the Fastest)
const elementById = document.getElementById('element-ID');

// returns first Element by selector, to argument you can pass any css-selector
const elementByQuery = document.querySelector('tagName.className#elementID');

/* --- Collection selectors --- */

/**
 * HTMLCollection - it's array-like live-collection 
 * which reacts on each changing of DOM related to its selector
 * @link https://developer.mozilla.org/ru/docs/Web/API/HTMLCollection
 */

/**
 * NodeList - it's array-like collection, NOT a live-collection,
 * contains collection of Nodes
 * @link https://developer.mozilla.org/ru/docs/Web/API/NodeList
 */

// returns HTMLCollection contains all elements with className
const elementsCollectionByClassName = document.getElementsByClassName('className');

// returns HTMLCollection contains all elements with tagName
const elementsCollectionByTagName = document.getElementsByTagName('tagName');

// returns NodeList contains all elements with css-selector
const elementsCollectionByQuery = document.querySelectorAll('tagName.className#elementID');


/**
 * DOM Manipulations
 */

// returns new element 
const newElement = document.createElement('tagName');

// setting/getting inner html-content into new element
newElement.innerHTML = `<span>lorem ipsum</span>`;
// put/get plain text into element, if you put html as content it wouldn't be rendered as DOM, 
// just like plain text
newElement.textContent = `plain text content`;
// also put/get content from element, but visible for user
newElement.innerText = `plain text`;

// add class to new element
newElement.classList.add('className');
// remove class from element
newElement.classList.remove('className');
// toggle - adds a class if it isn't presented and removes class in another case
newElement.classList.toggle('className');
// replace existing class by a new one
newElement.classList.replace('oldClassName', 'newClassName');

const containerEl = document.getElementById('container-element-ID');
// put newElement into container in the end
containerEl.append(newElement);
// put newElement into container in the begin
containerEl.prepend(newElement);

// alternative methods for insert content
containerEl.insertAdjacentElement('where', newElement);
containerEl.insertAdjacentHTML('where', '<some>HTML</some>');
containerEl.insertAdjacentText('where', 'some text');

// get all children elements of container, returns HTMLCollection
const childrenCollection = containerEl.children;

/**
 * DOM Events subscription
 */

// Handler function
function onClickHandler(e) {
    e.target; // element on which event happened
}

const btnEl = document.getElementById('button-ID');

// inline event binding, you can easily rewrite it
btnEl.onclick = onClickHandler;

// you can easily add a few handlers with this method
btnEl.addEventListener('click', onClickHandler);

// removes existing handlers
btnEl.removeEventListener('click', onClickHandler);