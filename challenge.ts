const plusMinus = (numbers: number[]): void => {

    const positive: number[] = [];
    const negative: number[] = [];
    const zeros: number[] = [];

    numbers.forEach((number) => {

        if (number > 0) {
            positive.push(number);
        }
        else if (number < 0) {
            negative.push(number);
        }
        else {
            zeros.push(number);
        }

    });

    const positiveRatio = positive.length / numbers.length;
    const negativeRatio = negative.length / numbers.length;
    const zerosRatio = zeros.length / numbers.length;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zerosRatio.toFixed(6));
    

}

plusMinus([-1, -1, 0, 1, 1]);

plusMinus([-4, 3, -9, 0, 4, 1]);