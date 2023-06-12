export const handleModal = () =>{
    const modalController = document.querySelector('.modal__controller')
    const buttonOpenModal = document.querySelector('.open-modal')



    buttonOpenModal.addEventListener('click', () =>{

        modalController.showModal()

        closeModal()
    })

    const closeModal = () =>{
        const modalController = document.querySelector('.modal__controller')
        const buttonCloseModal = document.querySelector('.close__modal')
        const secondButtonCloseModal = document.querySelector('.close__modal--diferent')


        buttonCloseModal.addEventListener('click', () =>{
            modalController.close()
        })

        secondButtonCloseModal.addEventListener('click', () =>{
            modalController.close()
        })
    }
}

