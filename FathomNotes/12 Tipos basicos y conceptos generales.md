# Proposito

* En esta clase, el instructor va a hablar sobre los tipos básicos y funcionalidades generales de TypeScript.

Glosario:

* TypeScript: Un lenguaje de programación que agrega tipado estático a JavaScript, lo que permite una mejor documentación y detección de errores durante el desarrollo.
* Módulo: Una agrupación encapsulada de código, procedimientos y funcionalidades.
* Importación (import): La acción de requerir o traer un módulo para utilizarlo en otro archivo.

Atajos de teclado:

* Control/Command + Barra Espaciadora: Comenta/descomenta una línea de código.

Buenas prácticas, recomendaciones y consejos:

* Utilizar `const` en lugar de `let` cuando la variable no va a cambiar de valor.
* Definir los tipos de datos de manera explícita, aunque TypeScript puede inferirlos, para mejorar la documentación.
* Usar el operador de unión `|` para permitir que una variable acepte múltiples tipos de datos.
* Importar módulos al archivo principal para poder utilizarlos.

# Ejemplo Base


Entendido, aquí está el ejemplo base del video:

```typescript
// 01-Basic-Types.ts

// Exportando un objeto vacío para evitar errores de redeclaración
export {}; 

// Declarando una variable de tipo string
let name: string = 'Strider';

// Intentando reasignar a un tipo incorrecto (error)
// name = 123;

// Declarando una constante de tipo string
const constantName: string = 'Strider';

// Declarando una variable de tipo number
let HPPoints: number = 95;

// Intentando asignar un string a una variable de tipo number (error)
// HPPoints = 'full';

// Permitiendo que HPPoints sea number o string
let HPPoints2: number | 'full' = 95;
HPPoints2 = 'full';
// HPPoints2 = 'hello'; // Error, 'hello' no es asignable

// Declarando una variable booleana
const isAlive: boolean = true;

// Imprimiendo un objeto con las variables declaradas
console.log({
  name,
  HPPoints,
  isAlive
});
```

Y en el archivo `main.ts`:

```typescript
// main.ts
import './Topics/01-Basic-Types';

// Código principal de la aplicación
```

Este es el ejemplo base que el instructor presenta en el video, donde muestra los conceptos básicos de tipos de datos en TypeScript, como `string`, `number`, `boolean`, y el uso del operador de unión `|` para permitir múltiples tipos.

# Investigacion


Aquí tienes algunos ejemplos más detallados de los puntos importantes vistos en el video:

1. **Declaración de variables con tipos específicos** :

```typescript
// Declaración de variable de tipo string
let name: string = 'John Doe';

// Declaración de variable de tipo number
let age: number = 30;

// Declaración de variable de tipo boolean
let isStudent: boolean = true;
```

2. **Uso del operador de unión `|` para permitir múltiples tipos** :

```typescript
// Declaración de variable que puede ser number o 'full'
let HPPoints: number | 'full' = 95;
HPPoints = 'full';
HPPoints = 100; // Válido
HPPoints = 'hello'; // Error, 'hello' no es asignable
```

3. **Declaración de constantes** :

```typescript
// Declaración de constante de tipo string
const PI: number = 3.14159;

// Intentar reasignar el valor de una constante (error)
// PI = 3.14;
```

4. **Importación de módulos** :

```typescript
// main.ts
import './utils/helpers'; // Importando el módulo 'helpers'

// Usando funciones del módulo importado
const result = calculateSum(10, 20);
```

```typescript
// utils/helpers.ts
export function calculateSum(a: number, b: number): number {
  return a + b;
}
```

5. **Atajos de teclado** :

* `Control/Command + Barra Espaciadora`: Comenta/descomenta una línea de código.

6. **Buenas prácticas** :

* Usar `const` en lugar de `let` cuando la variable no va a cambiar de valor.
* Definir los tipos de datos de manera explícita, aunque TypeScript puede inferirlos, para mejorar la documentación.
* Utilizar el operador de unión `|` cuando se necesita que una variable acepte múltiples tipos de datos.
* Importar módulos al archivo principal para poder utilizarlos.
