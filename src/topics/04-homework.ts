
interface IAddress {
    calle: string;
    pais: string;
    ciudad: string;
}

interface ISuperHero {
    name: string;
    age: number; 
    address: IAddress;
    showAddress: () => {};
}

const superHero: ISuperHero = {
    name: 'Spiderman', 
    age: 3, 
    address: {
        calle: 'Main St', 
        pais: 'USA', 
        ciudad : 'Mexico'
    }, 
    showAddress(){
        return this.name + ', ' + this.address.ciudad;
    }
}

console.log(superHero);




