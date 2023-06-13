export const render = (array) =>{
 const financialSummarySection = document.querySelector('.financial-summary')
 const inputsOrOutputsUl = document.querySelector('.inputs-or-outputs__ul')

    financialSummarySection.innerHTML = " "
    inputsOrOutputsUl.innerHTML = " "
    
    const sectionSummary = renderFinancialSummary()
    financialSummarySection.appendChild(sectionSummary)
    
    array.forEach(element =>{
    
        let allValues = element
        let card = renderCard(allValues)

        inputsOrOutputsUl.appendChild(card)
    })
}

const renderFinancialSummary = () =>{
    const divSummaryContent = document.createElement('div')
    const divButtons = document.createElement('div')
    const divButtonsTitle = document.createElement('h2')
    const buttonAll = document.createElement('button')
    const buttonInput = document.createElement('button')
    const buttonOutput = document.createElement('button')
    const divSumValues = document.createElement('div')
    const sumValuesTitle = document.createElement('h2')
    const allValues = document.createElement('p')

    divSummaryContent.classList.add('financial-summary__content')
    divButtons.classList.add('financial-summary__buttons');
    divSumValues.classList.add('financial-summary__sum-of-values')

    divButtonsTitle.innerText = 'Resumo financeiro'
    buttonAll.innerText = 'Todos'
    buttonInput.innerText = 'Entradas'
    buttonOutput.innerText = 'Saídas'
    sumValuesTitle.innerText = 'Soma dos valores'


    divButtons.append(divButtonsTitle, buttonAll, buttonInput, buttonOutput)
    divSumValues.append(sumValuesTitle, allValues)
    divSummaryContent.append(divButtons, divSumValues)

    return divSummaryContent
}

const renderCard = (array) =>{
    
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
    
    valueCard.innerText = `R$ ${array.value.toFixed(1)}`
    
    divCardContainer.append(valueCard, divTrashContainer)
    divTrashContainer.append(categoryCard, imageTrashButton)

    liCard.append(divCardContainer, divTrashContainer)

    return liCard
}
