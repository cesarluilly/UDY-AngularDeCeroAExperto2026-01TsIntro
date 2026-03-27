# Propósito de la reunión:

* Esta reunión parece ser una clase o sesión de un curso de Angular, donde el instructor está explicando el tema de las clases en TypeScript y cómo se relacionan con JavaScript.

# Glosario:

* Propiedades (properties): Variables definidas dentro de una clase.
* Métodos (methods): Funciones definidas dentro de una clase.
* Privado (private): Indica que una propiedad o método solo puede ser accedido dentro de la clase.
* Público (public): Indica que una propiedad o método puede ser accedido desde fuera de la clase.

# Atajos de teclado:

* No se mencionan atajos de teclado específicos en esta reunión.

# Buenas prácticas, recomendaciones y consejos:

* Inicializar las propiedades de la clase en el constructor para evitar problemas.
* Usar el símbolo de interrogación (?) para indicar que una propiedad puede ser opcional.
* En Angular, se puede configurar el compilador para que no permita generar la aplicación si hay errores de este tipo (propiedades privadas accedidas desde fuera).
* Tener en cuenta que, aunque TypeScript marca estos errores, al final el código se compila a JavaScript, donde no hay una forma nativa de hacer propiedades realmente privadas.

# Ejemplo de Base

Aquí está el ejemplo de base de la clase "Person" que se menciona en la reunión:

```typescript
export class Person {
  public name: string;
  public address?: string;

  constructor(name: string, address?: string) {
    this.name = name;
    this.address = address;
  }
}

const ironman = new Person('Fernando', 'New York');
console.log(ironman); // Output: { name: 'Fernando', address: 'New York' }
console.log(ironman.address); // Output: 'New York'
```

Explicación:

* Se define una clase llamada `Person` que se exporta.
* La clase tiene dos propiedades públicas: `name` (de tipo `string`) y `address` (de tipo `string` opcional).
* El constructor de la clase recibe los parámetros `name` (obligatorio) y `address` (opcional).
* Dentro del constructor, se asignan los valores recibidos a las propiedades de la instancia usando `this`.
* Se crea una instancia de la clase `Person` llamada `ironman` y se imprime en consola.
* Se accede a la propiedad `address` de la instancia `ironman` y se imprime en consola.

# Investigacion

Claro, aquí tienes ejemplos de cada uno de los puntos importantes mencionados:

1. Inicializar las propiedades de la clase en el constructor:

```typescript
class Person {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

const person = new Person('John Doe', '123 Main St');
console.log(person.name); // Output: 'John Doe'
console.log(person.address); // Output: '123 Main St'
```

2. Usar el símbolo de interrogación (?) para indicar que una propiedad puede ser opcional:

```typescript
class Person {
  name: string;
  address?: string;

  constructor(name: string, address?: string) {
    this.name = name;
    this.address = address;
  }
}

const person1 = new Person('John Doe');
console.log(person1.name); // Output: 'John Doe'
console.log(person1.address); // Output: undefined

const person2 = new Person('Jane Doe', '123 Main St');
console.log(person2.name); // Output: 'Jane Doe'
console.log(person2.address); // Output: '123 Main St'
```

3. Configurar el compilador de Angular para no permitir generar la aplicación si hay errores:

En el archivo `tsconfig.json` de tu proyecto Angular, puedes agregar la siguiente configuración:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Esto habilita el modo `strict` del compilador de TypeScript, lo que significa que no se permitirá generar la aplicación si hay errores, como intentar acceder a una propiedad privada desde fuera de la clase.

4. Tener en cuenta que, aunque TypeScript marca estos errores, al final el código se compila a JavaScript, donde no hay una forma nativa de hacer propiedades realmente privadas:

```typescript
class Person {
  public name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

const person = new Person('John Doe', '123 Main St');
console.log(person.name); // Output: 'John Doe'
console.log(person.address); // Output: '123 Main St' (no hay error en JavaScript)
```

En este ejemplo, aunque en TypeScript la propiedad `address` está marcada como `private`, al compilar a JavaScript, no hay una forma nativa de hacer que esta propiedad sea realmente privada.
