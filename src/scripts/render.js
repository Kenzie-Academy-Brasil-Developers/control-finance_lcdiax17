import { handleDeleteCard } from "./index.js"

export const render = (array) =>{
 const financialSummarySection = document.querySelector('.financial-summary')
 const inputsOrOutputsUl = document.querySelector('.inputs-or-outputs__ul')

    financialSummarySection.innerHTML = " "
    inputsOrOutputsUl.innerHTML = " "

    const sectionSummary = renderFinancialSummary(array)
    financialSummarySection.appendChild(sectionSummary)
    
    array.forEach(element =>{
    
        let allValues = element
        let card = renderCard(allValues)

        inputsOrOutputsUl.appendChild(card)
    })
    handleDeleteCard(array)
}

const renderFinancialSummary = (array) =>{

    const divSummaryContent = document.createElement('div')
    const divButtons = document.createElement('div')
    const divButtonsTitle = document.createElement('h2')
    const buttonAll = document.createElement('button')
    const buttonInput = document.createElement('button')
    const buttonOutput = document.createElement('button')
    const divSumValues = document.createElement('div')
    const sumValuesTitle = document.createElement('h2')
    const valueLogo = document.createElement('p')
    const allValues = document.createElement('p')

    divSummaryContent.classList.add('financial-summary__content')
    divButtons.classList.add('financial-summary__buttons');
    divSumValues.classList.add('financial-summary__sum-of-values')
    allValues.classList.add('count-values')

    buttonInput.classList.add('filter__button')
    buttonOutput.classList.add('filter__button')

    divButtonsTitle.innerText = 'Resumo financeiro'
    buttonAll.innerText = 'Todos'

    buttonInput.innerText = 'Entradas'
    buttonInput.dataset.butonId = '0'
    buttonOutput.innerText = 'Saídas'
    buttonOutput.dataset.butonId = '1'

    sumValuesTitle.innerText = 'Soma dos valores'
    valueLogo.innerText = 'R$:'
    allValues.innerText = array.value

    divButtons.append(divButtonsTitle, buttonAll, buttonInput, buttonOutput)
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
    
    valueCard.innerText = `R$: ${array.value.toFixed(2)}`

    imageTrashButton.dataset.cardId = array.id
    imageTrashButton.src = './src/assets/img/trash_grey.svg'
    imageTrashButton.alt = 'trash button'
    
    divCardContainer.append(valueCard, divTrashContainer)
    divTrashContainer.append(categoryCard, imageTrashButton)

    liCard.append(divCardContainer, divTrashContainer)

    return liCard
}
