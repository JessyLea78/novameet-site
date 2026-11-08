# NovaMeet - Site Officiel - Pack GitHub Pages

## Contenu du ZIP
- index.html
- assistance.html (/assistance.html)
- confidentialite.html (/confidentialite.html)
- suppression-compte.html (/suppression-compte.html)
- css/style.css
- js/main.js

Design: #070A14 / #3A7BFF / #8B5CF6 - Premium glassmorphism V2 identique à l'app.

## 1. Où déposer sur GitHub (gratuit)
1. Créez un repo public: ex: `novameet-site`
2. Uploadez TOUS les fichiers à la racine en conservant `css/` et `js/` (drag & drop sur github.com)
3. Ne mettez pas dans un sous-dossier.

## 2. Activer GitHub Pages
- Repo > Settings > Pages
- Source: Deploy from a branch
- Branch: main / root
- Save → attendez 1-2 min
- URL publique: https://VOTRE-USERNAME.github.io/novameet-site/

## 3. URLs finales à obtenir
Après activation:
- https://VOTRE-USERNAME.github.io/novameet-site/assistance.html
- https://VOTRE-USERNAME.github.io/novameet-site/confidentialite.html
- https://VOTRE-USERNAME.github.io/novameet-site/suppression-compte.html
- https://VOTRE-USERNAME.github.io/novameet-site/ → accueil

Testez chaque URL sur mobile et desktop.

## 4. Que mettre dans App Store Connect
- Support URL: .../assistance.html
- Privacy Policy URL: .../confidentialite.html
- Dans App Review > Notes: "Account deletion available at .../suppression-compte.html + in-app Settings > Delete Account"

## 5. Ce qui reste à compléter (OBLIGATOIRE avant soumission)
Dans tous les fichiers, cherchez `[À COMPLÉTER]`:

- Éditeur juridique réel: NE PAS réutiliser automatiquement SIREN 108 608 969 de JL Beauty. Si NovaMeet est sous JL Beauty, confirmez. Sinon créez nouvelle entité. SIRET, adresse, email pro.
- DPO / contact RGPD
- Date mise à jour confidentialité
- Détails Supabase V2: région, tables, buckets Storage, rétention
- Durées de conservation
- Email assistance officiel
- Prestataires (Firebase, etc.)

## 6. Rendre les formulaires fonctionnels (backend)
Actuellement les formulaires affichent "non opérationnel" - c'est voulu pour ne pas mentir à Apple.

Pour connecter:
- assistance.html: créez Edge Function Supabase `contact-support` qui envoie email via Resend/Sendgrid + log dans table `support_tickets`
- suppression-compte.html: créez Edge Function `delete-account`:
  1. Vérifie OTP email (supabase.auth.signInWithOtp)
  2. supabase.auth.admin.deleteUser(user_id)
  3. Supprime Storage: `avatars/{user_id}` etc.
  4. Log RGPD
  5. Envoie email confirmation
- Dans js/main.js, remplacez le handler par fetch vers votre endpoint.

Exemple fetch (à adapter):
fetch('https://xxx.supabase.co/functions/v1/delete-account', {method:'POST', body: JSON.stringify({email})})

## 7. Vérifications faites
- Liens entre pages: OK
- Navigation: OK
- Mobile: responsive testé (grid collapse)
- Formulaires: bloqués avec message non-opérationnel (conforme)
- Mentions [À COMPLÉTER] visibles en jaune
- Aucune conformité Apple garantie annoncée

## 8. Livraison
ZIP prêt. Aucun abonnement nécessaire. GitHub Pages est gratuit et accepté par Apple.

Bonne publication !
