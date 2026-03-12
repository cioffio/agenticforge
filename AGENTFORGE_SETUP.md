# AgentForge Setup

This file documents the recommended launch path for the AgentForge website and inbox.

## Recommended stack

- Domain: Cloudflare Registrar
- Website hosting: Cloudflare Pages
- Business email: Microsoft 365
- Main addresses:
  - `yourname@agentforge.ai`
  - `help@agentforge.ai`

## 1. Buy the domain

Recommended first choice:

- `agentforge.ai`

If unavailable, check:

- `agentforge.studio`
- `agentforge.dev`
- `agentforgeconsulting.com`

Recommended registrar:

- Cloudflare Registrar

Fallback registrars:

- Namecheap
- Porkbun

## 2. Put the site on GitHub

From the project root:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial AgentForge site"
```

Then create an empty GitHub repository and connect it:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/agentforge-site.git
git push -u origin main
```

## 3. Deploy to Cloudflare Pages

In Cloudflare:

1. Go to `Workers & Pages`.
2. Choose `Create application`.
3. Choose `Pages`.
4. Choose `Connect to Git`.
5. Select your GitHub repository.
6. Use these settings:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`

7. Deploy.

## 4. Connect the custom domain

After deployment:

1. Open the Pages project.
2. Go to `Custom domains`.
3. Add:
   - `agentforge.ai`
   - `www.agentforge.ai`

If the domain is registered in Cloudflare and the zone is active there, Cloudflare can create the required records automatically.

## 5. DNS layout

### Website DNS

If the domain is fully managed in Cloudflare, the usual end state is:

- Apex domain `agentforge.ai` attached directly through Cloudflare Pages
- `www` as a `CNAME` to your Pages project hostname:

```text
Type: CNAME
Name: www
Target: <your-project>.pages.dev
Proxy status: Proxied
```

For the apex domain, follow the Cloudflare Pages custom-domain wizard in the dashboard. Cloudflare handles the apex setup when the zone is on Cloudflare nameservers.

### Microsoft 365 DNS

These are the main records you will normally add for business email:

```text
Type: MX
Name: @
Target: <your-mx-token>.mail.protection.outlook.com
Priority: 0
TTL: Auto or 3600
```

```text
Type: TXT
Name: @
Value: v=spf1 include:spf.protection.outlook.com -all
TTL: Auto or 3600
```

```text
Type: CNAME
Name: autodiscover
Target: autodiscover.outlook.com
TTL: Auto or 3600
```

Important:

- The exact MX target is tenant-specific. Copy it from Microsoft 365 Admin Center.
- Do not keep old MX records from another mail provider once you switch.
- Keep only one SPF TXT record for the domain.

## 6. Set up Microsoft 365 mailbox and alias

Recommended simple structure:

1. Create one mailbox: `yourname@agentforge.ai`
2. Add one alias: `help@agentforge.ai`

In Microsoft 365 Admin Center:

1. Go to `Users` -> `Active users`
2. Open your user
3. Choose `Manage username and email`
4. Add alias: `help@agentforge.ai`

Later, if more than one person needs access, convert `help@agentforge.ai` into a shared mailbox.

## 7. Final go-live checklist

- Domain purchased
- Nameservers pointed to Cloudflare
- Site deployed on Cloudflare Pages
- Apex and `www` domain connected
- Microsoft 365 domain verified
- MX, SPF, and autodiscover records added
- `help@agentforge.ai` alias created
- Real Teams link inserted in the website
- Real Telegram handle inserted in the website

## 8. Next content changes recommended

- Replace placeholder Teams link with the real booking link
- Replace placeholder Telegram contact with the real username
- Add a privacy policy page
- Add a terms page if you plan to run paid consulting online
