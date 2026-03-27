
function addNumber(a: number, b: number){
    return a + b;
}

const addNumbersArrow = (a: number, b:number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?:number, base: number = 10){
    return firstNumber * base;
}

const result: number = addNumber(1, 2);
const result2: string = addNumbersArrow(2, 2);
const result3: number = multiply(2, 2);

console.log(result);
console.log(result2);
console.log(result3);

interface Character {
    name: string;
    hp: number;
    showHP : () => void;
}

const heatCharacter = (character : Character, amount: number) => {
    character.hp += amount;
    
};

const strider: Character = {
    name: 'Cesar', 
    hp: 50, 
    showHP() {
        console.log(`Puntos de vida: ${this.hp}`);
        
    }
}

strider.showHP();

export {};





