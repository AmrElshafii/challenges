(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function(){
        header.style.color == 'blue' ? header.style.color = 'red' : header.style.color = 'blue'
    })
})();
