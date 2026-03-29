# Proposito

Explicar una tarea relacionada con la implementación de una interfaz de "Superhero" en TypeScript.

Glosario:

* Camel case: Convención de nomenclatura para variables y métodos.
* Upper camel case: Convención de nomenclatura para nombres de clases e interfaces.
* Dash case: Convención de nomenclatura.
* Kiva case: Convención de nomenclatura.
* Upper underscore case (upper snake case): Convención de nomenclatura para variables constantes.

Atajos de teclado:

* Control + Espacio: Fuerza el autocompletado.
* F2: Permite renombrar variables, propiedades y métodos.

Buenas prácticas, recomendaciones y consejos:

* Definir interfaces separadas para objetos anidados, como la interfaz "Address", para mejorar la legibilidad y mantenibilidad del código.
* Utilizar nombres en inglés para las interfaces y propiedades, incluso si el código está en español, para mantener un código más limpio y legible.
* Aprovechar las capacidades del IntelliSense de Visual Studio Code, como ir a la definición de una interfaz o propiedad presionando Control/Comando + clic.
* Escribir código que sea lo suficientemente explicativo por sí mismo, sin necesidad de comentarios, siguiendo principios de código limpio.

# Ejemplo Base

Aquí está el ejemplo de base proporcionado en la reunión:

```typescript
interface Superhero {
  name: string;
  age: number;
  address: {
    street: string;
    country: string;
    city: string;
  };
  showAddress(): string;
}

const spiderman: Superhero = {
  name: 'Spider-Man',
  age: 25,
  address: {
    street: 'Nueva York',
    country: 'USA',
    city: 'Nueva York'
  },
  showAddress() {
    return `${this.name} lives in ${this.address.city}, ${this.address.country}`;
  }
};

console.log(spiderman.showAddress()); // Output: Spider-Man lives in Nueva York, USA
```


# Investigacion

Claro, aquí tienes ejemplos de los puntos importantes mencionados en la reunión:

1. **Definir interfaces separadas para objetos anidados** :

```typescript
interface Address {
  street: string;
  country: string;
  city: string;
}

interface Superhero {
  name: string;
  age: number;
  address: Address;
  showAddress(): string;
}

const spiderman: Superhero = {
  name: 'Spider-Man',
  age: 25,
  address: {
    street: 'Nueva York',
    country: 'USA',
    city: 'Nueva York'
  },
  showAddress() {
    return `${this.name} lives in ${this.address.city}, ${this.address.country}`;
  }
};
```

2. **Utilizar nombres en inglés para las interfaces y propiedades** :

```typescript
interface Superhero {
  name: string;
  age: number;
  address: {
    street: string;
    country: string;
    city: string;
  };
  showAddress(): string;
}

const spiderman: Superhero = {
  name: 'Spider-Man',
  age: 25,
  address: {
    street: 'New York',
    country: 'USA',
    city: 'New York'
  },
  showAddress() {
    return `${this.name} lives in ${this.address.city}, ${this.address.country}`;
  }
};
```

3. **Aprovechar las capacidades del IntelliSense de Visual Studio Code** :

Cuando defines el cursor sobre una propiedad o método y presionas `Control/Comando + clic`, el IDE te llevará a la definición de esa entidad.

4. **Escribir código que sea lo suficientemente explicativo por sí mismo** :

```typescript
interface Superhero {
  name: string;
  age: number;
  address: {
    street: string;
    country: string;
    city: string;
  };
  showAddress(): string;
}

const ironMan: Superhero = {
  name: 'Iron Man',
  age: 45,
  address: {
    street: 'Malibu, California',
    country: 'USA',
    city: 'Malibu'
  },
  showAddress() {
    return `${this.name} resides in ${this.address.city}, ${this.address.country}`;
  }
};

console.log(ironMan.showAddress()); // Output: Iron Man resides in Malibu, USA
```

En este ejemplo, el código es lo suficientemente explicativo por sí mismo, sin necesidad de comentarios adicionales.
