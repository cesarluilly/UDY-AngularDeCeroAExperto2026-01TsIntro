# Propósito de la reunión:

* En esta reunión impromptu, el instructor Cesar Luilly Garcia Aguazul está discutiendo sobre la priorización de la composición sobre la herencia en la programación orientada a objetos.

Glosario:

* Herencia: Cuando una clase hereda propiedades y métodos de otra clase.
* Composición: Cuando una clase contiene una instancia de otra clase como propiedad.
* Inyección de dependencias: Patrón de diseño que permite desacoplar la creación de objetos de su uso.

Atajos de teclado:

* No se mencionan atajos de teclado específicos en esta reunión.

Buenas prácticas, recomendaciones y consejos:

1. Priorizar la composición sobre la herencia:
   * La herencia múltiple puede complicar mucho la lectura y el mantenimiento del código.
   * La composición permite mantener una estructura más modular y flexible.
   * Si se necesita cambiar la estructura de una clase, solo se afecta esa clase, sin impactar a otras.
2. Inyección de dependencias:
   * La inyección de dependencias facilita el mantenimiento y la prueba del código.
   * Permite desacoplar la creación de objetos de su uso.
3. Evitar niveles excesivos de herencia:
   * Cuando se tienen muchos niveles de herencia, se complica la lectura y el entendimiento del código.
   * Es preferible mantener una estructura más plana y modular.

En resumen, el instructor enfatiza la importancia de priorizar la composición sobre la herencia, y de utilizar la inyección de dependencias para mantener un código más modular y fácil de mantener.

# Ejemplo Base

Aquí tienes un ejemplo de cómo priorizar la composición sobre la herencia:

En lugar de tener una clase `Héroe` que hereda de la clase `Persona`, como en el ejemplo que presentaste, puedes tener una clase `Héroe` que contiene una instancia de la clase `Persona`. Así, la clase `Héroe` tendría una propiedad `persona` que sería una instancia de la clase `Persona`.

Esto se vería así:

```typescript
class Persona {
  nombre: string;
  direccion: string;

  constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
  }
}

class Heroe {
  alterEgo: string;
  edad: number;
  persona: Persona;

  constructor(alterEgo: string, edad: number, persona: Persona) {
    this.alterEgo = alterEgo;
    this.edad = edad;
    this.persona = persona;
  }
}

// Uso
const personaTonyStark = new Persona('Tony Stark', 'New York');
const ironMan = new Heroe('Iron Man', 45, personaTonyStark);
```

De esta manera, la clase `Héroe` no hereda de `Persona`, sino que la contiene como una propiedad. Esto nos permite mantener una estructura más modular y flexible, donde podemos reutilizar la clase `Persona` en otras partes de nuestra aplicación sin estar atados a la clase `Héroe`.

Además, si en algún momento necesitamos cambiar la estructura de la clase `Persona`, solo tendremos que hacerlo en esa clase, sin afectar a la clase `Héroe`.

# Investigacion

Aquí tienes algunos ejemplos de los puntos importantes que mencionaste:

1. **Priorizar la composición sobre la herencia** :

Ejemplo de composición:

```typescript
class Persona {
  nombre: string;
  direccion: string;

  constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
  }
}

class Heroe {
  alterEgo: string;
  edad: number;
  persona: Persona;

  constructor(alterEgo: string, edad: number, persona: Persona) {
    this.alterEgo = alterEgo;
    this.edad = edad;
    this.persona = persona;
  }
}
```

Ejemplo de herencia:

```typescript
class Persona {
  nombre: string;
  direccion: string;

  constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
  }
}

class Heroe extends Persona {
  alterEgo: string;
  edad: number;

  constructor(alterEgo: string, edad: number, nombre: string, direccion: string) {
    super(nombre, direccion);
    this.alterEgo = alterEgo;
    this.edad = edad;
  }
}
```

2. **Evitar la herencia múltiple** : La herencia múltiple puede complicar mucho la lectura y el mantenimiento del código. En su lugar, se recomienda utilizar la composición.
3. **Inyección de dependencias** : La inyección de dependencias es un patrón de diseño que permite desacoplar la creación de objetos de su uso. Esto facilita el mantenimiento y la prueba del código.

Ejemplo de inyección de dependencias:

```typescript
class CalculadoraService {
  sumar(a: number, b: number): number {
    return a + b;
  }
}

class MiComponente {
  constructor(private calculadoraService: CalculadoraService) {}

  calcularSuma(a: number, b: number): number {
    return this.calculadoraService.sumar(a, b);
  }
}
```
