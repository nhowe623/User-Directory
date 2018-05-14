const header = document.querySelector('h1')
const button = document.querySelector('.firstSesh')
function changeText() {
    header.textContent = 'meatloaf'
}
header.addEventListener('click', changeText)