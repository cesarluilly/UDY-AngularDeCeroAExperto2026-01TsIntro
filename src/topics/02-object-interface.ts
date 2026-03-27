
let skill: string[] = ['Bash', 'Counter']

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const strider: Character = {
    name: 'Cesar',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.log(strider.hometown);

export{};