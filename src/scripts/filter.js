export const filterCards = (array, categoryIdCard) =>{
    const filteredCards = array.filter((category) => {
        if(category.categoryID === categoryIdCard){
            return category
        }
    })
    return filteredCards
}