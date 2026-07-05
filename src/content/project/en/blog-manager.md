---
title: blog-manager
description: RESTful blog API with JWT auth and refresh tokens, ownership-based post/comment management, and integration testing
tags: [java, spring, postgres, sql, git]
cover: blog-manager-cover.png
repo: https://github.com/TeoryMan143/blog-manager
---

blog-manager is a REST API for a blogging platform, handling authentication,
authorization, and content management for posts and comments. Any frontend is a thin
client that simply consumes the API — all business logic, validation, and security
live on the backend.

## Authentication & security

Users authenticate with a username/password flow through **Spring Security**, backed by
**JJWT**-issued access tokens and single-use refresh tokens persisted per user. A custom
`JwtAuthFilter` validates tokens on every request, while a `RestAuthEntryPoint` returns
structured JSON error responses instead of default redirects when authentication is
missing or invalid. A `CurrentUserProvider` component resolves the authenticated user
from the security context for use across services.

## Posts & comments

Posts belong to authors through a `Post` → `User` relationship, and comments extend
this to a `Post` ↔ `Comment` ↔ `User` structure, letting users comment on any post while
only modifying their own contributions. Ownership is enforced at the service layer for
every mutating operation — updating or deleting a post or comment checks the requesting
user's ID against the resource's author before proceeding. All entity IDs are
`String`-typed UUIDs generated at persistence time.

## Error handling & API design

A centralized `GlobalExceptionHandler` maps domain exceptions — not found, forbidden,
duplicate user, invalid/expired tokens, malformed JSON, and validation failures — into a
consistent `ApiResponse` shape with the appropriate HTTP status codes. The API is fully
documented with **OpenAPI/Swagger UI**, including built-in Bearer JWT authorization
support directly from the docs UI.

## Testing

The service and repository layers are covered by unit and integration tests, with
**Testcontainers** spinning up a real **PostgreSQL** instance for repository and service
integration tests rather than relying on mocks or an in-memory database.

## Tech stack

Built with **Spring Boot 4** and **Java 25**, using **Spring Security** for auth,
**JJWT** for token generation and validation, and **JPA/Hibernate** over **PostgreSQL**
for persistence. Validation is handled with **Spring Validation**, and the API is
documented via **springdoc-openapi**.