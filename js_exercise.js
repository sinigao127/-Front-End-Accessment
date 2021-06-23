const sales = [
    { itemSold: "Football", price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
    { itemSold: "Trainers", price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
    { itemSold: "Cricket bat", price: 204.97, dateSold: '2018-04-05', id: 'j_456' },
    { itemSold: "Rugby ball", price: 30.00, dateSold: '2017-04-22', id: 't_acds3' },
    { itemSold: "Hockey stick", price: 54.95, dateSold: '2017-03-19', id: 'j_999' }]


//Question 1. Return the sum of the price of all properties as a single value

function sumSalesPrice(list) {
    try {
        //handling wrong type of list and price
        if (list === undefined || list === null || !Array.isArray(list)) throw Error(' list is null, undefined or not an array')
        const checkType = (element) => typeof element.price === "number"
        if (!list.every(checkType)) {
            const errorObject = list.find(item => !checkType(item))
            throw Error(`price of  ${ errorObject.id } is not a number`)
        }

        //real logic
        const sum = list.reduce((accumulator, currentValue) => {
            //time 100 to turn dollar into cents
            return accumulator + currentValue.price * 100
        }, 0)
        return sum / 100
    } catch (e) {
        console.log(e)
    }

}

console.log(sumSalesPrice(sales))
