---
title: "Créer un design system efficace pour un SaaS"
date: "2026-02-02"
readTime: "8 min"
summary: "Méthode pour construire des composants réutilisables et assurer une cohérence visuelle à grande échelle."
category: "Design"
author: "Néhémie Gandonou"
tags: ["Design System", "SaaS", "UI/UX", "Composants", "React"]
---

# Créer un design system efficace pour un SaaS

Un design system n'est pas un luxe réservé aux grandes entreprises. C'est un investissement stratégique qui, bien exécuté, **divise par deux le temps de développement de nouvelles fonctionnalités** et garantit une expérience utilisateur cohérente à travers tout votre produit. Voici ma méthode complète, testée sur plusieurs projets SaaS.

## Qu'est-ce qu'un design system et pourquoi en avoir un ?

Un design system est un **ensemble de composants réutilisables, de règles de design et de documentation** qui sert de référence unique pour concevoir et développer un produit. Il comprend :

- **Les design tokens** : couleurs, typographies, espacements, ombres
- **Les composants UI** : boutons, inputs, modals, cartes, tableaux
- **Les patterns** : formulaires, navigation, layouts de page
- **La documentation** : guidelines d'utilisation, do's and don'ts

### Les bénéfices concrets

| Bénéfice                 | Impact                                                      |
| ------------------------ | ----------------------------------------------------------- |
| Cohérence visuelle       | Expérience utilisateur unifiée sur toutes les pages         |
| Vitesse de développement | Réduction de 40 à 60 % du temps pour les nouvelles features |
| Onboarding développeurs  | Nouveaux membres productifs en quelques jours               |
| Maintenance              | Un seul endroit à modifier pour les changements globaux     |
| Qualité                  | Moins de bugs visuels et d'incohérences                     |

## Étape 1 : Auditer l'existant

Avant de construire, faites un inventaire complet de votre interface actuelle :

### L'audit visuel

1. **Capturez** chaque écran de votre application
2. **Identifiez** les variations : combien de styles de boutons différents avez-vous ? Combien de nuances de gris ?
3. **Catégorisez** : regroupez les éléments similaires
4. **Priorisez** : quels composants sont utilisés le plus souvent ?

En général, lors de cet audit, on découvre que la plupart des SaaS utilisent **3 à 5 variantes de boutons au lieu d'une seule avec des props**, et **plus de 15 nuances de gris au lieu de 5 à 7 bien définies**.

### L'audit technique

Côté code, cherchez :

- Les styles dupliqués
- Les composants qui font la même chose avec des noms différents
- Les valeurs hardcodées (couleurs en hex, tailles en pixels)
- Les incohérences de naming

## Étape 2 : Définir les design tokens

Les design tokens sont le fondement de votre design system. Ce sont les **variables atomiques** qui définissent l'identité visuelle de votre produit.

### La palette de couleurs

Structurez votre palette en couches sémantiques :

```
/* Couche primitive - les couleurs brutes */
--violet-50: #f5f2ff;
--violet-100: #ede5ff;
--violet-500: #a776f4;
--violet-600: #9055e8;
--violet-900: #2d1b69;

/* Couche sémantique - le rôle de chaque couleur */
--color-primary: var(--violet-500);
--color-primary-hover: var(--violet-600);
--color-background: var(--neutral-50);
--color-foreground: var(--neutral-900);
--color-muted: var(--neutral-500);
--color-border: var(--neutral-200);
--color-success: var(--green-500);
--color-warning: var(--amber-500);
--color-error: var(--red-500);

/* Couche composant - usage spécifique */
--button-bg: var(--color-primary);
--button-text: var(--white);
--input-border: var(--color-border);
--input-focus: var(--color-primary);
```

Cette architecture en 3 couches permet de **changer de thème en modifiant uniquement la couche sémantique**, sans toucher aux composants.

### La typographie

Définissez une échelle typographique cohérente :

```
--font-family-sans: 'Lexend', system-ui, sans-serif;
--font-family-mono: 'JetBrains Mono', monospace;

--text-xs: 0.75rem;    /* 12px - Labels, légendes */
--text-sm: 0.875rem;   /* 14px - Body small, inputs */
--text-base: 1rem;     /* 16px - Body */
--text-lg: 1.125rem;   /* 18px - Sous-titres */
--text-xl: 1.25rem;    /* 20px - Titres de section */
--text-2xl: 1.5rem;    /* 24px - Titres de page */
--text-3xl: 1.875rem;  /* 30px - Hero titles */
--text-4xl: 2.25rem;   /* 36px - Display */
```

**Règle d'or** : n'utilisez jamais plus de 2 familles de polices et limitez-vous à 3 ou 4 graisses (regular, medium, semibold, bold).

### Les espacements

Utilisez une échelle basée sur un **multiplicateur de 4px** :

