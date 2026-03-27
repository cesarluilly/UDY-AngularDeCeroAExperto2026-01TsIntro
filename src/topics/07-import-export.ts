import { taxCalculation, type IProduct } from './06-function-destructuring';

const shoppingCart2 : IProduct[] = [
    {
        description: 'Nokia', 
        price: 12
    }, 
    {
        description: 'Redmi', 
        price: 120
    }
];

const [total, tax] = taxCalculation({tax: 15, products: shoppingCart2});

console.log('Total y Tax', total, tax);
