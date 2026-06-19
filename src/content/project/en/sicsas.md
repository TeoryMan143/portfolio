---
title: SICSAS
description: Corporate website for an industrial fire safety company
tags: [ts, react, astro, tailwind, nodejs, git]
cover: sicsas-cover.png
repo: https://github.com/TeoryMan143/sicsas
---

SICSAS (Seguridad Industrial Cárdenas S.A.S) is the corporate website for a Cali-based
company specializing in **fire suppression systems**. The site presents the company's
services, products, and contact information to potential clients in the industrial sector.

## Services

The site showcases a full catalog of fire protection systems, each with its own dedicated
page explaining how it works and the NFPA standards it complies with:

- Fire pump systems (NFPA 20, NFPA 25)
- Automatic sprinkler systems (NFPA 13)
- Detection, alarm and evacuation systems (NFPA 72)
- FM-200 clean agent systems (NFPA 2001)
- Foam suppression systems
- Wet chemical systems for commercial kitchens (NFPA 17, NFPA 96)
- Fire hose cabinets (NFPA 1, 14, 25)
- Portable fire extinguishers
- Fire doors (NFPA 80)

## Products

An industrial safety product catalog organized by protection category — respiratory,
visual, auditory, head and face, hands, height, feet, body, signage, and emergency
supplies. Users can filter by category through a searchable dropdown menu.

## Contact

A contact dialog is available from any page, showing phone numbers, WhatsApp, email,
and office location — all copyable to clipboard with one click. A built-in contact form
sends messages directly to the company's inbox via **Nodemailer** and **React Email**,
with Zod validation on both client and server through **Astro Actions**.

## Tech stack

Built with **Astro** and **React**, styled with **Tailwind CSS**, and deployed on
**Vercel**. Content is managed through Astro content collections. The UI includes
an auto-scrolling image gallery, an animated header that shrinks on scroll using the
native CSS scroll-driven animations API, and page transitions via Astro View Transitions.