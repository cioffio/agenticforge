# OpenClaw Stack per OpenClawWeb

Questa cartella contiene lo stack minimo per usare questo progetto insieme a OpenClaw e continuare il lavoro anche da Telegram.

## Obiettivo

Usare OpenClaw come agente operativo per:

- rifinire la landing page
- ricevere richieste dal canale Telegram
- fare review di idee prodotto e miglioramento agenti
- mantenere il progetto locale e sotto controllo

## Stack consigliato

- Node.js 22+
- OpenClaw CLI + Gateway locale
- una chiave provider LLM valida
- Telegram Bot Token creato con `@BotFather`
- Python 3 per preview locale veloce
- questo repository come workspace di lavoro

## Verifica rapida ambiente

Nel progetto attuale risultano gia presenti:

- `Node v24.14.0`
- `Python 3.12.10`

## Setup rapido OpenClaw su Windows

1. Installa OpenClaw:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

2. Esegui onboarding:

```powershell
openclaw onboard --install-daemon
```

3. Verifica gateway:

```powershell
openclaw gateway status
openclaw dashboard
```

La dashboard locale dovrebbe aprirsi su `http://localhost:18789/`.

## Config e workspace

Percorsi utili secondo la documentazione OpenClaw:

- config principale: `~/.moltbot/moltbot.json`
- state directory: `~/.moltbot/`
- workspace default: `~/clawd`

Per usare direttamente questa repo come workspace, imposta:

```powershell
moltbot config set agents.defaults.workspace "C:\\Users\\pecca\\Desktop\\PersonalProjects\\OpenClawWeb"
```

## Collegare Telegram

1. Apri `@BotFather` e crea il bot.
2. Copia il token.
3. Duplica `openclaw.sample.jsonc` nel file di configurazione OpenClaw oppure integra i blocchi Telegram nel tuo `~/.moltbot/moltbot.json`.
4. Compila il token e i tuoi user ID Telegram.
5. Avvia OpenClaw e scrivi al bot in DM.
6. Approva l'accesso:

```powershell
openclaw pairing list telegram
openclaw pairing approve telegram <CODE>
```

7. Tieni i log aperti mentre testi:

```powershell
openclaw logs --follow
```

## Flusso consigliato per questo progetto

1. Lascia il sito in questa repo.
2. Usa OpenClaw per lavorare sulla repo locale.
3. Usa Telegram come canale rapido per:
   - chiedere modifiche copy/UI
   - far scrivere sezioni aggiuntive
   - creare nuove FAQ
   - revisionare idee di agenti da sviluppare
4. Usa Teams per le consulenze strutturate con i clienti.

## Come continuare a cena

1. Avvia la preview locale con `start-preview.ps1`.
2. Avvia OpenClaw.
3. Scrivi al tuo bot Telegram richieste molto specifiche, per esempio:

```text
Apri la repo OpenClawWeb e migliora la sezione FAQ aggiungendo 4 domande sui costi e sulla sicurezza.
```

```text
Rendi piu forte la sezione consulenza strategica e aggiungi un piano "Idea Audit" da 45 minuti.
```

```text
Prepara una variante della landing con focus Telegram-first per founder non tecnici.
```

## File inclusi

- `.env.example`: variabili da valorizzare
- `openclaw.sample.jsonc`: base di configurazione OpenClaw + Telegram
- `workspace/AGENTS.md`: istruzioni operative per l'agente
- `start-preview.ps1`: preview locale del sito

## Note operative

- In OpenClaw il canale Telegram usa di default il long polling. Il webhook serve solo se vuoi esporre il bot tramite URL pubblico.
- Per messaggi di gruppo senza mention esplicita, devi disabilitare la privacy del bot in BotFather e reinserire il bot nel gruppo.
- Per sicurezza, tieni `dmPolicy` su `pairing` o `allowlist`, non `open`.
- `AGENTS.md` viene letto all'avvio della workspace: quello incluso in `workspace/AGENTS.md` ti serve come base per un agente dedicato a questo progetto.
