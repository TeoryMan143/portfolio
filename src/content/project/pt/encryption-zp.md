---
title: encryption-zp
description: Implementação do esquema de Shamir's Secret Sharing sobre um corpo primo em Scala
tags: [scala, git]
cover: encryption-zp-cover.png
repo: https://github.com/TeoryMan143/encryption-zp
---

encryption-zp é uma implementação em Scala do esquema de Shamir's Secret Sharing sobre o corpo finito Z_p. Ele divide um segredo em múltiplas partes (shares) distribuídas entre os participantes e o reconstrói quando um número suficiente delas é combinado, seguindo o modelo de criptografia de limiar.

## Operações principais

O projeto está organizado como um conjunto de funções puras e combináveis que cobrem todo o ciclo de vida de um segredo:

- Algoritmo estendido de Euclides para calcular os coeficientes de Bézout
- Inverso modular e exponenciação modular
- Construção do polinômio secreto com coeficientes pseudoaleatórios reprodutíveis
- Avaliação de polinômios usando o esquema de Horner
- Distribuição de partes (split) entre `n` participantes com um limiar configurável
- Reconstrução do segredo (`reconstruct`) por interpolação de Lagrange
- Verificação de limiar, confirmando que `t` partes recuperam o segredo enquanto `t - 1` não conseguem
- Codificação e decodificação de mensagens UTF-8 de e para `BigInt`

## Design

Toda a aritmética é realizada com valores `BigInt` de precisão arbitrária, para suportar com segurança segredos e primos que variam de tamanhos de brinquedo (20 bits) a tamanhos criptograficamente realistas (2048 bits). O código separa os utilitários genéricos de aritmética modular dos próprios algoritmos de compartilhamento de segredo, e inclui um tipo de dado abstrato documentado para polinômios e partes, uma análise de complexidade para as operações de split e reconstruct, e uma prova informal de corretude traçada sobre um exemplo concreto.

## Interface

Um menu de console simples permite que o usuário divida uma mensagem secreta em partes ou reconstrua um segredo a partir de um conjunto de partes fornecidas, exibindo o primo gerado, as partes e o resultado da verificação de limiar.

## Stack tecnológico

Escrito em Scala, testado com ScalaTest por meio de suítes de testes unitários, de casos extremos e de escalabilidade para cada função principal.