```
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

## Étape 3 : Construire les composants

### L'approche Atomic Design

Organisez vos composants en 5 niveaux :

1. **Atomes** : Button, Input, Badge, Avatar, Icon
2. **Molécules** : SearchBar (Input + Button), FormField (Label + Input + Error)
3. **Organismes** : Navbar, Sidebar, DataTable, Modal
4. **Templates** : DashboardLayout, AuthLayout, SettingsLayout
5. **Pages** : L'assemblage final

### Construire un bouton universel

Prenons l'exemple du composant le plus utilisé dans tout SaaS, le bouton :

```tsx
interface ButtonProps {
  variant: "primary" | "secondary" | "ghost" | "danger";
  size: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}
```

**Principes clés :**

- **Variants** : Chaque bouton a un rôle sémantique clair
- **Tailles** : 3 tailles couvrent 99 % des cas d'usage
- **États** : default, hover, focus, active, disabled, loading
- **Accessibilité** : focus visible, `aria-label` si icon-only, `aria-busy` si loading

### Les patterns de composition

Pour les composants complexes, utilisez le **Compound Component Pattern** :

```tsx
<DataTable>
  <DataTable.Header>
    <DataTable.Column sortable>Nom</DataTable.Column>
    <DataTable.Column>Email</DataTable.Column>
    <DataTable.Column align="right">Actions</DataTable.Column>
  </DataTable.Header>
  <DataTable.Body>
    {data.map((row) => (
      <DataTable.Row key={row.id}>
        <DataTable.Cell>{row.name}</DataTable.Cell>
        <DataTable.Cell>{row.email}</DataTable.Cell>
        <DataTable.Cell align="right">
          <Button variant="ghost" size="sm">
            Éditer
          </Button>
        </DataTable.Cell>
      </DataTable.Row>
    ))}
  </DataTable.Body>
</DataTable>
```

Ce pattern offre **flexibilité et lisibilité** tout en gardant le contrôle sur le layout.

## Étape 4 : Implémenter avec Tailwind CSS

Tailwind CSS est l'outil idéal pour implémenter un design system dans un projet React / Next.js. Voici comment structurer les choses efficacement.

### Les CSS custom properties + Tailwind

Définissez vos tokens en CSS variables et mappez-les dans la config Tailwind :

```css
@theme inline {
  --color-primary: var(--primary);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-stroke: var(--stroke);
}
```

Cela vous permet d'utiliser `bg-primary`, `text-foreground` etc. directement dans vos composants, et de **changer de thème en modifiant uniquement les variables CSS**.

### Le pattern CVA (Class Variance Authority)

Pour gérer les variantes de composants proprement, utilisez CVA :

```tsx
import { cva } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-strong",
        secondary: "border border-stroke bg-transparent hover:border-primary",
        ghost: "hover:bg-card",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
```

## Étape 5 : Documenter et maintenir

### La documentation vivante

Un design system sans documentation est un design system mort. Chaque composant doit avoir :

- **Description** : À quoi sert ce composant ?
- **Props** : Liste complète avec types et valeurs par défaut
- **Variantes** : Exemples visuels de chaque variant
- **Do's and Don'ts** : Bonnes et mauvaises pratiques
- **Accessibilité** : Exigences ARIA et navigation clavier

### Outils recommandés

- **Storybook** : Pour documenter et tester visuellement les composants
- **Figma** : Pour la source de vérité design
- **Chromatic** : Pour les tests de régression visuelle
- **Changesets** : Pour versionner les modifications du design system

### Le workflow de contribution

1. Un designer propose un changement dans Figma
2. Un développeur implémente dans une branche dédiée
3. Review par un pair (design + code)
4. Tests visuels automatisés avec Chromatic
5. Merge et publication

## Les erreurs à éviter

### 1. Trop abstraire trop tôt

Ne créez pas 50 composants dès le départ. Commencez par les **10 à 15 composants les plus utilisés** et itérez.

### 2. Ignorer les états

Chaque composant a des états : default, hover, focus, active, disabled, error, loading, empty. **Ne les négligez pas**.

### 3. Oublier l'accessibilité

Le design system est l'endroit idéal pour intégrer l'accessibilité dès la base :

- Contraste minimum WCAG AA (4.5:1 pour le texte, 3:1 pour les éléments UI)
- Navigation clavier complète
- Rôles ARIA appropriés
- Gestion du focus trap dans les modals

### 4. Ne pas versionner

Utilisez le **versioning sémantique** (semver) pour vos composants. Un changement de prop est un breaking change (major), un nouveau variant est une feature (minor).

## Conclusion

Construire un design system est un investissement qui se rembourse très rapidement. Sur un SaaS typique, j'ai observé des gains de **40 à 60 % sur le temps de développement des nouvelles pages** une fois le système en place.

La clé est de **commencer petit, itérer vite et documenter constamment**. Vous n'avez pas besoin d'un système parfait dès le premier jour — vous avez besoin d'un système qui évolue avec votre produit.

Vous lancez un SaaS et souhaitez partir sur des bases solides ? [Parlons-en](/contact) et construisons ensemble un design system taillé pour votre produit.
