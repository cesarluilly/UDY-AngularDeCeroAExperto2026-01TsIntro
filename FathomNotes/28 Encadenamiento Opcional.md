# Proposito

Entendido, voy a enfocarme en la información relevante del curso de Angular del instructor.

Propósito de la reunión:

* Esta fue una reunión impromptu para introducir el tema de "Optional Chaining" en TypeScript, el cual es un concepto importante para entender antes de comenzar con Angular.

Glosario:

* Optional Chaining: Operador que permite acceder a propiedades anidadas de un objeto sin preocuparse si alguna de las propiedades intermedias es null o undefined.
* Null Assertion Operator: Operador que le indica a TypeScript que confía en que una propiedad siempre tendrá un valor, evitando así errores por valores nulos o indefinidos.

Atajos de teclado:

* CTRL + Espacio: Muestra información adicional sobre una propiedad o método.
* CTRL + Z: Deshacer cambios.

Buenas prácticas, recomendaciones y consejos:

* Usar el operador Optional Chaining para evitar errores por acceder a propiedades de objetos que pueden ser nulos o indefinidos.
* Utilizar el Null Assertion Operator con precaución, solo cuando se esté seguro de que una propiedad siempre tendrá un valor.
* Mantener el código conciso y legible, evitando estructuras condicionales complejas.
* Entender bien los conceptos de TypeScript antes de comenzar con Angular, ya que son fundamentales.

# Ejemplo Base


Aquí está el ejemplo base del encadenamiento opcional (optional chaining) presentado en la reunión:

```typescript
// Definición de la interfaz Passenger
interface Passenger {
  name: string;
  children?: string[];
}

// Creación de los pasajeros
const passenger1: Passenger = {
  name: 'Fernando'
};

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia', 'Elizabeth']
};

// Función para imprimir la cantidad de hijos
function printChildren(passenger: Passenger) {
  const howManyChildren = passenger.children?.length;
  console.log(`${passenger.name} has ${howManyChildren ?? 'no'} children.`);
}

// Llamada a la función con los pasajeros
printChildren(passenger2); // Melissa has 2 children.
printChildren(passenger1); // Fernando has no children.
```

En este ejemplo se muestra:

* La definición de la interfaz `Passenger` con una propiedad `children` opcional.
* La creación de dos objetos `passenger1` y `passenger2` que implementan la interfaz `Passenger`.
* La función `printChildren` que utiliza el operador Optional Chaining (`?.`) para acceder a la propiedad `children` y obtener su longitud.
* El uso del operador de fusión nula (`??`) para mostrar "no" en caso de que `howManyChildren` sea `null` o `undefined`.
* Las llamadas a la función `printChildren` con los dos pasajeros.

La diferencia clave con el ejemplo anterior es el uso del operador Optional Chaining (`?.`) para acceder a la propiedad `children` de manera segura, sin preocuparse por si el objeto `passenger` es `null` o `undefined`.

# Investigacion

Entendido, aquí tienes ejemplos más detallados de los puntos importantes mencionados en la reunión:

1. **Operador Optional Chaining (?.)** : ```typescript interface User { name: string; address?: { street?: string; city?: string; }; }

const user: User = { name: 'John Doe', address: { street: '123 Main St', city: 'Anytown' } };

console.log(user.address?.street); // Output: '123 Main St' console.log(user.address?.city); // Output: 'Anytown' console.log(user.address?.state); // Output: undefined

const anotherUser: User = { name: 'Jane Smith' };

console.log(anotherUser.address?.street); // Output: undefined

```markup
El operador Optional Chaining (`?.`) permite acceder de manera segura a propiedades anidadas de un objeto, sin preocuparte por si alguna de las propiedades intermedias es `null` o `undefined`.

2. **Operador de Fusión Nula (??)**:
```typescript
interface Person {
  name: string;
  age?: number;
}

const person1: Person = {
  name: 'Alice',
  age: 30
};

const person2: Person = {
  name: 'Bob'
};

console.log(`${person1.name} is ${person1.age ?? 'unknown'} years old.`); // Output: Alice is 30 years old.
console.log(`${person2.name} is ${person2.age ?? 'unknown'} years old.`); // Output: Bob is unknown years old.
```

El operador de Fusión Nula (`??`) permite establecer un valor predeterminado en caso de que la expresión a la izquierda sea `null` o `undefined`.

3. **Operador de Aserción de Nulidad (!)** : ```typescript interface Product { name: string; price: number; }

function getProductPrice(product: Product) { return product.price!; }

const product: Product = { name: 'Laptop', price: 999 };

console.log(getProductPrice(product)); // Output: 999

``` El Operador de Aserción de Nulidad (`!`) le indica a TypeScript que confías en que una propiedad siempre tendrá un valor, evitando así errores por valores nulos o indefinidos.

Recuerda que el uso del Operador de Aserción de Nulidad debe hacerse con precaución, ya que si la propiedad realmente es `null` o `undefined`, el código fallará.
