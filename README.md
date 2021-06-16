# -Front-End-Accessment
## HTML/CSS knowledge check
### Box Model
Every element in CSS is a box. In the center of the box, lies the actual content which is wrap around from inside outwards by the padding, borders, and margins. The padding is inside the borders which includes the background color. Paddings are used to space out the element from itself, while margins are used to space between elements. The margins vertically adjoined each other collapse. By default, the height and width assigned to an element is applied to the content. In most cases, box-sizing is set to border-box in the universal selector, to make browser account for any padding and border in the value of specified width and height.
## JS exercise
    const sales = [
    { itemSold: "Football", price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
    { itemSold: "Trainers", price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
    { itemSold: "Cricket bat", price: 204.97, dateSold: '2018-04-05', id: 'j_456' },
    { itemSold: "Rugby ball", price: 30.00, dateSold: '2017-04-22', id: 't_acds3' },
    { itemSold: "Hockey stick", price: 54.95, dateSold: '2017-03-19', id: 'j_999' }]

### Question 1. Return the sum of the price of all properties as a single value

    function sumSalesPrice2(list) {
      const sum = list.reduce((accumulator, currentValue) => {
        //time 100 to turn doller into cents
        return accumulator + currentValue.price * 100
      }, 0)
      return sum / 100
    }
    sumSalesPrice2(sales)
    
    // The answer is 469.86  
### Question 2. Return the items which were sold in 2017.
     function findItemByYear(year, list) {
       const item = list.find(item => item.dateSold.startsWith(year))
       return item
      }
      findItemByYear(2017, sales)
      
      
      /* The answer is
          {
            itemSold: 'Rugby ball',
            price: 30,
            dateSold: '2017-04-22',
            id: 't_acds3'
           }
      */
### Question 3. Return an array of all of the itemsSold properties as strings, sorted alphabetically.
    function allSoldItems(list){
        return list.map((item) => { return item.price})
    }
    
    
    // The answer is [ 19.99, 159.95, 204.97, 30, 54.95 ]
    
### Question 4. Using id as an argument, return the sale which matches the id.
    function findSaleById(id, list){
      const sale = list.find(item => item.id === id)
      return sale
    }
    
    
