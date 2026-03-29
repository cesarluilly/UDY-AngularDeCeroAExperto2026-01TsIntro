# Proposito

* Discutir una implementación de una función `HealCharacter` que cura a un personaje en un juego.

Glosario:

* `Character`: Interfaz que define la estructura de un personaje, con propiedades como `name`, `HP` y un método `showHP()`.
* `Strider`: Un personaje de ejemplo que cumple con la interfaz `Character`.
* `HealCharacter`: Función que recibe un personaje y una cantidad para curar.

Buenas prácticas, recomendaciones y consejos:

* Utilizar interfaces para definir la estructura de los objetos y evitar errores.
* Validar que los valores de los personajes no excedan ciertos límites (como 100 de HP).
* Ser cuidadoso al pasar objetos a funciones, asegurándose de que cumplan con la interfaz esperada.
* Aprovechar las ventajas que TypeScript ofrece para tener un código más robusto y seguro.

# Ejemplo Base

Aquí está el código de ejemplo base de la reunión:

```typescript
// Definición de la interfaz Character
interface Character {
  name: string;
  HP: number;
  showHP(): void;
}

// Creación del personaje Strider
const Strider: Character = {
  name: 'Strider',
  HP: 50,
  showHP() {
    console.log(`Puntos de vida: ${ this.HP }`);
  }
};

// Función HealCharacter
function HealCharacter(character: Character, amount: number): void {
  character.HP = Math.min(character.HP + amount, 100);
}

// Uso de la función HealCharacter
Strider.showHP(); // Puntos de vida: 50
HealCharacter(Strider, 10);
Strider.showHP(); // Puntos de vida: 60
HealCharacter(Strider, 30);
Strider.showHP(); // Puntos de vida: 90
```

Este código define una interfaz `Character` que describe la estructura de un personaje, con propiedades `name`, `HP` y un método `showHP()`. Luego, se crea un personaje `Strider` que cumple con esta interfaz.

La función `HealCharacter` recibe un personaje y una cantidad para curar, y actualiza los puntos de vida del personaje, asegurándose de que no excedan el límite de 100.

Finalmente, se muestra el uso de la función `HealCharacter` con el personaje `Strider`.

# Investigacion


Aquí tienes algunos ejemplos relacionados con los puntos importantes mencionados en la reunión:

1. **Utilizar interfaces para definir la estructura de los objetos y evitar errores** :

```typescript
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

const john: Person = {
  name: 'John',
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Esto dará un error, porque la propiedad 'job' no está definida en la interfaz Person
const jane: Person = {
  name: 'Jane',
  age: 25,
  job: 'Developer',
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

2. **Validar que los valores de los personajes no excedan ciertos límites** :

```typescript
interface Character {
  name: string;
  hp: number;
  maxHP: number;
  heal(amount: number): void;
}

const warrior: Character = {
  name: 'Warrior',
  hp: 80,
  maxHP: 100,
  heal(amount: number) {
    this.hp = Math.min(this.hp + amount, this.maxHP);
  }
};

warrior.heal(30); // Warrior's HP is now 100 (capped at maxHP)
warrior.heal(50); // Warrior's HP is still 100 (no overflow)
```

3. **Ser cuidadoso al pasar objetos a funciones, asegurándose de que cumplan con la interfaz esperada** :

```typescript
interface Book {
  title: string;
  author: string;
  published: number;
}

function printBookInfo(book: Book): void {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.published}`);
}

const myBook = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald'
  // Missing 'published' property
};

printBookInfo(myBook); // Error: Property 'published' is missing in type '{ title: string; author: string; }' but required in type 'Book'.
```

4. **Aprovechar las ventajas que TypeScript ofrece para tener un código más robusto y seguro** :

```typescript
// Usando tipos de datos estáticos
let age: number = 30;
age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'.

// Usando interfaces para definir la estructura de objetos
interface Person {
  name: string;
  age: number;
}

const john: Person = {
  name: 'John',
  age: 30
};

john.age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'.
```

Estos ejemplos muestran cómo utilizar interfaces, validar valores y aprovechar los beneficios de los tipos estáticos que ofrece TypeScript para tener un código más robusto y seguro
