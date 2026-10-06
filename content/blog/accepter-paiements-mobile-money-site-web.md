---
title: "FedaPay, MTN MoMo, Moov Money : accepter les paiements sur votre site au Bénin"
date: "2026-07-03"
updated: "2026-10-06"
readTime: "4 min"
summary: "Je vous explique comment préparer le paiement Mobile Money ou par carte sur votre site, du choix du prestataire au suivi des commandes."
category: "E-commerce"
author: "Néhémie Gandonou"
tags: ["Mobile Money", "FedaPay", "Paiement en ligne", "E-commerce", "Bénin"]
---

Une boutique en ligne peut être convaincante et perdre tout de même des commandes au moment du paiement. Au Bénin, le Mobile Money occupe une place centrale dans les usages quotidiens, tandis que la carte reste utile pour la diaspora et l'international. Voici comment intégrer ces moyens de paiement proprement sur un site ou une application.

## Le paysage du paiement en ligne au Bénin

Voici trois options à examiner selon vos clients :

- **MTN Mobile Money (MoMo)** : un moyen de paiement très présent sur le marché local.
- **Moov Money** : un canal complémentaire utile pour élargir la couverture.
- **La carte bancaire** (Visa/Mastercard) : à envisager si vos clients utilisent ce moyen de paiement, notamment à l’international.

Un agrégateur regroupe les moyens de paiement qu’il couvre derrière une même intégration.

## FedaPay : un exemple d’intégration

[FedaPay](https://fedapay.com) est un agrégateur de paiement béninois : il regroupe plusieurs moyens de paiement. Je vérifie les canaux disponibles pour votre compte avant de préparer l’intégration. Le parcours prévu est le suivant :

1. Votre client choisit son moyen de paiement sur votre site.
2. Il valide le paiement sur son téléphone (code USSD ou notification).
3. FedaPay confirme la transaction à votre site, qui débloque la commande.
4. Les fonds sont reversés sur votre compte.

D'autres agrégateurs existent dans la sous-région, notamment KkiaPay, PayDunya et CinetPay. Le choix dépend de vos pays cibles et de votre volume. Pour un marchand béninois, FedaPay est généralement un bon point de départ.

### Combien ça coûte ?

Les agrégateurs se rémunèrent généralement par une **commission sur chaque transaction**. Le taux, les éventuels frais fixes et les conditions de reversement varient selon le canal, le pays et le volume. Vérifiez donc la grille officielle au moment de choisir et intégrez ce coût dans vos marges.

## Les points que je vérifie dans l’intégration

Je vérifie notamment les confirmations, les reprises et les échecs :

- **Vérifier les webhooks** : c'est le serveur de paiement qui confirme la transaction, jamais le navigateur du client. Sinon, n'importe qui peut simuler un paiement réussi.
- **Être idempotente** : si la confirmation arrive deux fois, la commande ne doit pas être débloquée deux fois.
- **Gérer les échecs** : solde insuffisant, délai dépassé ou annulation. Chaque cas doit avoir un parcours clair pour le client.
- **Conserver les références utiles** : montants, statuts et confirmations permettent de rapprocher les transactions avec les relevés, sans enregistrer inutilement des données sensibles.

J'ai intégré ces mécanismes sur des projets comme [Wéman LMS](/projects/weman-lms), où le paiement MoMo déclenche l’accès aux formations après confirmation. Le [backend](/services/backend-api) qui orchestre tout cela est aussi important que la page de paiement elle-même.

## L'impact sur vos ventes

Avec le Mobile Money intégré, vos clients règlent à distance depuis leur compte. Voici ce que ce parcours apporte et les résultats à suivre sur votre boutique :

- **Moins d'abandons** : un moyen de paiement familier peut éviter au client de chercher une autre façon de régler sa commande.
- **Confiance** : des moyens de paiement identifiables et des explications claires peuvent rassurer le client.
- **Paiement à distance** : le client règle sans venir en boutique. Les délais de confirmation et de reversement dépendent du prestataire.

## Par où commencer ?

Si vous avez déjà un site, l'intégration du paiement peut souvent s'ajouter à l'existant : c'est un chantier ciblé, pas nécessairement une refonte. Si vous partez de zéro, autant concevoir la boutique autour du parcours de paiement dès le départ. C'est l'objet de mon service [création de site e-commerce](/services/creation-ecommerce), dont les fourchettes de budget figurent sur la [page tarifs](/tarifs).

Dans les deux cas, [parlons de votre projet](/contact) : je vous réponds sous 24h pour discuter des paiements dont vous avez besoin.
