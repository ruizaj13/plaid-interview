
const isRecurring = (transactions) => {
    const items = new Map();
    const recurringCharges = [];

    //O(n)
    transactions.forEach(transaction => {
            const currentItem = transaction[0];
            const recurringAmount = transaction[1];
            const day = transaction[2];

            //instantiates charge in map
            if( !items.has(currentItem) ) {
                items.set(currentItem, {name: currentItem, count: 0, recurringAmount, recurringDays:[]})
            }; 
            
            //Works on the count
            if ( items.has(currentItem) ) {
                items.get(currentItem).recurringDays.push(day);

                const updatedCount = {...items.get(currentItem), count: items.get(currentItem).count + 1};

                items.set(currentItem, updatedCount);
            };

            //Works on the charge amount
            if ( items.get(currentItem).recurringAmount !== recurringAmount ) {
                //using 0 because switching from int to boolean (false in this case) doesn't sit right
                const updatedAmount = {...items.get(currentItem), recurringAmount: 0};

                items.set(currentItem, updatedAmount);
            };
    });

    
    items.forEach((item) => {
        //Ought to check these two conditions first to avoid unnecessary processing
        if(item.count >= 3 && item.recurringAmount){
            //The sign does not matter here so will always convert it to positive
            const difference = Math.abs(item.recurringDays[0] - item.recurringDays[1]);
            
            //O(n^2) but only if it meets the two previous requirements
            for (let i = 0; i < item.recurringDays.length; i++) {
                //Checking difference of current number with the next
                const diffCheck = Math.abs(item.recurringDays[i] - item.recurringDays[i + 1])
                //If at any point the the check does not equal the expected difference we can quit the loop
                if (diffCheck !== difference) {
                    break;
                }
            }

            //If all is well we push it to our recurringCharges arra
            recurringCharges.push(item.name);
        };
    });

    return recurringCharges;
};

console.log(isRecurring([
    ["Netflix", 9.99, 10],
    ["Netflix", 9.99, 20],
    ["Netflix", 9.99, 30],
    ["Amazon", 27.12, 32],
    ["Sprint", 50.11, 45],
    ["Sprint", 50.11, 55],
    ["Sprint", 50.11, 65],
    ["Sprint", 60.13, 77],
])); //Expect to return ['Netflix']


export {
    isRecurring
};

