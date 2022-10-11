# Tarjeta de crédito válida

## Índice

* [1. Objetivos de aprendizaje generales](#1-objetivos-de-aprendizaje-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Hito 1: Criterios de aceptación mínimos del proyecto](#5-hito-1-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hito 2 (opcional): Mostrar la franquicia de tarjeta](#6-hito-2-opcional-mostrar-la-franquicia-de-tarjeta)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Para considerar Project Feedback](#10-para-considerar-project-feedback)

***

## 1. Objetivos de aprendizaje generales
Como continuación del proyecto de preadmisión, volverás a trabajar sobre fundamentos de JavaScript, incluyendo conceptos como variables, condicionales, y funciones, así como eventos y manipulación básica del DOM, fundamentos de HTML y CSS.

Mientras desarrollas este proyecto, te familiarizarás con estos nuevos conceptos:

* Un _boilerplate_, la estructura básica de un proyecto en distintas carpetas (a través `modulos` en JS).
* Las herramientas de mantenimiento y mejora del código (linters y pruebas unitarias).
* Objetos en JavaScript, su estructura y métodos.
* Iteración (bucles) en JavaScript.
* Control de versiones con git (y la plataforma github)

## 2. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos el reverso del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

### Descripción del proyecto

El proyecto de Card-Validation se basa en el uso de dos métodos: isValid y maskify; de un objeto (validator) para la validación y máscara de los números de tarjeta ingresados por el usuario.

Introducción y funcionalidad de la aplicación
# 📱iCASE 📱

iCase representa el check-out de una tienda dirigida al publico consumidor de la marca Apple 🍏 . La aplicación cuenta con:

Datos e información propias del usuario/cliente. Desde aquí se aplican ambos métodos isValid y maskify en el número de tarjeta.
Botón de pago. Botón que ingresa y verifica que la información ingresada. Si el número de tarjeta es válido ✅, la página de iCASE lanzará una alerta indicando que la tarjeta ingresada es una tarjeta valida. En caso contrario ❌, la página de iCASE lanzará una alerta indicando que la tarjeta ingresada es invalida.

Boceto inicial en FIGMA

<img src="DEV001-card-validation\boceto.png" alt=""><br/>