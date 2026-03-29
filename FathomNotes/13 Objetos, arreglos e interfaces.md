# Proposito

* Introducir el concepto de interfaces en TypeScript para definir la estructura de objetos de manera más estricta.

Glosario:

* Interfaz: Estructura que permite definir la forma que deben tener los objetos, especificando las propiedades y tipos de datos que deben contener.
* Objeto literal: Forma de crear objetos directamente en el código, sin necesidad de una clase.
* Opcional: Propiedad de una interfaz que no es obligatoria, se indica con el símbolo "?".

Atajos de teclado:

* Control+punto (Windows) / Comando+punto (Mac): Permite agregar automáticamente las propiedades faltantes de una interfaz.

Buenas prácticas, recomendaciones y consejos:

* Definir las variables como constantes si se sabe que no van a cambiar, para evitar errores.
* Utilizar interfaces para definir la estructura de objetos y asegurar que cumplan con los tipos de datos esperados.
* Marcar como opcionales aquellas propiedades que no son obligatorias en la interfaz.
* Las interfaces no generan código JavaScript, son solo para el tipado en TypeScript.

# Ejemplo Base

Aquí está el ejemplo de base que se presentó en la reunión:

```typescript
// Definición de la interfaz "Character"
interface Character {
  name: string;
  hpPoints: number;
  skills: string[];
  hometown?: string;
}

// Creación del objeto "Strider" basado en la interfaz "Character"
const Strider: Character = {
  name: 'Strider',
  hpPoints: 100,
  skills: ['Bash', 'Counter'],
  hometown: 'Rivendell'
};

console.table(Strider);
```

Puntos clave:

1. Se define la interfaz `Character` que especifica las propiedades que debe tener un objeto de este tipo: `name` (string), `hpPoints` (number), `skills` (array de strings) y `hometown` (string opcional).
2. Se crea el objeto `Strider` que cumple con la estructura definida en la interfaz `Character`.
3. Se utiliza `console.table()` para imprimir el objeto `Strider` de manera más legible.

Este ejemplo muestra cómo las interfaces en TypeScript permiten definir la estructura de los objetos de manera más estricta y evitar errores al trabajar con ellos.

# Investigacion


Aquí tienes algunos ejemplos adicionales para cada uno de los puntos importantes mencionados:

1. **Definir variables como constantes si se sabe que no van a cambiar** :

```typescript
// Definir una variable como constante
const MAX_HEALTH = 100;

// Intentar modificar la constante genera un error
MAX_HEALTH = 120; // Error: Cannot assign to 'MAX_HEALTH' because it is a constant.
```

2. **Utilizar interfaces para definir la estructura de objetos** :

```typescript
// Definición de la interfaz "Person"
interface Person {
  name: string;
  age: number;
  email: string;
}

// Creación de un objeto que cumple con la interfaz "Person"
const john: Person = {
  name: 'John Doe',
  age: 35,
  email: 'john.doe@example.com'
};

// Intentar asignar un valor incorrecto genera un error
john.age = '35'; // Error: Type 'string' is not assignable to type 'number'.
```

3. **Marcar como opcionales aquellas propiedades que no son obligatorias** :

```typescript
// Definición de la interfaz "Employee" con una propiedad opcional
interface Employee {
  name: string;
  age: number;
  email: string;
  department?: string;
}

// Creación de un objeto que cumple con la interfaz "Employee"
const jane: Employee = {
  name: 'Jane Smith',
  age: 28,
  email: 'jane.smith@example.com'
};

// La propiedad "department" es opcional, por lo que no es obligatoria
console.log(jane.department); // Output: undefined
```

4. **Las interfaces no generan código JavaScript, son solo para el tipado en TypeScript** :

```typescript
// Definición de la interfaz "Book"
interface Book {
  title: string;
  author: string;
  pages: number;
}

// Creación de un objeto que cumple con la interfaz "Book"
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  pages: 180
};

// Al compilar a JavaScript, la interfaz "Book" no genera código
// El objeto "myBook" se mantiene como un objeto literal de JavaScript
```

Espero que estos ejemplos adicionales te ayuden a entender mejor cada uno de los puntos importantes mencionados. Avísame si necesitas algo más.
