
    let modal = document.querySelector('.modal')
    let send = document.querySelector('#send-mail')
    let close = document.querySelector('.modal__close')

    send.addEventListener('click', function() {
        modal.classList.toggle('hide');
        document.body.classList.toggle('no-scroll')
    })

    
    close.addEventListener('click', function() {
        modal.classList.toggle('hide');
        document.body.classList.remove('no-scroll')
    })
    
//share-modal
    let shareModal = document.querySelector('.modal--share')
    let share = document.querySelector('#share')
    let closeShare = document.querySelector('.modal__close--share')

    share.addEventListener('click', function() {
        shareModal.classList.toggle('hide');
        document.body.classList.toggle('no-scroll')
    })
    
    closeShare.addEventListener('click', function() {
        shareModal.classList.toggle('hide');
        document.body.classList.remove('no-scroll')
    })

