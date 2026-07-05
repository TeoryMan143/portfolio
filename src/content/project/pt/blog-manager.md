---
title: blog-manager
description: API REST de blog com autenticação JWT e refresh tokens, gestão de posts e comentários baseada em propriedade, e testes de integração
tags: [java, spring, postgres, sql, git]
cover: blog-manager-cover.png
repo: https://github.com/TeoryMan143/blog-manager
---

blog-manager é uma API REST para uma plataforma de blog, responsável pela autenticação,
autorização e gestão de conteúdo de posts e comentários. Qualquer frontend é um cliente
simples que apenas consome a API — toda a lógica de negócio, validação e segurança
residem no backend.

## Autenticação e segurança

Os usuários se autenticam por meio de um fluxo de usuário/senha através do
**Spring Security**, apoiado por access tokens emitidos com **JJWT** e refresh tokens de
uso único persistidos por usuário. Um `JwtAuthFilter` personalizado valida os tokens em
cada requisição, enquanto um `RestAuthEntryPoint` retorna respostas de erro JSON
estruturadas em vez de redirecionamentos padrão quando a autenticação está ausente ou é
inválida. Um componente `CurrentUserProvider` resolve o usuário autenticado a partir do
contexto de segurança para uso em todos os serviços.

## Posts e comentários

Os posts pertencem a autores por meio de uma relação `Post` → `User`, e os comentários
estendem isso para uma estrutura `Post` ↔ `Comment` ↔ `User`, permitindo que os usuários
comentem em qualquer post, mas só modifiquem suas próprias contribuições. A propriedade
é validada na camada de serviço em toda operação de modificação — atualizar ou excluir
um post ou comentário verifica o ID do usuário solicitante em relação ao autor do
recurso antes de proceder. Todos os IDs das entidades são UUIDs do tipo `String`
gerados no momento da persistência.

## Tratamento de erros e design da API

Um `GlobalExceptionHandler` centralizado mapeia as exceções de domínio — não
encontrado, proibido, usuário duplicado, tokens inválidos/expirados, JSON malformado e
falhas de validação — para um formato consistente de `ApiResponse` com os códigos de
status HTTP apropriados. A API é totalmente documentada com **OpenAPI/Swagger UI**,
incluindo suporte integrado para autorização com Bearer JWT diretamente pela interface
da documentação.

## Testes

As camadas de serviço e repositório são cobertas por testes unitários e de integração,
usando **Testcontainers** para levantar uma instância real de **PostgreSQL** nos testes
de integração de repositórios e serviços, em vez de depender de mocks ou de um banco de
dados em memória.

## Stack tecnológico

Construído com **Spring Boot 4** e **Java 25**, usando **Spring Security** para
autenticação, **JJWT** para geração e validação de tokens, e **JPA/Hibernate** sobre
**PostgreSQL** para persistência. A validação é feita com **Spring Validation**, e a API
é documentada por meio do **springdoc-openapi**.