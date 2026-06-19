---
title: Holidrive
description: Una app comunitaria para reportar y evitar peligros en la vía
tags: [dart, flutter, sql, git]
cover: holidrive-cover.png
repo: https://github.com/TeoryMan143/holidrive
---

Holidrive es una aplicación móvil que ayuda a los conductores a evitar peligros en la vía
mediante reportes colaborativos en tiempo real de huecos, obras viales y zonas peligrosas
— todo visible en un mapa en vivo.

## El mapa

La pantalla principal es un **Google Map** en pantalla completa centrado en la ubicación
actual del usuario, con marcadores personalizados para cada reporte activo cercano. Al
tocar un marcador se abre una tarjeta de vista previa con un carrusel de fotos, descripción
e información del usuario que reportó. Un panel de filtros flotante permite alternar qué
tipos de reportes ver, y una barra de búsqueda encuentra reportes por nombre con resultados
en vivo mientras se escribe.

## Reportar un peligro

Los usuarios pueden publicar un reporte en pocos pasos: elegir el tipo de peligro (hueco,
obra vial o zona peligrosa), confirmar o buscar una ubicación, añadir una descripción y
adjuntar hasta cuatro fotos. La búsqueda de ubicación usa directamente la **API de Google
Places** y permite usar la posición GPS actual del dispositivo con un solo toque.

## Autenticación

El inicio de sesión se maneja mediante Firebase Authentication, con soporte para
correo/contraseña y **Google Sign-In**. Las cuentas nuevas requieren verificación de
correo antes de acceder al mapa, con una pantalla de espera dedicada que consulta el
estado de verificación automáticamente.

## Perfil e historial

Cada usuario tiene una pantalla de perfil que muestra su nombre, foto de perfil y
preferencia de tema (claro, oscuro o sistema). Una sección de "Mis reportes" lista todos
los reportes creados por el usuario, permitiendo abrirlos o eliminarlos permanentemente.

## Stack tecnológico

Construido con **Flutter** y **Dart**, usando **GetX** para gestión de estado, enrutamiento
e inyección de dependencias. Los datos se sincronizan en tiempo real mediante Firebase
Realtime Database, las cuentas de usuario y sus metadatos viven en Cloud Firestore, y
las fotos de los reportes se almacenan en Firebase Storage. La app está completamente
localizada en inglés y español mediante una capa de traducción personalizada con GetX, y
soporta tema claro y oscuro con preferencia persistida vía SharedPreferences.