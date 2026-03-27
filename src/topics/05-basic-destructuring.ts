interface IAudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: IDetails;
}

interface IDetails {
    author: string;
    year: number;
}

const audioPlayer: IAudioPlayer = {
    audioVolume: 2,
    songDuration: 20,
    song: "mess",
    details: {
        author:"aa",
        year:2
    } 
};

const { song, 
    songDuration:ces, 
    details, 
} = audioPlayer;

const {year:cesaryear} = details;
// console.log(cesaryear);
const nombreUsuario = 'Hola'

// Desescructuracion de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];

const [, , trunks = 'Not Found'] = dbz;

console.log('Personaje:', trunks);

