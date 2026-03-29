# Proposito

Propósito de la reunión:

* Discutir la desestructuración de arreglos en JavaScript, que es similar al proceso de desestructuración de objetos.

Glosario:

* Desestructuración: Proceso de extraer valores de arreglos o propiedades de objetos y asignarlos a variables.
* Índice: Posición numérica de un elemento dentro de un arreglo, comenzando desde 0.
* Valor por defecto: Valor que se asigna a una variable cuando el valor esperado no está disponible.

Atajos de teclado:

* No se mencionan atajos de teclado específicos en la transcripción.

Buenas prácticas, recomendaciones y consejos:

* Utilizar la desestructuración de arreglos para simplificar y hacer más legible el código.
* Establecer valores por defecto cuando se espera que una posición del arreglo pueda estar vacía o no definida.
* Aplicar la desestructuración en cualquier lugar donde se reciban arreglos u objetos, para extraer fácilmente la información necesaria.
* La desestructuración ayuda a resumir líneas de código y hacer que el código sea más fácil de leer y mantener.

# Ejemplo Base


Aquí está el ejemplo base de desestructuración de arreglos que se discutió en la reunión:

```javascript
// Arreglo original
const dragonBallZ = ['Goku', 'Vegeta', 'Trunks'];

// Accediendo a un elemento sin desestructuración
const character3 = dragonBallZ[2]; // 'Trunks'

// Desestructurando el arreglo
const [p1, p2, p3] = dragonBallZ;
console.log(p1); // 'Goku'
console.log(p2); // 'Vegeta'
console.log(p3); // 'Trunks'

// Desestructurando y asignando un valor por defecto
const [, , p3 = 'Not Found'] = dragonBallZ;
console.log(p3); // 'Trunks'

// Desestructurando cuando un elemento no existe
const [, , p4 = 'Not Found'] = ['Goku', 'Vegeta'];
console.log(p4); // 'Not Found'
```

En este ejemplo, se muestra cómo acceder a los elementos de un arreglo utilizando la desestructuración, así como cómo asignar valores por defecto cuando un elemento no existe en el arreglo.

# Investigacion

 Aquí tienes ejemplos más detallados de los puntos importantes discutidos en la reunión:

1. Desestructuración básica de arreglos:

```javascript
const colors = ['red', 'green', 'blue'];

// Desestructurando el arreglo
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor); // 'blue'
```

2. Asignación de valores por defecto:

```javascript
const numbers = [1, 2];

// Asignando un valor por defecto
const [a, b, c = 3] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

3. Ignorar elementos del arreglo:

```javascript
const people = ['Alice', 'Bob', 'Charlie', 'David'];

// Ignorando los primeros dos elementos
const [, , thirdPerson, fourthPerson] = people;
console.log(thirdPerson); // 'Charlie'
console.log(fourthPerson); // 'David'
```

4. Desestructuración anidada:

```javascript
const user = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Desestructurando un objeto anidado
const {
  name,
  address: { city, country }
} = user;

console.log(name); // 'John Doe'
console.log(city); // 'New York'
console.log(country); // 'USA'
```

5. Desestructuración de parámetros de función:

```javascript
function printUserInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: 'Alice', age: 25 };
printUserInfo(user); // Output: Name: Alice, Age: 25
```

Espero que estos ejemplos te ayuden a entender mejor los conceptos clave de la desestructuración de arreglos discutidos en la reunión. ¡Avísame si necesitas algo más!
