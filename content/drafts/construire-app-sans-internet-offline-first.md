---
title: "Comment j'ai construit une application qui fonctionne sans internet"
date: "2026-07-03"
readTime: "7 min"
summary: "Retour d'expérience sur AfCom, une app de gestion pour commerçants conçue offline-first : pourquoi le serveur doit être une copie du téléphone — et pas l'inverse."
category: "Développement"
author: "Néhémie Gandonou"
tags: ["Offline-first", "Flutter", "Architecture", "Mobile", "AfCom"]
---

# Comment j'ai construit une application qui fonctionne sans internet

Une vendeuse enregistre une vente dans sa boutique de quartier. Le réseau ? Peut-être. Peut-être pas. Peut-être dans une heure. Si l'application affiche « erreur de connexion, veuillez réessayer », elle ressort son cahier — et elle a raison. C'est le problème que j'ai résolu en construisant [AfCom](/projects/afcom), une application de gestion pour petits commerçants. Voici comment, et ce que ce projet m'a appris sur la conception d'applications pour le terrain africain.

## Le renversement mental : offline-first, pas offline-toléré

La plupart des applications sont construites *online-first* : chaque action interroge le serveur, et le mode hors-ligne est une rustine ajoutée après coup — un cache, un message d'excuse. Ça produit des applications qui *tolèrent* mal les coupures.

L'approche inverse — **offline-first** — pose un principe radical : **le téléphone est la source de vérité, le serveur n'en est qu'une copie de sauvegarde**. Chaque vente, chaque entrée de stock, chaque dépense s'écrit d'abord dans la base de données locale du téléphone (SQLite). L'application fonctionne à 100 % sans aucun réseau — pas en mode dégradé : à 100 %. La synchronisation devient une tâche de fond opportuniste : quand le réseau apparaît, les données montent ; quand il disparaît, rien ne change pour l'utilisatrice.

Ce n'est pas un détail d'implémentation — c'est une décision d'architecture qui doit être prise le premier jour. L'ajouter après coup revient à reconstruire l'application.

## Les trois problèmes durs (et leurs solutions)

### 1. La synchronisation sans perte

Que se passe-t-il si le téléphone s'éteint pendant une synchro ? Si la même donnée est modifiée sur deux appareils ? La réponse tient en deux mécanismes : un **journal local des opérations** (chaque action est un événement daté, conservé jusqu'à confirmation du serveur) et des **écritures idempotentes** (rejouer deux fois la même opération ne crée pas de doublon). Le résultat sur AfCom : testée en conditions réelles de coupures prolongées, **zéro perte de données**.

### 2. Les conflits

Deux vendeurs modifient le même stock hors-ligne ; qui a raison ? La leçon contre-intuitive : la plupart des « conflits » se dissolvent quand on modélise les données en **événements plutôt qu'en états**. On ne stocke pas « stock = 47 » (deux valeurs concurrentes = conflit) ; on stocke « vente de 3 » et « vente de 2 » (deux événements = tous valides, le stock se calcule). Ce simple choix de modélisation élimine 90 % des cas de conflit avant qu'ils existent.

### 3. Les téléphones réels

Le terrain, ce sont des appareils à 40 000 FCFA avec peu de mémoire et des versions Android anciennes. Ça impose une discipline : base locale légère, pas d'images superflues, interface fluide même sur un processeur modeste. **Flutter** s'est révélé excellent pour ça — [j'explique pourquoi c'est ma technologie mobile de référence ici](/developpeur-flutter-benin).

## Ce que ça change pour l'utilisateur final

Tout. La vendeuse enregistre sa vente en trois secondes, réseau ou pas — l'application ne lui parle jamais de connexion, ce n'est pas son problème. Le soir, quand le téléphone accroche du réseau, tout se synchronise silencieusement : ses données sont sauvegardées, son historique est complet, et si elle change de téléphone, elle retrouve tout.

C'est la différence entre une application qu'on *essaie* et une application qu'on *adopte*. Sur le terrain africain, l'offline-first n'est pas une fonctionnalité premium — c'est la condition d'adoption.

## Au-delà du commerce

Ce même principe s'applique partout où le réseau est incertain : les [coopératives agricoles](/blog/outil-digital-cooperative-agricole) dont les agents collectent au village, les équipes de santé communautaire, les enquêteurs de terrain, la logistique hors des grands axes. À chaque fois, la question à poser à votre prestataire est la même : *« que se passe-t-il exactement quand il n'y a pas de réseau ? »* — et « un message d'erreur » est la mauvaise réponse.

## Si vous avez un projet de terrain

L'offline-first demande plus de rigueur en amont — modélisation, synchro, tests de coupure — mais c'est ce qui sépare les applications utilisées des applications désinstallées. C'est une de mes spécialités sur les [applications mobiles](/services/creation-application-mobile) que je conçois, d'AfCom au monitoring IoT d'[iVeges](/projects/iveges) qui applique la même philosophie aux capteurs agricoles.

Votre projet doit fonctionner là où le réseau ne suit pas ? [Décrivez-le-moi](/contact) — c'est exactement le genre de défi que j'aime, et le devis arrive sous 24h.

---

*Néhémie Gandonou conçoit des applications offline-first en Flutter depuis Cotonou. L'étude de cas complète d'AfCom est [disponible ici](/projects/afcom).*
