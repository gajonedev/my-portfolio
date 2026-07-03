# Brouillons d'articles

Ce dossier n'est **pas** lu par le blog (`lib/blog.ts` ne lit que `content/blog/`).

## Publier un article

```bash
npm run publish-post <slug>       # ex: npm run publish-post wordpress-ou-site-sur-mesure
npm run publish-post              # sans argument : liste les brouillons disponibles
```

Le script déplace le fichier vers `content/blog/` et **met automatiquement la date
du frontmatter à la date du jour** (elle détermine l'ordre d'affichage et le signal
de fraîcheur pour Google). Ensuite : commit + déploiement, puis demander
l'indexation de l'URL dans la Search Console.

## Ordre de publication suggéré (1 à 2 par mois)

1. `fedapay-kkiapay-paydunya-comparatif.md` — le comparatif que personne n'a fait
2. `creer-boutique-en-ligne-benin-guide.md` — grosse requête transactionnelle
3. `apparaitre-sur-google-benin-seo-local.md` — vitrine d'expertise
4. `application-mobile-ou-site-web.md` — contenu de décision
5. `site-lent-pourquoi-consequences.md` — entonnoir vers l'audit
6. `wordpress-ou-site-sur-mesure.md` — capte le trafic WordPress
7. `site-web-hotel-benin-reservation-directe.md` — sectoriel (maille Ouidah/Abomey/Natitingou)
8. `digitaliser-ecole-benin.md` — sectoriel (maille Abomey-Calavi)
9. `outil-digital-cooperative-agricole.md` — sectoriel (maille Kandi/Djougou/Savalou)
10. `site-web-ong-association-5-erreurs.md` — sectoriel (maille Porto-Novo/Lokossa)
11. `construire-app-sans-internet-offline-first.md` — storytelling technique (LinkedIn-friendly)

⚠️ Si les tarifs changent d'ici la publication, vérifier les montants cités
(grille actuelle : vitrine 170k, e-com 500k, app web 650k, mobile 900k, SaaS 1,2M, backend 300k, audit 80k).
