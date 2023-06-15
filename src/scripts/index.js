import { render} from "./render.js";
import { handleModal, handleRegisterValue } from "./modal.js";
import { insertedValues } from "./valuesData.js";

export const handleDeleteCard = (array) =>{
    const buttonsTrash = document.querySelectorAll('.button-delete-card')


    buttonsTrash.forEach(button =>{
        button.addEventListener('click', (event) =>{
            const cardId = parseInt(event.target.dataset.cardId)
            
            const index = array.findIndex(card =>{
                return card.id === cardId
            })
            
            array.splice(index, 1)

            render(array)
        })
    })
}


render(insertedValues)
handleModal()
handleRegisterValue(insertedValues)

