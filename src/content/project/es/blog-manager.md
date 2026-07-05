---
title: blog-manager
description: API REST de blog con autenticación JWT y refresh tokens, gestión de posts y comentarios basada en propiedad, y pruebas de integración
tags: [java, spring, postgres, sql, git]
cover: blog-manager-cover.png
repo: https://github.com/TeoryMan143/blog-manager
---

blog-manager es una API REST para una plataforma de blogs, encargada de la autenticación,
la autorización y la gestión de contenido de posts y comentarios. Cualquier frontend es
un cliente delgado que simplemente consume la API — toda la lógica de negocio, la
validación y la seguridad residen en el backend.

## Autenticación y seguridad

Los usuarios se autentican mediante un flujo de usuario/contraseña a través de
**Spring Security**, respaldado por access tokens emitidos con **JJWT** y refresh tokens
de un solo uso persistidos por usuario. Un `JwtAuthFilter` personalizado valida los
tokens en cada solicitud, mientras que un `RestAuthEntryPoint` devuelve respuestas de
error JSON estructuradas en lugar de redirecciones por defecto cuando la autenticación
falta o es inválida. Un componente `CurrentUserProvider` resuelve el usuario autenticado
a partir del contexto de seguridad para su uso en los distintos servicios.

## Posts y comentarios

Los posts pertenecen a autores mediante una relación `Post` → `User`, y los comentarios
extienden esto a una estructura `Post` ↔ `Comment` ↔ `User`, permitiendo que los usuarios
comenten en cualquier post pero solo modifiquen sus propias contribuciones. La propiedad
se valida en la capa de servicio para cada operación de modificación — actualizar o
eliminar un post o comentario verifica el ID del usuario solicitante contra el autor del
recurso antes de proceder. Todos los IDs de las entidades son UUIDs de tipo `String`
generados al persistir.

## Manejo de errores y diseño de la API

Un `GlobalExceptionHandler` centralizado mapea las excepciones de dominio — no
encontrado, prohibido, usuario duplicado, tokens inválidos/expirados, JSON malformado y
fallos de validación — a una forma consistente de `ApiResponse` con los códigos de
estado HTTP correspondientes. La API está completamente documentada con
**OpenAPI/Swagger UI**, incluyendo soporte integrado para autorización con Bearer JWT
directamente desde la interfaz de la documentación.

## Pruebas

Las capas de servicio y repositorio están cubiertas por pruebas unitarias e de
integración, usando **Testcontainers** para levantar una instancia real de
**PostgreSQL** en las pruebas de integración de repositorios y servicios, en lugar de
depender de mocks o una base de datos en memoria.

## Stack tecnológico

Construido con **Spring Boot 4** y **Java 25**, usando **Spring Security** para la
autenticación, **JJWT** para la generación y validación de tokens, y **JPA/Hibernate**
sobre **PostgreSQL** para la persistencia. La validación se maneja con
**Spring Validation**, y la API se documenta mediante **springdoc-openapi**.