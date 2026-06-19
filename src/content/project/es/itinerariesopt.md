---
title: Optimizador de Itinerarios de Bus
description: Motor funcional en Scala para generar y optimizar itinerarios de viaje en bus interurbano
tags: [scala, git]
cover: bus-itinerary-cover.png
repo: https://github.com/your-username/discinteg1
---
Este proyecto modela y resuelve el **problema de itinerarios de viaje en bus** usando un
enfoque puramente funcional en Scala. A partir de un conjunto de datos de rutas de bus
—origen, destino, operador, distancia, hora de salida y duración— genera todos los
itinerarios válidos entre dos ciudades y optimiza los resultados según múltiples
criterios: tiempo total de viaje, número de transbordos, distancia total, cambios de
operador y restricciones de hora de llegada.

## Generación de itinerarios
Una búsqueda en profundidad (DFS) sobre el grafo de rutas enumera todos los caminos
simples entre dos ciudades, llevando registro de las ciudades visitadas para evitar
ciclos. La búsqueda está construida íntegramente con listas inmutables y funciones
recursivas, sin estado mutable en ningún momento.

## Dos estrategias de optimización
El proyecto implementa la interfaz `ItinerariesOptimizer` dos veces, para comparar dos
enfoques algorítmicos distintos al mismo problema:
- **`ItinerariesTailOptimizer`** — usa insertion sort tail-recursivo y una búsqueda
  lineal del mínimo.
- **`ItinerariesDnCOptimizer`** — usa quicksort por divide y vencerás para ordenar
  los itinerarios antes de seleccionar el subconjunto óptimo.

Ambas implementaciones se validan con la misma suite de pruebas a través de cuatro
conjuntos de datos de tamaño creciente (de 20 a 200 rutas) para confirmar que producen
resultados equivalentes y correctos pese a usar algoritmos internos distintos.

## Corrección formal y análisis de complejidad
Más allá de las pruebas, el proyecto incluye demostraciones escritas de corrección para
cada función central — `totalDistance`, `totalDuration`, `busChanges`,
`operatorChanges`, `waitingMinutes`, `insertionSort`, `quickSort` y `minimize` —
mediante **inducción estructural** sobre las estructuras recursivas de listas e
itinerarios. También incluye un **análisis formal de complejidad en tiempo y espacio**
usando relaciones de recurrencia y árboles de recursión, incluyendo una explicación
detallada de por qué la búsqueda de generación de itinerarios (`O(E · V!)` en el peor
caso) queda fuera del alcance del Teorema Maestro.

## Stack tecnológico
Construido en **Scala 3** con `scalatest` para la suite de pruebas, priorizando la
inmutabilidad, la recursión de cola y el pattern matching en todo el proyecto — sin
ciclos, sin variables mutables y sin excepciones usadas como control de flujo.