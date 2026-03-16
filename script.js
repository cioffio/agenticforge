
const translations = {
  en: {
    navWhy: "Why now",
    navOffer: "What you get",
    navProcess: "Process",
    navPricing: "Packages",
    navAdvisory: "Strategy Lab",
    navContact: "Contact",
    navFaq: "FAQ",
    navCta: "Book setup",
    heroEyebrow: "Guided OpenClaw setup",
    heroTitle:
      "Use OpenClaw without losing hours to setup and configuration.",
    heroSub:
      "Practical installation, models, tools, and a first working agent on Windows, macOS, and Linux, in one guided Teams session.",
    heroCtaPrimary: "Start here",
    heroCtaSecondary: "Book the setup",
    heroBullet1: "Guided installation on Windows, macOS, and Linux",
    heroBullet2: "Connect local or cloud models",
    heroBullet3: "Tools, skills, and permissions set up properly",
    heroBullet4:
      "Real troubleshooting until the first useful workflow works",
    panelTitle: "Session snapshot",
    panelStep1Title: "Initial check",
    panelStep1Body: "Verify system, accounts, and prerequisites",
    panelStep2Title: "Install OpenClaw",
    panelStep2Body: "Guided setup without getting stuck in config or terminal",
    panelStep3Title: "Connect models and tools",
    panelStep3Body:
      "Providers, skills, and integrations matched to your use case",
    panelStep4Title: "Launch the first agent",
    panelStep4Body: "Final test, checklist, and next steps",
    quickEyebrow: "Where to start",
    quickTitle: "Three clear steps to reach your first agent without confusion.",
    quickIntro:
      "First you install OpenClaw, then you connect models and tools, and finally you launch a useful workflow.",
    quick1Title: "Install OpenClaw",
    quick1Body:
      "We prepare the environment, dependencies, and base configuration cleanly, without unnecessary blockers.",
    quick2Title: "Connect models and tools",
    quick2Body:
      "We choose the provider, APIs, skills, and integrations that fit your real use case, not a generic demo.",
    quick3Title: "Launch the first agent",
    quick3Body:
      "We finish with a concrete task, a final test, and a clear checklist so you can continue without depending on us.",
    workflowEyebrow: "From zero to working in 15 minutes",
    workflowTitle: "See the path before you even book.",
    workflowBody:
      "Install OpenClaw, choose the model, connect tools and skills, then launch the first agent. No vague theory: we start from a concrete flow.",
    workflowStep1: "Install",
    workflowStep1Body: "Clean setup and prerequisites ready",
    workflowStep2: "Choose",
    workflowStep2Body: "Provider and model matched to your case",
    workflowStep3: "Connect",
    workflowStep3Body: "Tools, skills, and permissions set with intent",
    workflowStep4: "Launch",
    workflowStep4Body: "First agent tested on a useful task",
    guidesEyebrow: "Practical guides",
    guidesTitle:
      "The first pages worth reading if you want to start using OpenClaw in a practical way.",
    guidesBody:
      "These guides target real questions: installation, operating system, agents, and first concrete use cases.",
    guide1Title: "Install OpenClaw",
    guide1Body:
      "Main guide with official commands, initial onboarding, and quick links for every system.",
    guide2Title: "OpenClaw on Windows",
    guide2Body:
      "Recommended WSL2 path, PowerShell alternative, and useful checks right after setup.",
    guide3Title: "OpenClaw on macOS",
    guide3Body:
      "Official script, onboarding, and first steps to reach a clean working base quickly.",
    guide4Title: "OpenClaw on Linux",
    guide4Body:
      "Official installation, dashboard check, and fast transition toward tools and agents.",
    guide5Title: "Install agents",
    guide5Body:
      "How to move from OpenClaw installed to a first useful agent with plugins and minimal configuration.",
    guide6Title: "Ready agents",
    guide6Body:
      "Concrete examples for support, research, reporting, and real operational workflows.",
    stat1: "Consulting duration based on package",
    stat2: "Customized Teams session",
    stat3: "Maximum 48h technical follow-up window",
    stat4: "Starter scripts and prompt pack included",
    aboutEyebrow: "Who we are",
    aboutTitle:
      "Independent consulting built on international execution, not generic AI hype.",
    aboutBody1:
      "I am an independent consultant with international experience across digital products, operations and AI-driven delivery. Over the years I have helped launch multiple successful projects for different markets, combining technical execution with business pragmatism.",
    aboutBody2:
      "After a long period working under other people's rules, priorities and limitations, I decided to build my own business: a focused consulting practice designed to help clients adopt OpenClaw and practical agent workflows faster, more safely and with real operational outcomes.",
    aboutPanelTitle: "What this means for clients",
    aboutPoint1: "Direct senior guidance instead of generic support",
    aboutPoint2: "International product and execution perspective",
    aboutPoint3: "Clear opinions on what to build, improve or avoid",
    aboutPoint4: "A practical path from idea to working agent",
    whyEyebrow: "Why act now",
    whyTitle:
      "The real problem is not discovering OpenClaw exists, but getting it to work properly on the first try.",
    whyBody:
      "The issue is not awareness. The issue is installing OpenClaw, choosing the right model, connecting the right tools, and knowing what to do when something breaks. We reduce technical and decision friction so you can move from zero to a first working agent.",
    riskTitle: "The friction you remove immediately",
    risk1: "Setup that gets stuck between terminal commands, dependencies, and permissions",
    risk2: "Confusion around providers, API keys, and local versus cloud models",
    risk3: "Tools and skills added without a clear plan or with excessive access",
    risk4:
      "Agents that launch badly or never become useful for real tasks",
    offerEyebrow: "What is included",
    offerTitle:
      "We reduce friction at the 6 points that block almost everyone at the start.",
    feat1Title: "Installation without dead ends",
    feat1Body:
      "We prepare the environment, dependencies, and initial configuration in a clean way so you do not waste time on basic but blocking errors.",
    feat2Title: "Right model and provider",
    feat2Body:
      "You understand which provider to connect, when to use cloud or local models, and which setup fits your budget and use case.",
    feat3Title: "Tools and skills ready",
    feat3Body:
      "We connect only the tools that matter, with skills and integrations that help the first workflow instead of making the setup heavier.",
    feat4Title: "Minimum security and permissions",
    feat4Body:
      "We set basic access rules, segmentation, and safeguards to avoid risky mistakes from the first operational tests.",
    feat5Title: "First useful agent",
    feat5Body:
      "We do not leave you with a theoretical setup: we define one agent with a clear task, starter prompt, and real validation.",
    feat6Title: "Troubleshooting and next steps",
    feat6Body:
      "If something breaks, we fix the critical point and you end the session with a checklist and a clear direction forward.",
    agentsEyebrow: "What becomes possible after setup",
    agentsTitle:
      "When OpenClaw is configured properly, agents stop being a demo and start doing useful work.",
    agent1Title: "Customer Support",
    agent1Body:
      "Reply to common questions, triage requests, collect context and escalate only the cases that need a human.",
    agent2Title: "Lead Qualification",
    agent2Body:
      "Handle first contact, ask qualifying questions, prepare summaries and pass clean opportunities to sales.",
    agent3Title: "Research And Knowledge",
    agent3Body:
      "Search internal documents, summarize sources, compare options and build quick operational notes for the team.",
    agent4Title: "Reporting And Ops",
    agent4Body:
      "Monitor repetitive workflows, prepare updates, organize data and support recurring execution tasks.",
    processEyebrow: "Consulting process",
    processTitle: "We take you from zero to a first working agent in 4 steps.",
    step1Title: "Starting-point check",
    step1Body:
      "We map devices, technical level, goal, and constraints so we can choose a realistic setup immediately.",
    step2Title: "Installation and configuration",
    step2Body:
      "We do the live setup, fix errors, and prepare the environment so you can work without unnecessary friction.",
    step3Title: "Connect models, tools, and skills",
    step3Body:
      "We choose providers, permissions, and useful integrations to build a first workflow that makes sense.",
    step4Title: "Final test and troubleshooting",
    step4Body:
      "We validate the first agent, fix the remaining blockers, and close with a checklist and practical next steps.",
    pricingEyebrow: "Consulting packages",
    pricingTitle: "Choose whether you need fast setup or a strategic agent review.",
    plan1Price: "EUR25",
    plan1Name: "Kickstart",
    plan1Time: "30 minutes",
    plan1Feat1: "OpenClaw or basic agent setup",
    plan1Feat2: "Minimum security pre-check",
    plan1Feat3: "1 mini agent template",
    planBtn: "Book now",
    planFeatured: "Most chosen",
    plan2Price: "To agree",
    plan2Name: "Strategy Session",
    plan2Time: "Scope to be agreed",
    plan2Feat1: "Use-case review + agent roadmap",
    plan2Feat2: "Channel and workflow strategy",
    plan2Feat3: "Priority decisions on what to build next",
    plan3Price: "To agree",
    plan3Name: "Advisory Sprint",
    plan3Time: "Custom engagement",
    plan3Feat1: "Deep review of an existing agent or process",
    plan3Feat2: "Refinement of prompts, flows, and responsibilities",
    plan3Feat3: "Concrete plan for improvement and rollout",
    advisoryEyebrow: "Strategic consulting",
    advisoryTitle:
      "Not only setup: the strategy consulting is for AI agents, use cases, and improvement decisions too.",
    advisoryBody:
      "If you already have OpenClaw running, or if you are simply exploring agents for your business, the call becomes a practical review of flows, prompts, channels, automations, roles, and risks. The goal is deciding what to build and in which order.",
    adv1Title: "Idea Review",
    adv1Body:
      "We analyze your agent idea and determine whether it has real operational value, where it breaks, and which data it actually needs.",
    adv2Title: "Agent Improvement",
    adv2Body:
      "We review existing agents to improve reliability, precision, cost-benefit, and execution quality.",
    adv3Title: "Channel Strategy",
    adv3Body:
      "We decide where the agent should live: Telegram, web dashboard, email, back office, or internal workflows.",
    testEyebrow: "Sample user stories",
    testTitle: "Invented but realistic examples of outcomes clients may want.",
    testDisclaimer:
      "Note: these testimonials are fictional examples for commercial presentation.",
    fb1Body:
      '"A Telegram-based support agent cut repetitive replies by half in the first week."',
    fb1Meta: "Sara N. - Project Manager, Milan",
    fb2Body:
      '"We used the strategy session to validate an internal research agent before spending on development."',
    fb2Meta: "Youssef A. - Ecommerce Founder, Casablanca",
    fb3Body:
      '"The consultation turned a vague AI idea into a clear lead-qualification workflow for our sales team."',
    fb3Meta: "Elena P. - COO, Rome",
    fb4Body:
      '"We started with OpenClaw setup, then expanded into a document-handling agent for backoffice tasks."',
    fb4Meta: "Hassan M. - Legal Consultant, Dubai",
    fb5Body:
      '"The most useful part was deciding what not to build. It saved us weeks of wasted experimentation."',
    fb5Meta: "Luca G. - CTO, Bologna",
    fb6Body:
      '"Our operations team left with a roadmap for three agents: support, reporting, and internal knowledge search."',
    fb6Meta: "Mariam K. - Operations Lead, Riyadh",
    contactEyebrow: "Contact channels",
    contactTitle:
      "You can contact us for a quick question or book a more structured consulting session.",
    contact1Title: "Teams",
    contact1Body:
      "Best for operational sessions, live installation, and technical reviews with screen sharing.",
    contact2Title: "Telegram",
    contact2Body:
      "Useful for quick follow-ups, sending notes, prompts, and asynchronous coordination during development.",
    contact3Title: "Email",
    contact3Body:
      "Ideal for sending initial briefs, documents, use cases, and more detailed quote requests.",
    contactEmail: "agenticforge@libero.it",
    faqEyebrow: "Quick FAQ",
    faqTitle: "Frequently asked questions before booking.",
    faq1Q: "Do I need technical experience already?",
    faq1A:
      "No. The consulting is designed for non-technical users too. We guide each step in clear language.",
    faq2Q: "Is the session really customized?",
    faq2A:
      "Yes. Every call starts from your real objective and ends with an agent configured around your context.",
    faq3Q: "Can I join with a colleague?",
    faq3A:
      "Yes, two participants are included at no extra cost in the Builder and Ops Pro packages.",
    faq4Q: "Which platform do we use?",
    faq4A:
      "Microsoft Teams with screen sharing. You receive the link and a preparation checklist before the call.",
    bookEyebrow: "Book your consulting session",
    bookTitle:
      "Bring OpenClaw or your next agent workflow into the business with a focused Teams session.",
    bookSub:
      "Fill in your details and receive a proposed time within 24 business hours.",
    bookTeams: "Direct email",
    formTypeLabel: "Consulting type",
    formTypePlaceholder: "Select the session focus",
    formTypeSetup: "Setup and installation",
    formTypeStrategy: "Idea review and agent development",
    formTypeOptimization: "Existing agent optimization",
    formChannelLabel: "Preferred channel",
    formChannelPlaceholder: "Choose how you want to be contacted",
    formChannelTeams: "Teams",
    formChannelTelegram: "Telegram",
    formChannelEmail: "Email",
    formNameLabel: "Full name",
    formNamePh: "John Smith",
    formEmailLabel: "Business email",
    formEmailPh: "name@company.com",
    formRoleLabel: "Role / Industry",
    formRolePh: "SaaS Founder",
    formGoalLabel: "Main objective",
    formGoalPh:
      "I want to create an agent that automates customer onboarding",
    formTelegramLabel: "Telegram handle (optional)",
    formTelegramPh: "@yourhandle",
    formSubmit: "Send consulting request",
    formHelp:
      "The form sends the request directly to agenticforge@libero.it through a static-form backend.",
    footerCopy:
      "Guided OpenClaw setup, troubleshooting, and AI agents for real workflows.",
    title: "AgentForge | OpenClaw Setup And First AI Agent",
    description:
      "Guided OpenClaw installation, model and tool connection, troubleshooting, and a first working AI agent on Windows, macOS, or Linux.",
    formSuccess: "Your request is being sent.",
    formMissing: "Please fill in all required fields correctly.",
  },
  it: {
    navWhy: "Perché ora",
    navOffer: "Cosa ottieni",
    navProcess: "Processo",
    navPricing: "Pacchetti",
    navAdvisory: "Strategy Lab",
    navContact: "Contatti",
    navFaq: "FAQ",
    navCta: "Prenota il setup",
    heroEyebrow: "Setup OpenClaw guidato",
    heroTitle: "Usa OpenClaw senza perdere ore in setup e configurazione.",
    heroSub:
      "Installazione pratica, modelli, tool e primo agente funzionante su Windows, macOS e Linux, in una sessione guidata su Teams.",
    heroCtaPrimary: "Inizia da qui",
    heroCtaSecondary: "Prenota il setup",
    heroBullet1: "Installazione guidata su Windows, macOS e Linux",
    heroBullet2: "Collegamento modelli cloud o locali",
    heroBullet3: "Tool, skill e permessi configurati con criterio",
    heroBullet4:
      "Troubleshooting reale fino al primo workflow utile",
    panelTitle: "Sessione in breve",
    panelStep1Title: "Controllo iniziale",
    panelStep1Body: "Verifica sistema, account e prerequisiti",
    panelStep2Title: "Installa OpenClaw",
    panelStep2Body: "Setup guidato senza blocchi su config e terminale",
    panelStep3Title: "Collega modelli e tool",
    panelStep3Body: "Provider, skill e integrazioni per il tuo caso",
    panelStep4Title: "Lancia il primo agente",
    panelStep4Body: "Test finale, checklist e prossimi passi",
    quickEyebrow: "Da dove si parte",
    quickTitle: "Tre passaggi chiari per arrivare al primo agente senza confusione.",
    quickIntro:
      "Prima installi OpenClaw, poi colleghi modelli e tool, infine lanci un workflow utile.",
    quick1Title: "Installa OpenClaw",
    quick1Body:
      "Prepariamo ambiente, dipendenze e configurazione base in modo pulito, senza blocchi inutili.",
    quick2Title: "Collega modelli e tool",
    quick2Body:
      "Scegliamo provider, API, skill e integrazioni utili per il tuo caso reale, non per una demo generica.",
    quick3Title: "Avvia il primo agente",
    quick3Body:
      "Chiudiamo con un task concreto, test finale e checklist chiara per continuare senza dipendere da noi.",
    workflowEyebrow: "Da zero a operativo in 15 minuti",
    workflowTitle: "Vedi il percorso prima ancora di prenotare.",
    workflowBody:
      "Installi OpenClaw, scegli il modello, colleghi tool e skill, lanci il primo agente. Niente teoria vaga: si parte da un flusso concreto.",
    workflowStep1: "Installa",
    workflowStep1Body: "Setup pulito e prerequisiti pronti",
    workflowStep2: "Scegli",
    workflowStep2Body: "Provider e modello adatti al tuo caso",
    workflowStep3: "Collega",
    workflowStep3Body: "Tool, skill e permessi con criterio",
    workflowStep4: "Lancia",
    workflowStep4Body: "Primo agente testato su un task utile",
    guidesEyebrow: "Guide operative",
    guidesTitle:
      "Le prime pagine utili da leggere se vuoi partire con OpenClaw in modo pratico.",
    guidesBody:
      "Queste guide nascono per intercettare dubbi reali: installazione, sistema operativo, agenti e primi use case concreti.",
    guide1Title: "Installare OpenClaw",
    guide1Body:
      "Guida madre con comandi ufficiali, onboarding iniziale e link rapidi per tutti i sistemi.",
    guide2Title: "OpenClaw su Windows",
    guide2Body:
      "Percorso consigliato con WSL2, alternativa PowerShell e controlli utili dopo il setup.",
    guide3Title: "OpenClaw su macOS",
    guide3Body:
      "Script ufficiale, onboarding e primi passi per arrivare velocemente a una base pulita.",
    guide4Title: "OpenClaw su Linux",
    guide4Body:
      "Installazione ufficiale, verifica dashboard e passaggio rapido verso tool e agenti.",
    guide5Title: "Installare agenti",
    guide5Body:
      "Come passare da OpenClaw installato al primo agente utile con plugin e configurazione minima.",
    guide6Title: "Agenti pronti",
    guide6Body:
      "Esempi concreti di agenti per supporto, ricerca, reporting e workflow operativi reali.",
    stat1: "Durata consulenza in base al pacchetto",
    stat2: "Sessione personalizzata su Teams",
    stat3: "Finestra massima per follow-up tecnico",
    stat4: "Script base e prompt pack inclusi",
    aboutEyebrow: "Chi siamo",
    aboutTitle:
      "Una consulenza indipendente costruita su esperienza internazionale e risultati concreti, non su hype generico sull'AI.",
    aboutBody1:
      "Sono un consulente indipendente con esperienza internazionale tra prodotti digitali, operations e delivery guidata dall'AI. Negli anni ho contribuito al lancio di piu progetti di successo in mercati diversi, unendo esecuzione tecnica e pragmatismo di business.",
    aboutBody2:
      "Dopo un lungo periodo passato a lavorare dentro regole, priorita e limiti imposti da altri, ho deciso di creare la mia attivita: una consulenza focalizzata per aiutare i clienti ad adottare OpenClaw e workflow agentici in modo piu rapido, sicuro e davvero utile sul piano operativo.",
    aboutPanelTitle: "Cosa significa per i clienti",
    aboutPoint1: "Guida senior diretta, non supporto generico",
    aboutPoint2: "Visione internazionale su prodotto ed esecuzione",
    aboutPoint3: "Opinioni chiare su cosa costruire, migliorare o evitare",
    aboutPoint4: "Un percorso pratico dall'idea all'agente funzionante",
    whyEyebrow: "Perché agire adesso",
    whyTitle:
      "Il vero problema non e sapere che OpenClaw esiste, ma farlo funzionare bene al primo colpo.",
    whyBody:
      "Il punto non e scoprire che OpenClaw esiste. Il punto e installarlo, scegliere il modello giusto, collegare i tool utili e capire cosa fare quando qualcosa si rompe. Qui riduciamo attrito tecnico e decisionale, cosi passi da zero al primo agente funzionante.",
    riskTitle: "L'attrito che ti togli subito",
    risk1: "Setup che si blocca tra terminale, dipendenze e permessi",
    risk2: "Dubbi su provider, API key e modello locale o cloud",
    risk3: "Tool e skill aggiunti senza criterio o con accessi eccessivi",
    risk4: "Agenti che partono male o non fanno task davvero utili",
    offerEyebrow: "Cosa ottieni nella consulenza",
    offerTitle: "Riduciamo l'attrito nei 6 punti che bloccano quasi tutti all'inizio.",
    feat1Title: "Installazione senza impasse",
    feat1Body:
      "Prepariamo ambiente, dipendenze e configurazione iniziale in modo ordinato, cosi non perdi tempo su errori banali ma bloccanti.",
    feat2Title: "Modello e provider giusti",
    feat2Body:
      "Capisci quale provider collegare, quando usare cloud o locale e quale configurazione ha senso per il tuo budget e il tuo caso.",
    feat3Title: "Tool e skill pronti",
    feat3Body:
      "Colleghiamo solo gli strumenti utili davvero, con skill e integrazioni che servono al primo workflow invece di complicare il setup.",
    feat4Title: "Permessi e sicurezza minima",
    feat4Body:
      "Impostiamo accessi, segmentazione e regole base per evitare errori pericolosi gia nelle prime prove operative.",
    feat5Title: "Primo agente utile",
    feat5Body:
      "Non ti lasciamo con un setup teorico: definiamo un agente con task chiaro, prompt base e verifica finale sul lavoro reale.",
    feat6Title: "Troubleshooting e prossimi passi",
    feat6Body:
      "Se qualcosa si rompe, sistemiamo il punto critico e chiudi la sessione con checklist e direzione chiara per andare avanti.",
    agentsEyebrow: "Cosa diventa possibile dopo il setup",
    agentsTitle:
      "Quando OpenClaw e configurato bene, gli agenti smettono di essere una demo e iniziano a fare lavoro utile.",
    agent1Title: "Customer Support",
    agent1Body:
      "Rispondono alle domande frequenti, fanno triage delle richieste, raccolgono contesto e passano a un umano solo i casi che lo richiedono.",
    agent2Title: "Lead Qualification",
    agent2Body:
      "Gestiscono il primo contatto, fanno domande di qualificazione, preparano riassunti e passano opportunita pulite al sales.",
    agent3Title: "Research E Knowledge",
    agent3Body:
      "Cercano nei documenti interni, riassumono fonti, confrontano opzioni e preparano note operative rapide per il team.",
    agent4Title: "Reporting E Ops",
    agent4Body:
      "Monitorano flussi ripetitivi, preparano aggiornamenti, organizzano dati e supportano task di esecuzione ricorrenti.",
    processEyebrow: "Processo consulenza",
    processTitle: "Ti portiamo da zero al primo agente funzionante in 4 fasi.",
    step1Title: "Verifica punto di partenza",
    step1Body:
      "Capiamo dispositivi, livello tecnico, obiettivo e vincoli, cosi scegliamo subito un setup realistico.",
    step2Title: "Installazione e configurazione",
    step2Body:
      "Facciamo setup live, risolviamo errori e prepariamo l'ambiente per lavorare senza attriti inutili.",
    step3Title: "Colleghiamo modelli, tool e skill",
    step3Body:
      "Scegliamo provider, permessi e integrazioni utili per costruire un primo workflow che abbia davvero senso.",
    step4Title: "Test finale e troubleshooting",
    step4Body:
      "Validiamo il primo agente, correggiamo i blocchi rimasti e chiudi con checklist e prossimi passi concreti.",
    pricingEyebrow: "Pacchetti consulenza",
    pricingTitle: "Scegli se ti serve un setup rapido o una review strategica sugli agenti.",
    plan1Price: "EUR25",
    plan1Name: "Kickstart",
    plan1Time: "30 minuti",
    plan1Feat1: "Setup base OpenClaw o agente",
    plan1Feat2: "Pre-check sicurezza minimo",
    plan1Feat3: "1 mini-template agente",
    planBtn: "Prenota ora",
    planFeatured: "Più scelto",
    plan2Price: "Da concordare",
    plan2Name: "Strategy Session",
    plan2Time: "Scope da concordare",
    plan2Feat1: "Review use-case + roadmap agenti",
    plan2Feat2: "Strategia canali e workflow",
    plan2Feat3: "Priorita chiare su cosa costruire dopo",
    plan3Price: "Da concordare",
    plan3Name: "Advisory Sprint",
    plan3Time: "Ingaggio personalizzato",
    plan3Feat1: "Analisi approfondita di un agente o processo esistente",
    plan3Feat2: "Rifinitura di prompt, flussi e responsabilita",
    plan3Feat3: "Piano concreto di miglioramento e rollout",
    advisoryEyebrow: "Consulenza strategica",
    advisoryTitle:
      "Non solo setup: la consulenza strategica e pensata anche per agenti, use case e decisioni di miglioramento.",
    advisoryBody:
      "Se hai gia OpenClaw attivo, oppure stai solo valutando come usare gli agenti nel tuo business, la call diventa una review concreta di flussi, prompt, canali, automazioni, ruoli e rischi. L'obiettivo e decidere cosa costruire e in che ordine.",
    adv1Title: "Idea Review",
    adv1Body:
      "Analizziamo la tua idea di agente e capiamo se ha valore operativo, dove si rompe e quali dati servono davvero.",
    adv2Title: "Agent Improvement",
    adv2Body:
      "Rivediamo agenti gia esistenti per aumentare affidabilita, precisione, costo/beneficio e capacita di esecuzione.",
    adv3Title: "Channel Strategy",
    adv3Body:
      "Definiamo dove far vivere l'agente: Telegram, web dashboard, email, backoffice o workflow interni.",
    testEyebrow: "User stories esempio",
    testTitle: "Esempi inventati ma realistici di risultati che i clienti possono cercare.",
    testDisclaimer:
      "Nota: questi feedback sono esempi inventati per presentazione commerciale.",
    fb1Body:
      '"Un agente Telegram per il supporto ha tagliato di meta le risposte ripetitive già nella prima settimana."',
    fb1Meta: "Sara N. - Project Manager, Milano",
    fb2Body:
      '"Abbiamo usato la sessione strategica per validare un agente di ricerca interno prima di spendere sullo sviluppo."',
    fb2Meta: "Youssef A. - Founder e-commerce, Casablanca",
    fb3Body:
      '"La consulenza ha trasformato un\'idea vaga in un workflow chiaro di lead qualification per il team sales."',
    fb3Meta: "Elena P. - COO, Roma",
    fb4Body:
      '"Siamo partiti dal setup OpenClaw e poi abbiamo esteso il progetto a un agente documentale per il backoffice."',
    fb4Meta: "Hassan M. - Consulente legale, Dubai",
    fb5Body:
      '"La parte piu utile e stata capire cosa non costruire. Ci ha fatto risparmiare settimane di test inutili."',
    fb5Meta: "Luca G. - CTO, Bologna",
    fb6Body:
      '"Il team operations e uscito con una roadmap per tre agenti: supporto, reporting e ricerca interna della conoscenza."',
    fb6Meta: "Mariam K. - Operations Lead, Riyadh",
    contactEyebrow: "Canali di contatto",
    contactTitle:
      "Puoi contattarci per una domanda veloce o prenotare una consulenza piu strutturata.",
    contact1Title: "Teams",
    contact1Body:
      "Canale ideale per sessioni operative, installazione live e review tecniche condividendo lo schermo.",
    contact2Title: "Telegram",
    contact2Body:
      "Utile per follow-up rapidi, invio note, prompt e coordinamento asincrono durante lo sviluppo.",
    contact3Title: "Email",
    contact3Body:
      "Perfetta per inviare briefing iniziali, documenti, use case e richieste di preventivo piu dettagliate.",
    contactEmail: "agenticforge@libero.it",
    faqEyebrow: "FAQ rapide",
    faqTitle: "Domande frequenti prima di prenotare.",
    faq1Q: "Serve già esperienza tecnica?",
    faq1A:
      "No. La consulenza è progettata anche per utenti non tecnici: guidiamo ogni passaggio in linguaggio semplice.",
    faq2Q: "La sessione è davvero personalizzata?",
    faq2A:
      "Sì. Ogni call parte dal tuo obiettivo reale e termina con un agente configurato sul tuo contesto.",
    faq3Q: "Posso farla in team con un collega?",
    faq3A:
      "Sì, puoi partecipare in due senza costi aggiuntivi per i pacchetti Builder e Ops Pro.",
    faq4Q: "Che piattaforma usiamo?",
    faq4A:
      "Microsoft Teams con condivisione schermo. Ricevi link e checklist preparatoria prima della call.",
    bookEyebrow: "Prenota la consulenza",
    bookTitle:
      "Porta OpenClaw o il tuo prossimo workflow agentico nel business con una sessione mirata su Teams.",
    bookSub: "Compila i dati e ricevi proposta oraria entro 24 ore lavorative.",
    bookTeams: "Email diretta",
    formTypeLabel: "Tipo di consulenza",
    formTypePlaceholder: "Seleziona il focus della sessione",
    formTypeSetup: "Setup e installazione",
    formTypeStrategy: "Review idee e sviluppo agenti",
    formTypeOptimization: "Ottimizzazione agente esistente",
    formChannelLabel: "Canale preferito",
    formChannelPlaceholder: "Scegli come vuoi essere ricontattato",
    formChannelTeams: "Teams",
    formChannelTelegram: "Telegram",
    formChannelEmail: "Email",
    formNameLabel: "Nome e cognome",
    formNamePh: "Mario Rossi",
    formEmailLabel: "Email professionale",
    formEmailPh: "nome@azienda.com",
    formRoleLabel: "Ruolo / Settore",
    formRolePh: "Founder SaaS",
    formGoalLabel: "Obiettivo principale",
    formGoalPh: "Voglio creare un agente che automatizzi onboarding clienti",
    formTelegramLabel: "Handle Telegram (opzionale)",
    formTelegramPh: "@tuohandle",
    formSubmit: "Invia richiesta consulenza",
    formHelp:
      "Il form invia davvero la richiesta a agenticforge@libero.it tramite backend esterno per siti statici.",
    footerCopy:
      "Setup OpenClaw guidato, troubleshooting e agenti AI per workflow reali.",
    title: "AgentForge | Setup OpenClaw E Primo Agente AI",
    description:
      "Installazione guidata di OpenClaw, collegamento di modelli e tool, troubleshooting e primo agente funzionante su Windows, macOS o Linux.",
    formSuccess: "La richiesta sta venendo inviata.",
    formMissing: "Compila correttamente tutti i campi obbligatori.",
  },
  ar: {
    navWhy: "لماذا الآن",
    navOffer: "ماذا ستحصل عليه",
    navProcess: "الخطوات",
    navPricing: "الباقات",
    navAdvisory: "مختبر الاستراتيجية",
    navContact: "التواصل",
    navFaq: "الأسئلة الشائعة",
    navCta: "احجز الإعداد",
    heroEyebrow: "إعداد OpenClaw بشكل موجّه",
    heroTitle: "استخدم OpenClaw من دون إضاعة ساعات في الإعداد والتهيئة.",
    heroSub:
      "تثبيت عملي ونماذج وأدوات وأول وكيل يعمل على Windows و macOS و Linux ضمن جلسة موجّهة عبر Teams.",
    heroCtaPrimary: "ابدأ من هنا",
    heroCtaSecondary: "احجز الإعداد",
    heroBullet1: "تثبيت موجّه على Windows و macOS و Linux",
    heroBullet2: "ربط النماذج المحلية أو السحابية",
    heroBullet3: "إعداد الأدوات والمهارات والصلاحيات بشكل صحيح",
    heroBullet4: "حل عملي للمشكلات حتى يعمل أول تدفّق مفيد",
    panelTitle: "ملخص الجلسة",
    panelStep1Title: "فحص أولي",
    panelStep1Body: "التحقق من النظام والحسابات والمتطلبات",
    panelStep2Title: "تثبيت OpenClaw",
    panelStep2Body: "إعداد موجّه من دون التعطل في الإعداد أو الطرفية",
    panelStep3Title: "ربط النماذج والأدوات",
    panelStep3Body: "المزوّدون والمهارات والتكاملات حسب حالتك",
    panelStep4Title: "إطلاق أول وكيل",
    panelStep4Body: "اختبار نهائي وقائمة تحقق وخطوات تالية",
    quickEyebrow: "من أين تبدأ",
    quickTitle: "ثلاث خطوات واضحة للوصول إلى أول وكيل من دون تشويش.",
    quickIntro:
      "تثبّت OpenClaw أولًا، ثم تربط النماذج والأدوات، ثم تطلق تدفّق عمل مفيد.",
    quick1Title: "ثبّت OpenClaw",
    quick1Body:
      "نجهز البيئة والاعتماديات والتهيئة الأساسية بشكل نظيف ومن دون عوائق غير ضرورية.",
    quick2Title: "اربط النماذج والأدوات",
    quick2Body:
      "نختار المزوّد وواجهات API والمهارات والتكاملات المناسبة لحالتك الحقيقية، لا لعرض عام فقط.",
    quick3Title: "أطلق أول وكيل",
    quick3Body:
      "ننهي بمهمة عملية واختبار نهائي وقائمة تحقق واضحة كي تتابع من دون الاعتماد علينا.",
    workflowEyebrow: "من الصفر إلى التشغيل خلال 15 دقيقة",
    workflowTitle: "شاهد المسار قبل أن تحجز.",
    workflowBody:
      "تثبّت OpenClaw، تختار النموذج، تربط الأدوات والمهارات، ثم تطلق أول وكيل. لا تنظير مبهم: نبدأ من تدفّق عملي واضح.",
    workflowStep1: "ثبّت",
    workflowStep1Body: "إعداد نظيف ومتطلبات جاهزة",
    workflowStep2: "اختر",
    workflowStep2Body: "المزوّد والنموذج المناسبان لحالتك",
    workflowStep3: "اربط",
    workflowStep3Body: "الأدوات والمهارات والصلاحيات بإعداد مقصود",
    workflowStep4: "أطلق",
    workflowStep4Body: "أول وكيل مختبر على مهمة مفيدة",
    guidesEyebrow: "أدلة عملية",
    guidesTitle:
      "أول الصفحات التي تستحق القراءة إذا أردت البدء مع OpenClaw بطريقة عملية.",
    guidesBody:
      "هذه الأدلة تستهدف أسئلة حقيقية: التثبيت، نظام التشغيل، الوكلاء، وأول حالات الاستخدام العملية.",
    guide1Title: "تثبيت OpenClaw",
    guide1Body:
      "الدليل الرئيسي مع الأوامر الرسمية وخطوات البدء السريع وروابط مباشرة لكل الأنظمة.",
    guide2Title: "OpenClaw على Windows",
    guide2Body:
      "المسار الموصى به عبر WSL2، والبديل عبر PowerShell، والفحوصات المفيدة بعد التثبيت.",
    guide3Title: "OpenClaw على macOS",
    guide3Body:
      "السكريبت الرسمي، وخطوات البدء، وأول خطوات الوصول إلى قاعدة نظيفة بسرعة.",
    guide4Title: "OpenClaw على Linux",
    guide4Body:
      "التثبيت الرسمي، والتحقق عبر لوحة التحكم، والانتقال السريع إلى الأدوات والوكلاء.",
    guide5Title: "تثبيت الوكلاء",
    guide5Body:
      "كيف تنتقل من OpenClaw المثبت إلى أول وكيل مفيد مع الإضافات والتهيئة الأساسية.",
    guide6Title: "وكلاء جاهزون",
    guide6Body:
      "أمثلة عملية للدعم والبحث والتقارير ومسارات العمل التشغيلية الحقيقية.",
    stat1: "مدة الاستشارة حسب الباقة",
    stat2: "جلسة مخصصة عبر Teams",
    stat3: "حد أقصى 48 ساعة للمتابعة التقنية",
    stat4: "مجموعة سكربتات وباقات Prompts مبدئية",
    aboutEyebrow: "من نحن",
    aboutTitle:
      "استشارات مستقلة مبنية على خبرة دولية وتنفيذ حقيقي، لا على ضجة الذكاء الاصطناعي فقط.",
    aboutBody1:
      "أنا مستشار مستقل أملك خبرة دولية في المنتجات الرقمية والعمليات والتنفيذ المدفوع بالذكاء الاصطناعي. على مدار السنوات ساعدت في إطلاق مشاريع ناجحة متعددة لأسواق مختلفة، مع الجمع بين التنفيذ التقني والواقعية التجارية.",
    aboutBody2:
      "بعد فترة طويلة من العمل وفق قواعد وأولويات وحدود وضعها الآخرون، قررت بناء نشاطي الخاص: ممارسة استشارية مركزة تساعد العملاء على تبني OpenClaw وسير العمل القائم على الوكلاء بسرعة أكبر وبشكل أكثر أمانًا وبنتائج تشغيلية فعلية.",
    aboutPanelTitle: "ماذا يعني هذا للعملاء",
    aboutPoint1: "إرشاد مباشر من مستوى خبير بدلًا من دعم عام",
    aboutPoint2: "رؤية دولية في المنتج والتنفيذ",
    aboutPoint3: "آراء واضحة حول ما يجب بناؤه أو تحسينه أو تجنبه",
    aboutPoint4: "مسار عملي من الفكرة إلى وكيل يعمل فعليًا",
    whyEyebrow: "لماذا التحرك الآن",
    whyTitle: "المشكلة الحقيقية ليست معرفة أن OpenClaw موجود، بل جعله يعمل بشكل صحيح من المحاولة الأولى.",
    whyBody:
      "القضية ليست مجرد معرفة أن OpenClaw موجود. القضية هي تثبيته واختيار النموذج المناسب وربط الأدوات الصحيحة ومعرفة ما يجب فعله عندما ينكسر شيء ما. نحن نقلل الاحتكاك التقني واحتكاك القرار حتى تنتقل من الصفر إلى أول وكيل يعمل فعلاً.",
    riskTitle: "الاحتكاك الذي تتخلص منه فورًا",
    risk1: "إعداد يتعطل بين الطرفية والاعتماديات والصلاحيات",
    risk2: "حيرة حول المزوّد ومفاتيح API والنموذج المحلي أو السحابي",
    risk3: "أدوات ومهارات مضافة بلا خطة واضحة أو بصلاحيات مفرطة",
    risk4: "وكلاء يبدأون بشكل سيئ أو لا يصبحون مفيدين للمهام الحقيقية",
    offerEyebrow: "ماذا تتضمن الاستشارة",
    offerTitle: "نقلل الاحتكاك في 6 نقاط تعطل تقريبًا كل من يبدأ.",
    feat1Title: "تثبيت بلا طرق مسدودة",
    feat1Body:
      "نجهز البيئة والاعتماديات والإعداد الأولي بطريقة منظمة حتى لا تضيع وقتك في أخطاء بسيطة لكنها معطلة.",
    feat2Title: "النموذج والمزوّد المناسبان",
    feat2Body:
      "تفهم أي مزوّد تربط، ومتى تستخدم السحابة أو النماذج المحلية، وما الإعداد الأنسب لميزانيتك وحالتك.",
    feat3Title: "الأدوات والمهارات جاهزة",
    feat3Body:
      "نربط فقط الأدوات المهمة فعلاً، مع المهارات والتكاملات التي تخدم أول تدفّق عمل بدلًا من تعقيد الإعداد.",
    feat4Title: "حد أدنى من الأمان والصلاحيات",
    feat4Body:
      "نضبط قواعد الوصول والتقسيم والحماية الأساسية لتجنب الأخطاء الخطرة من أول اختبارات تشغيلية.",
    feat5Title: "أول وكيل مفيد",
    feat5Body:
      "لن نتركك مع إعداد نظري فقط: نحدد وكيلًا بمهمة واضحة وتعليمات أولية واختبارًا واقعيًا.",
    feat6Title: "حل المشكلات والخطوات التالية",
    feat6Body:
      "إذا تعطل شيء ما، نصلح النقطة الحرجة وتنهي الجلسة مع قائمة تحقق واتجاه واضح للمتابعة.",
    agentsEyebrow: "ما الذي يصبح ممكنًا بعد الإعداد",
    agentsTitle:
      "عندما يُضبط OpenClaw بشكل صحيح، تتوقف الوكلاء عن كونها مجرد عرض تجريبي وتبدأ في إنجاز عمل مفيد.",
    agent1Title: "دعم العملاء",
    agent1Body:
      "الرد على الأسئلة الشائعة وفرز الطلبات وجمع السياق وتحويل الحالات التي تحتاج تدخلًا بشريًا فقط.",
    agent2Title: "تأهيل العملاء المحتملين",
    agent2Body:
      "إدارة التواصل الأول وطرح أسئلة التأهيل وإعداد الملخصات وتمرير الفرص النظيفة إلى المبيعات.",
    agent3Title: "البحث والمعرفة",
    agent3Body:
      "البحث في المستندات الداخلية وتلخيص المصادر ومقارنة الخيارات وإعداد ملاحظات تشغيلية سريعة للفريق.",
    agent4Title: "التقارير والعمليات",
    agent4Body:
      "مراقبة التدفقات المتكررة وإعداد التحديثات وتنظيم البيانات ودعم مهام التنفيذ الدورية.",
    processEyebrow: "منهجية الاستشارة",
    processTitle: "ننقلك من الصفر إلى أول وكيل يعمل عبر 4 مراحل.",
    step1Title: "التحقق من نقطة البداية",
    step1Body: "نفهم الأجهزة والمستوى التقني والهدف والقيود حتى نختار إعدادًا واقعيًا من البداية.",
    step2Title: "التثبيت والإعداد",
    step2Body: "ننفذ الإعداد المباشر ونحل الأخطاء ونجهز البيئة للعمل من دون احتكاك غير ضروري.",
    step3Title: "ربط النماذج والأدوات والمهارات",
    step3Body: "نختار المزوّدين والصلاحيات والتكاملات المفيدة لبناء أول تدفّق عمل منطقي.",
    step4Title: "الاختبار النهائي وحل المشكلات",
    step4Body: "نراجع الوكيل الأول ونصلح العوائق المتبقية وننهي بقائمة تحقق وخطوات عملية تالية.",
    pricingEyebrow: "باقات الاستشارة",
    pricingTitle: "اختر بين إعداد سريع أو مراجعة استراتيجية مخصصة للوكلاء.",
    plan1Price: "EUR25",
    plan1Name: "Kickstart",
    plan1Time: "30 دقيقة",
    plan1Feat1: "إعداد أساسي لـ OpenClaw أو لوكيل أولي",
    plan1Feat2: "فحص أمني أولي",
    plan1Feat3: "قالب وكيل مصغّر واحد",
    planBtn: "احجز الآن",
    planFeatured: "الأكثر اختيارًا",
    plan2Price: "يُتفق عليه",
    plan2Name: "Strategy Session",
    plan2Time: "النطاق يُتفق عليه",
    plan2Feat1: "مراجعة حالات الاستخدام + خارطة طريق للوكلاء",
    plan2Feat2: "استراتيجية القنوات وسير العمل",
    plan2Feat3: "تحديد واضح لأولويات البناء التالية",
    plan3Price: "يُتفق عليه",
    plan3Name: "Advisory Sprint",
    plan3Time: "تعاون مخصص",
    plan3Feat1: "مراجعة عميقة لوكيل أو عملية قائمة",
    plan3Feat2: "تحسين التعليمات والتدفقات والمسؤوليات",
    plan3Feat3: "خطة عملية للتحسين والإطلاق",
    advisoryEyebrow: "استشارة استراتيجية",
    advisoryTitle:
      "ليست للتثبيت فقط: الاستشارة الاستراتيجية مخصصة أيضًا للوكلاء وحالات الاستخدام وقرارات التحسين.",
    advisoryBody:
      "إذا كان OpenClaw يعمل لديك بالفعل، أو كنت فقط تدرس كيف تستخدم الوكلاء في عملك، يمكن تحويل الجلسة إلى مراجعة عملية للتدفقات والتعليمات والقنوات والأتمتة والأدوار والمخاطر. الهدف هو تحديد ما يجب بناؤه وبأي ترتيب.",
    adv1Title: "مراجعة الفكرة",
    adv1Body:
      "نحلل فكرة الوكيل الخاصة بك ونحدد قيمتها التشغيلية ونقاط الضعف والبيانات اللازمة فعلاً.",
    adv2Title: "تحسين الوكيل",
    adv2Body:
      "نراجع الوكلاء الحاليين لرفع الاعتمادية والدقة وكفاءة التكلفة والقدرة على التنفيذ.",
    adv3Title: "استراتيجية القنوات",
    adv3Body:
      "نحدد أين يجب أن يعمل الوكيل: Telegram أو لوحة ويب أو البريد أو المكتب الخلفي أو سير العمل الداخلي.",
    testEyebrow: "قصص استخدام نموذجية",
    testTitle: "أمثلة مختلقة لكن واقعية لنتائج قد يبحث عنها العملاء.",
    testDisclaimer: "ملاحظة: هذه الشهادات أمثلة مُختلقة لأغراض العرض التسويقي.",
    fb1Body:
      '"وكيل دعم عبر Telegram خفّض الردود المتكررة إلى النصف خلال الأسبوع الأول."',
    fb1Meta: "Sara N. - مديرة مشاريع، ميلانو",
    fb2Body:
      '"استخدمنا الجلسة الاستراتيجية للتحقق من جدوى وكيل بحث داخلي قبل إنفاق المال على التطوير."',
    fb2Meta: "Youssef A. - مؤسس متجر إلكتروني، الدار البيضاء",
    fb3Body:
      '"حوّلت الاستشارة فكرة عامة إلى سير عمل واضح لتأهيل العملاء المحتملين لفريق المبيعات."',
    fb3Meta: "Elena P. - COO، روما",
    fb4Body:
      '"بدأنا بإعداد OpenClaw ثم وسّعنا المشروع إلى وكيل مستندي لمهام المكتب الخلفي."',
    fb4Meta: "Hassan M. - مستشار قانوني، دبي",
    fb5Body:
      '"أهم فائدة كانت معرفة ما لا ينبغي بناؤه. هذا وفر علينا أسابيع من التجارب غير المفيدة."',
    fb5Meta: "Luca G. - CTO، بولونيا",
    fb6Body:
      '"خرج فريق العمليات بخارطة طريق لثلاثة وكلاء: الدعم والتقارير والبحث الداخلي في المعرفة."',
    fb6Meta: "Mariam K. - قائدة العمليات، الرياض",
    contactEyebrow: "قنوات التواصل",
    contactTitle:
      "يمكنك التواصل لسؤال سريع أو حجز استشارة أكثر تنظيمًا.",
    contact1Title: "Teams",
    contact1Body:
      "الخيار الأنسب للجلسات التنفيذية والتثبيت المباشر والمراجعات التقنية مع مشاركة الشاشة.",
    contact2Title: "Telegram",
    contact2Body:
      "مفيد للمتابعة السريعة وإرسال الملاحظات والـ prompts والتنسيق غير المتزامن أثناء التطوير.",
    contact3Title: "Email",
    contact3Body:
      "مناسب لإرسال الملخصات الأولية والمستندات وحالات الاستخدام وطلبات التسعير التفصيلية.",
    contactEmail: "agenticforge@libero.it",
    faqEyebrow: "أسئلة سريعة",
    faqTitle: "الأسئلة المتكررة قبل الحجز.",
    faq1Q: "هل أحتاج خبرة تقنية مسبقة؟",
    faq1A: "لا. الاستشارة مناسبة أيضًا لغير التقنيين، ونشرح كل خطوة بلغة واضحة.",
    faq2Q: "هل الجلسة مخصصة فعلًا؟",
    faq2A: "نعم. كل جلسة تبدأ من هدفك الحقيقي وتنتهي بوكيل مضبوط على سياقك.",
    faq3Q: "هل يمكن أن أحضر مع زميل؟",
    faq3A:
      "نعم، يمكن الحضور لشخصين دون تكلفة إضافية في باقتي Builder و Ops Pro.",
    faq4Q: "ما المنصة المستخدمة؟",
    faq4A:
      "Microsoft Teams مع مشاركة الشاشة، ونرسل رابط الجلسة وقائمة التحضير مسبقًا.",
    bookEyebrow: "احجز الاستشارة",
    bookTitle: "أدخل OpenClaw أو سير العمل الوكيلي التالي إلى عملك عبر جلسة مركزة على Teams.",
    bookSub: "املأ البيانات وسنرسل لك موعدًا مقترحًا خلال 24 ساعة عمل.",
    bookTeams: "بريد مباشر",
    formTypeLabel: "نوع الاستشارة",
    formTypePlaceholder: "اختر محور الجلسة",
    formTypeSetup: "الإعداد والتثبيت",
    formTypeStrategy: "مراجعة الأفكار وتطوير الوكلاء",
    formTypeOptimization: "تحسين وكيل موجود",
    formChannelLabel: "القناة المفضلة",
    formChannelPlaceholder: "اختر كيف تريد أن نتواصل معك",
    formChannelTeams: "Teams",
    formChannelTelegram: "Telegram",
    formChannelEmail: "Email",
    formNameLabel: "الاسم الكامل",
    formNamePh: "محمد أحمد",
    formEmailLabel: "البريد المهني",
    formEmailPh: "name@company.com",
    formRoleLabel: "الدور / المجال",
    formRolePh: "Founder SaaS",
    formGoalLabel: "الهدف الرئيسي",
    formGoalPh: "أريد وكيلًا يؤتمت استقبال العملاء",
    formTelegramLabel: "معرّف Telegram (اختياري)",
    formTelegramPh: "@yourhandle",
    formSubmit: "إرسال طلب الاستشارة",
    formHelp:
      "يرسل النموذج الطلب مباشرة إلى agenticforge@libero.it عبر خدمة نماذج للمواقع الثابتة.",
    footerCopy:
      "إعداد OpenClaw بشكل موجّه وحل المشكلات ووكلاء ذكاء اصطناعي لمسارات عمل حقيقية.",
    title: "AgentForge | إعداد OpenClaw وأول وكيل ذكاء اصطناعي",
    description:
      "تثبيت موجّه لـ OpenClaw وربط النماذج والأدوات وحل المشكلات والوصول إلى أول وكيل يعمل على Windows أو macOS أو Linux.",
    formSuccess: "يتم الآن إرسال الطلب.",
    formMissing: "يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.",
  },
};

const textNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const langButtons = document.querySelectorAll(".lang-btn");
const form = document.querySelector("#leadForm");
const formMessage = document.querySelector("#formMessage");
const metaDescription = document.querySelector('meta[name="description"]');

function applyLanguage(lang) {
  const pack = translations[lang] || translations.it;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (pack[key]) {
      node.textContent = pack[key];
    }
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (pack[key]) {
      node.setAttribute("placeholder", pack[key]);
    }
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = pack.title;
  if (metaDescription) {
    metaDescription.setAttribute("content", pack.description);
  }

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  if (formMessage) {
    formMessage.textContent = "";
  }

  localStorage.setItem("preferredLang", lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem("preferredLang");
applyLanguage(savedLang && translations[savedLang] ? savedLang : "it");

if (form) {
  form.addEventListener("submit", () => {
    const lang = document.documentElement.lang === "ar"
      ? "ar"
      : document.documentElement.lang === "en"
        ? "en"
        : "it";

    formMessage.textContent = translations[lang].formSuccess;
    formMessage.style.color = "#97d7cb";
  });
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
  observer.observe(item);
});
