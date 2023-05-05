function bonAppetit(bill, k, b) {
    // Write your code here
  
    let difference = 0;
    let sum = 0;
    let item = bill.at(k);


    for (let i = 0; i < bill.length; i++) {
        sum += bill[i]
        difference = sum - item
    }


    if (b == difference / 2) {
        console.log('Bon Appetit')
    }


    else {
      
        console.log(b - difference / 2)
    }

}
