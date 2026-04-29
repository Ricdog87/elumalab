# Deployment Guide – elumalab auf Vercel + Domain `elumalab.com`

## 1) Voraussetzungen
- Zugriff auf Git-Repository mit diesem Projekt (`/app` als Next.js Root).
- Vercel Account mit Team/Projekt-Rechten.
- DNS-Zugriff auf die Domain `elumalab.com`.

## 2) Projekt auf Vercel anlegen
1. Vercel Dashboard → **Add New Project**.
2. Repository importieren.
3. **Root Directory** auf `app` setzen.
4. Build-Einstellungen:
   - Framework: `Next.js`
   - Install Command: `npm install`
   - Build Command: `npm run build`
5. Deploy auslösen.

## 3) Domain verbinden
1. Im Vercel-Projekt: **Settings → Domains**.
2. Domain hinzufügen:
   - `elumalab.com`
   - `www.elumalab.com`
3. DNS-Einträge laut Vercel setzen (typisch):
   - Apex (`@`) als `A` Record auf `76.76.21.21`
   - `www` als `CNAME` auf `cname.vercel-dns.com`
4. Nach DNS-Propagation in Vercel prüfen, ob beide Domains als **Valid** markiert sind.

## 4) Production Defaults
- HTTPS erzwingen (automatisch via Vercel SSL).
- `www.elumalab.com` auf `elumalab.com` weiterleiten.
- Preview Deployments für Pull Requests aktiv lassen.

## 5) Nächste Schritte
- Formular/CTA an CRM anbinden (z. B. HubSpot API).
- Auth + Multi-Tenant Backend (API) ergänzen.
- Monitoring (Vercel Analytics + Error Tracking) aktivieren.
