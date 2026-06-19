---
title: encryption-zp
description: Implementación del esquema de Shamir's Secret Sharing sobre un cuerpo primo en Scala
tags: [scala, git]
cover: encryption-zp-cover.png
repo: https://github.com/TeoryMan143/encryption-zp
---

encryption-zp es una implementación en Scala del esquema de Shamir's Secret Sharing sobre el cuerpo finito Z_p. Divide un secreto en múltiples partes (shares) distribuidas entre los participantes y permite reconstruirlo una vez que se combinan suficientes de ellas, siguiendo el modelo de criptografía de umbral.

## Operaciones principales

El proyecto está organizado como un conjunto de funciones puras y componibles que cubren todo el ciclo de vida de un secreto:

- Algoritmo extendido de Euclides para calcular los coeficientes de Bézout
- Inverso modular y exponenciación modular
- Construcción del polinomio secreto con coeficientes pseudoaleatorios reproducibles
- Evaluación de polinomios mediante el esquema de Horner
- Distribución de partes (split) entre `n` participantes con un umbral configurable
- Reconstrucción del secreto (`reconstruct`) mediante interpolación de Lagrange
- Verificación de umbral, confirmando que `t` partes recuperan el secreto mientras que `t - 1` no lo logran
- Codificación y decodificación de mensajes UTF-8 hacia y desde `BigInt`

## Diseño

Toda la aritmética se realiza con valores `BigInt` de precisión arbitraria, para soportar de forma segura secretos y primos que van desde tamaños de juguete (20 bits) hasta tamaños criptográficamente realistas (2048 bits). El código separa las utilidades genéricas de aritmética modular de los algoritmos de reparto de secretos en sí, e incluye un tipo de dato abstracto documentado para polinomios y partes, un análisis de complejidad para las operaciones de split y reconstruct, y una prueba informal de corrección trazada sobre un ejemplo concreto.

## Interfaz

Un menú de consola sencillo permite al usuario dividir un mensaje secreto en partes o reconstruir un secreto a partir de un conjunto de partes proporcionadas, mostrando el primo generado, las partes y el resultado de la verificación de umbral.

## Stack tecnológico

Escrito en Scala, probado con ScalaTest mediante suites de pruebas unitarias, de casos límite y de escalabilidad para cada función principal.