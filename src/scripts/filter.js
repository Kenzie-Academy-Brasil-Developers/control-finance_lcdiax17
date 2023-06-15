export const filterCards = (array, categoryIdCard) =>{
    const filteredCards = array.filter((value) => {
        if(value.categoryID === categoryIdCard){
            return value
        }
    })
    return filteredCards
}