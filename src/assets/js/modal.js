
    let modal = document.querySelector('.modal')
    let send = document.querySelector('#send-mail')
    let close = document.querySelector('.modal__close')
    send.addEventListener('click', function() {
        modal.classList.toggle('hide');
    })
    close.addEventListener('click', function() {
        modal.classList.toggle('hide');
    })
    

