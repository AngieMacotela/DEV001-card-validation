# Tarjeta de crédito válida

## Índice

* [1. Objetivos de aprendizaje generales](#1-objetivos-de-aprendizaje-generales)
* [2. Preámbulo](#2-preámbulo)

***

## 1. Objetivos de aprendizaje generales
Trabajar sobre fundamentos de JavaScript, incluyendo conceptos como variables, condicionales, y funciones, así como eventos y manipulación básica del DOM, fundamentos de HTML y CSS.

Familiarizarce con nuevos conceptos: 

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

<img>



