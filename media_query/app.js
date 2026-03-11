
const clickButton = document.getElementById('clickBtn');
const hoverInput = document.getElementById('hoverInput');
const dblClickBox = document.getElementById('doubleClickBox');
const messageParagraph = document.getElementById('message');

clickButton.addEventListener('click', function () {
    messageParagraph.textContent = 'Button was clicked!';
    messageParagraph.style.color = '#007bff';
});

hoverInput.addEventListener('mouseover', function () {
    hoverInput.style.backgroundColor = '#fff3cd';
});

hoverInput.addEventListener('mouseout', function () {
    hoverInput.style.backgroundColor = '#ffffff';
});

dblClickBox.addEventListener('dblclick', function () {
    messageParagraph.textContent = 'box was double-clicked';
    messageParagraph.style.color = '#28a745';
    dblClickBox.style.backgroundColor = '#dc3545';
});
