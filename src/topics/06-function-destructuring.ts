
export interface IProduct {
     description: string;
     price: number;
}

const phone: IProduct = {
    description: 'Nokia A1', 
    price: 150.0
}

const tablet: IProduct = {
    description: 'IPad', 
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: IProduct[];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products} = options;

    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    })

    return [total, total * tax];

}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart, 
    tax: tax
});

// console.log('Total', tax);
// console.log('Total', taxTotal);






















