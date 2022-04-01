// your JavaScript file
// example
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";

document.getElementById('container').appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!"
h3.style.color = "blue";

document.getElementById('container').appendChild(h3);

// a <div> with a black border and pink background color with the following elements 
const div = document.createElement('div');
div.classList.add('div-content');
div.style.border = "thick solid black";
div.style['background-color'] = "pink";

document.getElementById('container').appendChild(div);

// another <h1> that says “I’m in a div”
const divContent = document.querySelector('.div-content');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

divContent.appendChild(h1);

// a <p> that says “ME TOO!”
const p2 = document.createElement('p')
p2.textContent = "ME TOO!"

divContent.appendChild(p2);

