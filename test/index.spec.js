// import { expect } from 'chai';
import { isRecurring } from '../src/app.js';

describe('isRecurring', () => {
    it('should return object of counts', () => {
        const givenTransactions = [
            ["Netflix", 9.99, 10],
            ["Netflix", 9.99, 20],
            ["Netflix", 9.99, 30],
            ["Amazon", 27.12, 32],
            ["Sprint", 50.11, 45],
            ["Sprint", 50.11, 55],
            ["Sprint", 50.11, 65],
            ["Sprint", 50.11, 75],
        ];

        console.log(isRecurring(givenTransactions));
    });
});