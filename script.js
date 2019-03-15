var tidak1 = document.querySelector('.tidak1');
var tidak2 = document.querySelector('.tidak2');
var tidak3 = document.querySelector('.tidak3');

//mouse hover
tidak1.addEventListener('mouseover', function () {
    tidak1.classList.add('ilang');
    tidak1.classList.remove('ada');
    tidak2.classList.add('ada');
})

tidak2.addEventListener('mouseover', function () {
    tidak2.classList.remove('ada');
    tidak3.classList.add('ada');
})

tidak3.addEventListener('mouseover', function () {
    tidak3.classList.remove('ada');
    tidak1.classList.add('ada');
})

//mouse click
tidak1.addEventListener('click', function () {
    alert('Tombol sedang dalam maintenance');
})

tidak2.addEventListener('click', function () {
    alert('Tombol sedang dalam maintenance');
})

tidak3.addEventListener('click', function () {
    alert('Tombol sedang dalam maintenance');
})