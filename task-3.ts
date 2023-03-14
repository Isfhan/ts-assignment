const getProductDiscount = (price: number, discountPercentage: number): string | object => {

    // Check if discount percentage is greater than or equal to 50%
    if (discountPercentage >= 50) {
        return 'The discount percentage is invalid';
    }
    else {

        // Calculate discount amount and price after discount
        let discountAmount: number = price * (discountPercentage / 100);
        let priceAfterDiscount: number = price - discountAmount;

        // Return object with product details
        return {
            "originalPrice": price,
            discountPercentage,
            "discountAmount": discountAmount.toFixed(2),
            priceAfterDiscount
        }

    }

}

// Call getProductDiscount function with different arguments and log the results
let productOne = getProductDiscount(100, 20);
console.log(productOne);

let productTwo = getProductDiscount(180, 33);
console.log(productTwo);

let productThree = getProductDiscount(250, 51);
console.log(productThree);

