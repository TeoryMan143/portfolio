---
title: encryption-zp
description: Shamir's Secret Sharing implementation over a prime field in Scala
tags: [scala, git]
cover: encryption-zp-cover.png
repo: https://github.com/TeoryMan143/encryption-zp
---

encryption-zp is a Scala implementation of Shamir's Secret Sharing scheme over the finite field Z_p. It splits a secret into multiple shares distributed among participants and reconstructs it once enough of them are combined, following the threshold cryptography model.

## Core operations

The project is organized as a set of pure, composable functions covering the full lifecycle of a secret:

- Extended Euclidean algorithm to compute Bézout coefficients
- Modular inverse and modular exponentiation
- Secret polynomial construction with reproducible pseudo-random coefficients
- Polynomial evaluation using Horner's scheme
- Share distribution (split) across `n` participants with a configurable threshold
- Secret reconstruction (`reconstruct`) via Lagrange interpolation
- Threshold verification, confirming that `t` shares recover the secret while `t - 1` do not
- UTF-8 message encoding and decoding to and from `BigInt`

## Design

All arithmetic is performed with arbitrary-precision `BigInt` values to safely support secrets and primes ranging from toy-sized (20-bit) to cryptographically realistic sizes (2048-bit). The codebase separates generic modular-arithmetic utilities from the secret-sharing algorithms themselves, and includes a documented abstract data type for polynomials and shares, complexity analysis for the split and reconstruct operations, and an informal correctness proof traced through a concrete example.

## Interface

A simple console menu lets the user split a secret message into shares or reconstruct a secret from a set of provided shares, printing the generated prime, the shares, and the result of the threshold verification.

## Tech stack

Written in Scala, tested with ScalaTest across unit, edge-case, and scalability test suites for every core function.