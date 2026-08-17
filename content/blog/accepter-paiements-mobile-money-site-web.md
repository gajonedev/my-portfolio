---
title: "FedaPay, MTN MoMo, Moov Money : accepter les paiements sur votre site au Bénin"
date: "2026-07-03"
readTime: "4 min"
summary: "Comment intégrer les paiements Mobile Money et carte bancaire sur un site ou une application au Bénin : solutions, coûts et bonnes pratiques."
category: "E-commerce"
author: "Néhémie Gandonou"
tags: ["Mobile Money", "FedaPay", "Paiement en ligne", "E-commerce", "Bénin"]
---


Une boutique en ligne peut être convaincante et perdre tout de même des commandes au moment du paiement. Au Bénin, le Mobile Money occupe une place centrale dans les usages quotidiens, tandis que la carte reste utile pour la diaspora et l'international. Voici comment intégrer ces moyens de paiement proprement sur un site ou une application.

## Le paysage du paiement en ligne au Bénin

Trois canaux comptent réellement :

- **MTN Mobile Money (MoMo)** : un moyen de paiement très présent sur le marché local.
- **Moov Money** : un canal complémentaire utile pour élargir la couverture.
- **La carte bancaire** (Visa/Mastercard) : minoritaire localement, mais essentielle si vous vendez à la diaspora ou à l'international.

La bonne nouvelle : vous n'avez pas besoin de signer avec chaque opérateur séparément.

## FedaPay : l'agrégateur qui simplifie tout

[FedaPay](https://fedapay.com) est un agrégateur de paiement béninois : une seule intégration technique vous donne accès à MTN MoMo, Moov Money et aux cartes bancaires. Concrètement :

1. Votre client choisit son moyen de paiement sur votre site.
2. Il valide le paiement sur son téléphone (code USSD ou notification).
3. FedaPay confirme la transaction à votre site, qui débloque la commande.
4. Les fonds sont reversés sur votre compte.

D'autres agrégateurs existent dans la sous-région, notamment KkiaPay, PayDunya et CinetPay. Le choix dépend de vos pays cibles et de votre volume. Pour un marchand béninois, FedaPay est généralement un bon point de départ.

### Combien ça coûte ?

Les agrégateurs se rémunèrent généralement par une **commission sur chaque transaction**. Le taux, les éventuels frais fixes et les conditions de reversement varient selon le canal, le pays et le volume. Vérifiez donc la grille officielle au moment de choisir et intégrez ce coût dans vos marges.

## Ce qu'une intégration sérieuse doit garantir

C'est ici que la qualité du développement fait toute la différence. Une intégration de paiement professionnelle doit :

- **Vérifier les webhooks** : c'est le serveur de paiement qui confirme la transaction, jamais le navigateur du client. Sinon, n'importe qui peut simuler un paiement réussi.
- **Être idempotente** : si la confirmation arrive deux fois, la commande ne doit pas être débloquée deux fois.
- **Gérer les échecs** : solde insuffisant, délai dépassé ou annulation. Chaque cas doit avoir un parcours clair pour le client.
- **Tout journaliser** : en cas de litige, vous devez pouvoir retracer chaque transaction à la seconde près.

J'ai intégré ces mécanismes sur des projets comme [Wéman LMS](/projects/weman-lms), où le paiement MoMo débloque instantanément l'accès aux formations. Le [backend](/services/backend-api) qui orchestre tout cela est aussi important que la page de paiement elle-même.

## L'impact sur vos ventes

Au-delà de la technique, le Mobile Money bien intégré change vos conversions :

- **Moins d'abandons** : le client paie en quelques secondes avec l'outil qu'il utilise tous les jours, sans saisir de numéro de carte.
- **Confiance** : voir les logos MTN et Moov rassure immédiatement un acheteur béninois.
- **Encaissement instantané** : fini le « je passerai payer en boutique » qui ne se concrétise jamais.

## Par où commencer ?

Si vous avez déjà un site, l'intégration du paiement peut souvent s'ajouter à l'existant : c'est un chantier ciblé, pas nécessairement une refonte. Si vous partez de zéro, autant concevoir la boutique autour du parcours de paiement dès le départ. C'est l'objet de mon service [création de site e-commerce](/services/creation-ecommerce), dont les fourchettes de budget figurent sur la [page tarifs](/tarifs).

Dans les deux cas, [parlons de votre projet](/contact) : je vous dirai précisément ce que votre cas demande, devis sous 24h.

---

*Néhémie Gandonou intègre les paiements Mobile Money et carte bancaire sur les sites et applications qu'il développe pour ses clients au Bénin et en Afrique de l'Ouest.*
