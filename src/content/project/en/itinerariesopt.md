---
title: Bus Itinerary Optimizer
description: Functional Scala engine for generating and optimizing intercity bus travel itineraries
tags: [scala, git]
cover: bus-itinerary-cover.png
repo: https://github.com/your-username/discinteg1
---
This project models and solves the **bus travel itinerary problem** using a purely
functional approach in Scala. Given a dataset of bus routes — origin, destination,
operator, distance, departure time, and duration — it generates every valid itinerary
between two cities and optimizes the results against multiple criteria: total travel
time, number of transfers, total distance, operator changes, and arrival-time
constraints.

## Itinerary generation
A depth-first search over the route graph enumerates all simple paths between two
cities, tracking visited cities to avoid cycles. The search is built entirely from
immutable lists and recursive functions, with no mutable state at any point.

## Two optimization strategies
The project implements the `ItinerariesOptimizer` interface twice, to compare two
different algorithmic approaches to the same problem:
- **`ItinerariesTailOptimizer`** — uses tail-recursive insertion sort and a
  linear-scan minimum search.
- **`ItinerariesDnCOptimizer`** — uses a divide-and-conquer quicksort to rank
  itineraries before selecting the optimal subset.

Both implementations are validated against the same test suite across four datasets
of increasing size (20 to 200 routes) to confirm they produce equivalent, correct
results despite their different internal algorithms.

## Formal correctness and complexity analysis
Beyond testing, the project includes written proofs of correctness for each core
function — `totalDistance`, `totalDuration`, `busChanges`, `operatorChanges`,
`waitingMinutes`, `insertionSort`, `quickSort`, and `minimize` — using **structural
induction** over the recursive list and itinerary structures. It also includes formal
**time and space complexity analysis** via recurrence relations and recursion-tree
reasoning, including a worked explanation of why the itinerary-generation search
(`O(E · V!)` in the worst case) falls outside the scope of the Master Theorem.

## Tech stack
Built in **Scala 3** with `scalatest` for the test suite, emphasizing immutability,
tail recursion, and pattern matching throughout — no loops, no mutable variables,
and no exceptions used for control flow.