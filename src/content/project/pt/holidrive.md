---
title: Holidrive
description: Um app comunitário para reportar e evitar perigos nas vias
tags: [dart, flutter, sql, git]
cover: holidrive-cover.png
repo: https://github.com/TeoryMan143/holidrive
---

Holidrive é um aplicativo móvel que ajuda motoristas a evitar perigos nas vias através de
relatos colaborativos em tempo real de buracos, obras viárias e zonas perigosas — tudo
exibido em um mapa ao vivo.

## O mapa

A tela inicial é um **Google Map** em tela cheia centralizado na localização atual do
usuário, com marcadores personalizados para cada relato ativo nas proximidades. Ao tocar
em um marcador, abre-se um cartão de pré-visualização com um carrossel de fotos, descrição
e informações de quem fez o relato. Um painel de filtros flutuante permite alternar quais
tipos de relatos exibir, e uma barra de busca encontra relatos por nome com resultados em
tempo real enquanto se digita.

## Reportar um perigo

Os usuários podem publicar um relato em poucos passos: escolher o tipo de perigo (buraco,
obra viária ou zona perigosa), confirmar ou buscar uma localização, adicionar uma
descrição e anexar até quatro fotos. A busca de localização utiliza diretamente a **API
do Google Places** e permite usar a posição GPS atual do dispositivo com um toque.

## Autenticação

O login é gerenciado pelo Firebase Authentication, com suporte para e-mail/senha e
**Google Sign-In**. Novas contas exigem verificação de e-mail antes de acessar o mapa,
com uma tela de espera dedicada que verifica o status de verificação automaticamente.

## Perfil e histórico

Cada usuário tem uma tela de perfil que exibe seu nome, foto de perfil e preferência de
tema (claro, escuro ou sistema). Uma seção "Meus relatos" lista todos os relatos criados
pelo usuário, permitindo abri-los ou excluí-los permanentemente.

## Stack tecnológico

Construído com **Flutter** e **Dart**, usando **GetX** para gerenciamento de estado,
roteamento e injeção de dependências. Os dados são sincronizados em tempo real através do
Firebase Realtime Database, as contas de usuário e seus metadados ficam no Cloud
Firestore, e as fotos dos relatos são armazenadas no Firebase Storage. O app é totalmente
localizado em inglês e espanhol através de uma camada de tradução personalizada com GetX,
e suporta temas claro e escuro com preferência persistida via SharedPreferences.