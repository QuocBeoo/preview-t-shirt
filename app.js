let itemSrc = null;
function drag(event) {
    itemSrc = event.target.src;
    document.querySelector('.graphic').classList.add('drag');
}
function drop(event) {
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.graphic').innerHTML = '';
    document.querySelector('.graphic').appendChild(img);
    document.querySelector('.graphic').classList.remove('drag');
}
function allowDrop(event) {
    event.preventDefault();
}
window.addEventListener("dragover", function (e) {
    e = e || event;
    e.preventDefault();
}, false);
window.addEventListener("drop", function (e) {
    e = e || event;
    e.preventDefault();
}, false);