---
title: Holidrive
description: A community-driven app to report and avoid road hazards
tags: [dart, flutter, sql, git]
cover: holidrive-cover.png
repo: https://github.com/TeoryMan143/holidrive
---

Holidrive is a mobile app that helps drivers avoid road hazards by crowdsourcing
real-time reports of potholes, road work, and dangerous zones — all shown on a live map.

## The map

The home screen is a full-screen **Google Map** centered on the user's current location,
with custom markers for every active report nearby. Tapping a marker opens a preview card
with a photo carousel, description, and reporter info. A floating filter panel lets users
toggle which report types they want to see, and a search bar finds reports by name with
live results as you type.

## Reporting a hazard

Users can publish a report in a few steps: choose the hazard type (pothole, road work, or
danger zone), confirm or search for a location, add a description, and attach up to four
photos. The location search calls the **Google Places API** directly and supports
defaulting to the device's current GPS position with one tap.

## Authentication

Sign in is handled through **Firebase Authentication**, supporting both email/password
and **Google Sign-In**. New accounts require email verification before accessing the map,
with a dedicated waiting screen that polls verification status automatically.

## Profile and history

Each user has a profile screen showing their name, profile picture, and theme preference
(light, dark, or system). A "My Reports" section lists every report the user has created,
letting them open or permanently delete past entries.

## Tech stack

Built with **Flutter** and **Dart**, using **GetX** for state management, routing, and
dependency injection. Data is synced in real time through the Firebase Realtime
Database, user accounts and metadata live in Cloud Firestore, and report photos
are stored in Firebase Storage. The app is fully localized in English and Spanish
through a custom GetX translation layer, and supports both light and dark themes with
persisted user preference via SharedPreferences.