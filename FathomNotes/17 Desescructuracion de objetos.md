# Proposito

Introducir el tema de desestructuración en TypeScript, que es muy útil para aprender Angular.

Glosario:

* AudioPlayer: Interfaz que define las propiedades de un reproductor de audio.
* Details: Interfaz que define los detalles de una canción, como el autor y el año.

Atajos de teclado:

* Control + Espacio: Muestra las propiedades disponibles para desestructurar.

Buenas prácticas, recomendaciones y consejos:

* La desestructuración se puede aplicar en objetos, importaciones/exportaciones, argumentos de funciones, etc.
* Priorizar la legibilidad del código sobre pequeñas ganancias de rendimiento.
* Cuando se desestructura un objeto anidado, es mejor hacerlo en pasos separados para mantener la claridad.

# Ejemplo Base

Aquí está el ejemplo básico de desestructuración que se presentó en la reunión:

```typescript
// Definición de interfaces
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

// Creación de un objeto AudioPlayer
const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'MES',
  details: {
    author: 'Ed Sheeran',
    year: 2023
  }
};

// Desestructuración básica
const { song: anotherSong, songDuration: duration } = audioPlayer;

console.log(anotherSong); // Output: 'MES'
console.log(duration); // Output: 36

// Desestructuración anidada
const { details: { author } } = audioPlayer;

console.log(author); // Output: 'Ed Sheeran'
```

En este ejemplo, se define una interfaz `AudioPlayer` que contiene varias propiedades, incluyendo un objeto `details` que a su vez tiene propiedades `author` y `year`.

Luego, se crea un objeto `audioPlayer` que implementa la interfaz `AudioPlayer`.

Finalmente, se muestra cómo se puede desestructurar el objeto `audioPlayer` para extraer las propiedades `song` (renombrada a `anotherSong`), `songDuration` (renombrada a `duration`) y `author` (extraída del objeto `details`).

Este ejemplo básico ilustra cómo la desestructuración puede simplificar el acceso a las propiedades de un objeto, especialmente cuando se trata de objetos anidados.

# Investigacion


 Aquí tienes ejemplos de los diferentes usos de la desestructuración que se mencionaron en la reunión:

1. Desestructuración en objetos:

```typescript 
const person = { name: 'John Doe', age: 30, email: '[john.doe@example.com](mailto:john.doe@example.com)' };

const { name, age } = person; console.log(name); // Output: 'John Doe' console.log(age); // Output: 30

```

2. Desestructuración en importaciones y exportaciones:
```typescript
// math.ts
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.ts
import { add, subtract } from './math';
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
```

3. Desestructuración en argumentos de funciones: 
```typescript 
const calculateArea = ({ width, height }) => width * height;

const rectangle = { width: 5, height: 10 };

const area = calculateArea(rectangle); console.log(area); // Output: 50

```

4. Desestructuración en cualquier archivo, objeto o arreglo:
```typescript
// Desestructuración en un arreglo
const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;
console.log(primary); // Output: 'red'
console.log(secondary); // Output: 'green'

// Desestructuración anidada en un objeto
const user = {
  name: 'Jane Doe',
  address: {
    city: 'New York',
    state: 'NY'
  }
};
const { name, address: { city, state } } = user;
console.log(name); // Output: 'Jane Doe'
console.log(city); // Output: 'New York'
console.log(state); // Output: 'NY'
```

Espero que estos ejemplos te ayuden a entender mejor los diferentes usos de la desestructuración en TypeScript. ¡Sigue practicando y profundizando en este tema, que es muy útil para aprender Angular!
