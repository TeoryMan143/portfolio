---
title: Otimizador de Itinerários de Ônibus
description: Motor funcional em Scala para gerar e otimizar itinerários de viagem intermunicipal de ônibus
tags: [scala, git]
cover: bus-itinerary-cover.png
repo: https://github.com/your-username/discinteg1
---
Este projeto modela e resolve o **problema de itinerários de viagem de ônibus** usando
uma abordagem puramente funcional em Scala. A partir de um conjunto de dados de rotas de
ônibus — origem, destino, operadora, distância, horário de partida e duração — ele gera
todos os itinerários válidos entre duas cidades e otimiza os resultados segundo
múltiplos critérios: tempo total de viagem, número de baldeações, distância total,
trocas de operadora e restrições de horário de chegada.

## Geração de itinerários
Uma busca em profundidade (DFS) sobre o grafo de rotas enumera todos os caminhos
simples entre duas cidades, mantendo o registro das cidades visitadas para evitar
ciclos. A busca é construída inteiramente com listas imutáveis e funções recursivas,
sem nenhum estado mutável.

## Duas estratégias de otimização
O projeto implementa a interface `ItinerariesOptimizer` duas vezes, para comparar duas
abordagens algorítmicas diferentes para o mesmo problema:
- **`ItinerariesTailOptimizer`** — usa insertion sort tail-recursivo e uma busca
  linear pelo mínimo.
- **`ItinerariesDnCOptimizer`** — usa quicksort por divisão e conquista para
  ordenar os itinerários antes de selecionar o subconjunto ótimo.

Ambas as implementações são validadas com a mesma suíte de testes em quatro conjuntos
de dados de tamanho crescente (de 20 a 200 rotas), confirmando que produzem resultados
equivalentes e corretos apesar de usarem algoritmos internos diferentes.

## Correção formal e análise de complexidade
Além dos testes, o projeto inclui provas escritas de correção para cada função
central — `totalDistance`, `totalDuration`, `busChanges`, `operatorChanges`,
`waitingMinutes`, `insertionSort`, `quickSort` e `minimize` — usando **indução
estrutural** sobre as estruturas recursivas de listas e itinerários. Também inclui uma
**análise formal de complexidade de tempo e espaço** usando relações de recorrência e
árvores de recursão, incluindo uma explicação detalhada de por que a busca de geração
de itinerários (`O(E · V!)` no pior caso) está fora do escopo do Teorema Mestre.

## Stack de tecnologia
Construído em **Scala 3** com `scalatest` para a suíte de testes, priorizando
imutabilidade, recursão de cauda e pattern matching em todo o projeto — sem loops, sem
variáveis mutáveis e sem exceções usadas como controle de fluxo.