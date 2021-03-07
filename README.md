# Drag and Drop

Este es una implementación de la funcionalidad de drag and drop, inspirada en el video de youtube de [Web dev Simplified](https://www.youtube.com/watch?v=jfYWwQrtzzY)

Por el momento es basicamente lo que se be en el video

## Trabajo futuro

### Variaciones

Planeo crear variaciones de esta funcionalidad. Por el momento tengo planeado

1. Generar n número de elementos en un contenedor y tener que colocarlos en orden ascendente en otro **Hecho**
2. Tener preguntas y respuestas donde las respuestas se tendran que colocar abajo de la pregunta correspondiente
3. Misma implementacion que el punto 2, pero que la pregunta pueda tener multiples respuestas
4. A las ultimas 2 agregar, la opcion de poner respuestas "dummy", las cuales no tienen respuesta asignada, sino que estan hechas para despistar

### Mejoras

1. Mejorar el css
2. Hacerlo mas modular **Hecho**
3. Evitar que los elementos puedan ser llevado a otros contenedores distintos a los que tiene destinados **Hecho**


# Cambios realizados

## v2.0

1. Se refactorizó el codigo para tener un enfoque orientado a objetos (POO).
2. Se agregó la funcionalidad de evitar que los elementos puedan ser llevados a contenedores ajenos a los deseados
3. Se agregó la funcionalidad de que los elementos de crear automáticamente, en lugar de tener que ponerlos en el html directamente
4. Se creó la funcionalidad de tener que poner los elementos de un contenedor a otro de manera ascendente