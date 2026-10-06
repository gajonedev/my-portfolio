---
title: "Comment j’ai conçu AfCom pour enregistrer les ventes sans internet"
date: "2026-07-03"
updated: "2026-10-06"
readTime: "3 min"
summary: "Je présente les choix derrière le prototype AfCom : stockage sur le téléphone, synchronisation et gestion des coupures."
category: "Développement"
author: "Néhémie Gandonou"
tags: ["Offline-first", "Flutter", "Architecture", "Mobile", "AfCom"]
---

Imaginez une commerçante qui veut enregistrer une vente alors que son téléphone ne capte pas. Si elle doit attendre le retour du réseau, l’application lui rend peu service à ce moment-là. C’est l’un des usages que j’ai voulu prendre en compte avec [AfCom](/projects/afcom), mon prototype de gestion pour les petits commerces.

Dans ce prototype, les ventes et les dépenses courantes sont enregistrées sur le téléphone. Ce fonctionnement permet de continuer la saisie pendant une coupure, puis de transmettre les opérations au retour du réseau. Voici les choix de conception qui rendent ce fonctionnement possible.

## Enregistrer sur le téléphone avant de synchroniser

Dans une application qui dépend du serveur pour enregistrer chaque action, une coupure peut interrompre la saisie. Pour AfCom, j’ai choisi de conserver localement les opérations courantes, notamment les ventes et les dépenses. La saisie de ces opérations reste ainsi disponible lorsque la connexion manque.

C’est le principe de l’approche **offline-first** : on prévoit les tâches hors ligne dès la conception, puis on organise leurs échanges avec le serveur. Cela ne veut pas dire que toutes les fonctions deviennent accessibles sans réseau. Un paiement en ligne, par exemple, reste dépendant d’un service extérieur.

## Les points à prévoir au-delà du stockage local

### La reprise après une coupure

Une synchronisation peut s’interrompre. Il faut savoir quelles opérations ont été transmises et lesquelles restent à envoyer. Je prévois aussi le cas où une même demande est renvoyée : elle ne devrait pas créer une seconde vente.

Le journal des opérations et les identifiants stables servent à repérer les envois confirmés et à reprendre ceux qui restent en attente. Il faut ensuite vérifier le comportement avec des coupures, des redémarrages et des confirmations retardées. Le mécanisme de reprise renvoie les opérations en attente sans demander à la personne de ressaisir ses ventes. Les sauvegardes et le suivi des erreurs complètent ce fonctionnement.

### Les modifications sur plusieurs appareils

Si deux personnes modifient un stock sans connexion, leurs téléphones ne voient pas forcément la même information. Il faut décider comment rapprocher leurs opérations au retour du réseau.

Pour des mouvements de stock, enregistrer « vente de trois unités » plutôt que remplacer directement le total peut faciliter ce rapprochement. D’autres changements, comme une correction de fiche produit, demandent des règles différentes. Je préfère définir ces cas avec vous plutôt que laisser l’application décider sans explication.

### Les appareils utilisés au quotidien

Le choix du téléphone compte aussi : mémoire disponible, version du système, autonomie et taille de l’écran. Une interface agréable sur mon appareil peut être moins pratique sur celui de votre équipe.

J’utilise [Flutter](/developpeur-flutter-benin) pour AfCom. Le choix du framework ne dispense pas de limiter les traitements inutiles et d’essayer les parcours sur les appareils prévus.

## Ce que l’utilisateur doit comprendre

La commerçante enregistre sa vente sans surveiller le réseau. Elle doit néanmoins savoir si cette vente reste uniquement sur son téléphone ou si elle a déjà été transmise au serveur.

Si le téléphone est perdu avant cet envoi, les opérations restées uniquement sur l’appareil risquent de ne pas être récupérables. Je prévois donc un état visible pour les données en attente et un moyen de relancer leur envoi. Le changement de téléphone se prépare aussi : quelles données ont été sauvegardées et comment les retrouver ?

## À quels usages cette approche répond

Le besoin ne concerne pas seulement les commerces. Une [coopérative agricole](/blog/outil-digital-cooperative-agricole), une équipe de collecte ou des agents qui se déplacent peuvent avoir des tâches à effectuer dans des zones peu couvertes.

La question que je vous conseille de poser est concrète : **quelles actions restent possibles sans réseau, et que se passe-t-il quand il revient ?** Une liste précise de ces actions sera plus utile qu’une promesse générale de fonctionnement hors ligne.

## Préparer votre projet

Avant de chiffrer une [application mobile](/services/creation-application-mobile), je regarde avec vous les données à conserver, les appareils utilisés et les situations où plusieurs personnes travaillent sur les mêmes informations. Nous choisissons ensuite les fonctions qui doivent rester disponibles hors ligne.

Votre équipe rencontre ce problème ? [Décrivez-moi ses conditions de travail](/contact). Je vous aiderai à préciser ce qui doit fonctionner sans connexion et ce qui peut attendre son retour.
