import { handleDeleteCard, handleFilterButtons } from "./index.js"
import { insertedValues } from "./valuesData.js"


export const render = (array) =>{
 const financialSummarySection = document.querySelector('.financial-summary')
 const inputsOrOutputsUl = document.querySelector('.inputs-or-outputs__ul')
 const noValueUl = document.querySelector('.no-value-registered')

    financialSummarySection.innerHTML = " "
    inputsOrOutputsUl.innerHTML = " "

    const sectionSummary = renderFinancialSummary(array)
    financialSummarySection.appendChild(sectionSummary)
    handleFilterButtons(insertedValues)
    
    array.forEach(element =>{
        let allValues = element
        let card = renderCard(allValues)

        inputsOrOutputsUl.appendChild(card)
    })
        
    handleDeleteCard(array)
    
    const divNovalue = createNoValue()
    noValueUl.appendChild(divNovalue)
}

const renderFinancialSummary = (array) =>{

    const divSummaryContent = document.createElement('div')
    const divButtons = document.createElement('div')
    const divButtonsTitle = document.createElement('h2')
    const divButtonsOrientation = document.createElement('div')
    const buttonAll = document.createElement('button')
    const buttonInput = document.createElement('button')
    const buttonOutput = document.createElement('button')
    const divSumValues = document.createElement('div')
    const sumValuesTitle = document.createElement('h2')
    const valueLogo = document.createElement('p')
    const allValues = document.createElement('p')

    divSummaryContent.classList.add('financial-summary__content')
    divButtons.classList.add('financial-summary__buttons')
    divButtonsOrientation.classList.add('financial-summary__buttons--direction')
    divSumValues.classList.add('financial-summary__sum-of-values')
    allValues.classList.add('count-values')
    buttonAll.classList.add('filter__all')
    buttonInput.classList.add('filter__button')
    buttonOutput.classList.add('filter__button')

    divButtonsTitle.innerText = 'Resumo financeiro'
    buttonAll.innerText = 'Todos'

    buttonInput.innerText = 'Entradas'
    buttonInput.dataset.buttonId = '0'
    buttonOutput.innerText = 'Saidas'
    buttonOutput.dataset.buttonId = '1'

    sumValuesTitle.innerText = 'Soma dos valores'
    allValues.innerText = `R$ ${array.reduce((accumulator, card) => accumulator + card.value, 0).toFixed(2)}`
    divButtonsOrientation.append( buttonAll, buttonInput, buttonOutput)
    divButtons.append(divButtonsTitle,divButtonsOrientation)
    divSumValues.append(sumValuesTitle, valueLogo, allValues)
    divSummaryContent.append(divButtons, divSumValues)

    return divSummaryContent
}

export const renderCard = (array) =>{
    
    const liCard = document.createElement('li')
    const divCardContainer = document.createElement('div')
    const valueCard = document.createElement('p')
    const divTrashContainer = document.createElement('div')
    const categoryCard = document.createElement('p')
    const imageTrashButton = document.createElement('img')

    liCard.classList.add('card')
    divCardContainer.classList.add('card__container')
    divTrashContainer.classList.add('card__trash-container')
    categoryCard.classList.add('category-tag')
    imageTrashButton.classList.add('button-delete-card')
    
    
    categoryCard.innerText = array.categoryID
    if(array.categoryID === 0){
        categoryCard.innerText = 'Entrada'
    }else if(array.categoryID === 1){
        categoryCard.innerText = 'Saída'
    }
    
    valueCard.innerText = `R$ ${array.value.toFixed(2)}`

    imageTrashButton.dataset.cardId = array.id
    imageTrashButton.src = './src/assets/img/trash_grey.svg'
    imageTrashButton.alt = 'trash button'
    
    divCardContainer.append(valueCard, divTrashContainer)
    divTrashContainer.append(categoryCard, imageTrashButton)

    liCard.append(divCardContainer, divTrashContainer)

    return liCard
}

const createNoValue = () =>{
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    li.classList.add('no-value-registered__li')

    h3.innerText = 'Nenhum valor registrado'
    p.innerText = 'Registar novo valor'

    li.append(h3, p)

    return li
}