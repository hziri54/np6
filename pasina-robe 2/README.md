# Site de Maître Nicolas Pasina

Lancer en local : `python3 -m http.server 3000` dans ce dossier, puis http://localhost:3000

## À compléter (Ctrl+F sur `[`)
- Parcours, formation, fonctions ordinales (accueil)
- Horaires, étage, interphone, accès (accueil et contact)
- Honoraires (accueil) : à décider avec Maître Pasina
- Presse : 4 à 6 articles (journal, date, titre, lien) + images dans `assets/presse/article-1.jpg` à `article-6.jpg`, avec l’accord du journal
- Mentions légales : forme d’exercice, SIRET, assureur, médiateur, hébergeur, adresse du barreau
- Confidentialité : base légale et durée de conservation à valider
- Domaines d’intervention : à valider avec lui
- `sitemap.xml` et `robots.txt` : remplacer `DOMAINE` par le vrai nom de domaine

## Avant la mise en ligne
1. Héberger les polices Google Fonts dans `assets/fonts/` (RGPD) et afficher la carte Google après consentement.
2. Ajouter un portrait dans `assets/img/`.
3. Tester sur téléphone.
4. Faire relire les textes par Maître Pasina (règles de publicité des avocats).
5. Envoyer tout le contenu du dossier dans `www` chez OVH, `index.html` à la racine.

## Images : où mettre quoi
| Emplacement | Fichier | Format conseillé |
|---|---|---|
| Portrait (section Le cabinet) | `assets/img/portrait.jpg` | vertical 4:5, 1200 px |
| Photo du cabinet (accueil) | `assets/img/cabinet.jpg` | paysage 16:9, 1600 px |
| Équipe (3 personnes) | `assets/equipe/equipe-1.jpg`, `equipe-2.jpg`, `equipe-3.jpg` | vertical 4:5, 1000 px |
| Articles de presse | `assets/presse/article-1.jpg` à `article-6.jpg` | vertical, 1200 px |
| Bandeau droit civil | `assets/img/bandeau-civil.jpg` | très large 21:9, 1800 px |
| Bandeau droit public | `assets/img/bandeau-public.jpg` | très large 21:9, 1800 px |
| Façade du cabinet (page contact) | `assets/img/facade.jpg` | très large 21:9, 1800 px |
| Logo (en-tête) | `assets/img/logo.svg` | version claire, fond transparent |
| Icône d’onglet | `assets/favicon.svg` | carré |

Chaque image se remplace toute seule dès que le fichier existe. Garder chaque photo sous 300 Ko environ (JPG).
Penser aussi à changer, dans `index.html`, les noms `[Prénom Nom]` et `[Fonction]` de l’équipe.
