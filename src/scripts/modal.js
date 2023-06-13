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

export const handleRegisterValue = (array) =>{
    const buttonInsert = document.querySelector('.add')
    const inputValue = document.querySelector('.input-value')
    const inputRadio = document.querySelector('.input-radio')
    const outputRadio = document.querySelector('.output-radio')


    let newValue = {}

    buttonInsert.addEventListener('click', (event) =>{
        event.preventDefault()

    })
}

