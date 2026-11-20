(() => {
  const T = {"title": {"fr": "Luca Da Silva · DevSecOps", "en": "Luca Da Silva · DevSecOps", "pt": "Luca Da Silva · DevSecOps"}, "desc": {"fr": "Luca Da Silva, alternant ingénieur DevSecOps et élève ingénieur EFREI (Réseaux et Sécurité).", "en": "Luca Da Silva, DevSecOps engineer apprentice and EFREI engineering student (Networks and Security).", "pt": "Luca Da Silva, aprendiz de engenheiro DevSecOps e aluno de engenharia na EFREI (Redes e Segurança)."}, "n_exp": {"fr": "Expérience", "en": "Experience", "pt": "Experiência"}, "n_proj": {"fr": "Projets", "en": "Projects", "pt": "Projetos"}, "n_skills": {"fr": "Compétences", "en": "Skills", "pt": "Competências"}, "n_edu": {"fr": "Formation", "en": "Education", "pt": "Formação"}, "n_pass": {"fr": "Passions", "en": "Interests", "pt": "Paixões"}, "n_contact": {"fr": "Contact", "en": "Contact", "pt": "Contacto"}, "eyebrow": {"fr": "Alternant ingénieur DevSecOps", "en": "DevSecOps engineer apprentice", "pt": "Aprendiz de engenheiro DevSecOps"}, "lead": {"fr": "Je construis, automatise et sécurise des infrastructures. Élève ingénieur à l'EFREI en Réseaux et Sécurité.", "en": "I build, automate and secure infrastructure. Engineering student at EFREI in Networks and Security.", "pt": "Construo, automatizo e protejo infraestruturas. Aluno de engenharia na EFREI em Redes e Segurança."}, "b1": {"fr": "Découvrir mon travail", "en": "Discover my work", "pt": "Descobrir o meu trabalho"}, "b2": {"fr": "Me contacter ›", "en": "Get in touch ›", "pt": "Contactar-me ›"}, "s1": {"fr": "mois d'alternance", "en": "months of apprenticeship", "pt": "meses de alternância"}, "s2": {"fr": "ans de guitare", "en": "years of guitar", "pt": "anos de guitarra"}, "s3": {"fr": "score TOEIC / 990", "en": "TOEIC score / 990", "pt": "pontuação TOEIC / 990"}, "s4": {"fr": "langues parlées", "en": "languages spoken", "pt": "línguas faladas"}, "h_exp": {"fr": "Expérience.", "en": "Experience.", "pt": "Experiência."}, "h_exp_s": {"fr": "Du terrain, en conditions réelles.", "en": "Hands-on, in real conditions.", "pt": "Em campo, em condições reais."}, "e1_time": {"fr": "Depuis septembre 2026 · Alternance", "en": "Since September 2026 · Apprenticeship", "pt": "Desde setembro de 2026 · Alternância"}, "e1_t": {"fr": "Ingénieur DevSecOps", "en": "DevSecOps Engineer", "pt": "Engenheiro DevSecOps"}, "e1_p": {"fr": "Pipelines CI/CD GitLab, conteneurs Docker, supervision des services et suivi des vulnérabilités sur des systèmes Linux.", "en": "GitLab CI/CD pipelines, Docker containers, service monitoring and vulnerability tracking on Linux systems.", "pt": "Pipelines CI/CD GitLab, contentores Docker, monitorização de serviços e acompanhamento de vulnerabilidades em sistemas Linux."}, "e2_time": {"fr": "Mars – mai 2026 · Stage", "en": "March – May 2026 · Internship", "pt": "Março – maio de 2026 · Estágio"}, "e2_t": {"fr": "Chatbot GLPI · Mairie de Fontenay-aux-Roses", "en": "GLPI chatbot · Fontenay-aux-Roses City Hall", "pt": "Chatbot GLPI · Câmara de Fontenay-aux-Roses"}, "e2_p": {"fr": "Chatbot JavaScript intégré à GLPI : création automatique de tickets et prise en charge d'environ 10 % des demandes récurrentes, avec une base de connaissances évolutive déployée en conditions réelles.", "en": "JavaScript chatbot integrated into GLPI: automatic ticket creation and handling of about 10% of recurring requests, with an expandable knowledge base deployed in real conditions.", "pt": "Chatbot JavaScript integrado no GLPI: criação automática de tickets e resolução de cerca de 10 % dos pedidos recorrentes, com uma base de conhecimento evolutiva em produção."}, "e3_time": {"fr": "Avril – juin 2025 · Stage", "en": "April – June 2025 · Internship", "pt": "Abril – junho de 2025 · Estágio"}, "e3_t": {"fr": "Gestion de tâches · Mairie de Fontenay-aux-Roses", "en": "Task management · Fontenay-aux-Roses City Hall", "pt": "Gestão de tarefas · Câmara de Fontenay-aux-Roses"}, "e3_p": {"fr": "Outil de type Trello sous Excel (VBA), avec interfaces simples pour utilisateurs non techniques et synchronisation entre services. Adopté par environ 10 services.", "en": "Trello-like tool built in Excel (VBA), with simple interfaces for non-technical users and synchronisation between departments. Adopted by about 10 departments.", "pt": "Ferramenta tipo Trello em Excel (VBA), com interfaces simples para utilizadores não técnicos e sincronização entre serviços. Adotada por cerca de 10 serviços."}, "tag_sec": {"fr": "Sécurité", "en": "Security", "pt": "Segurança"}, "tag_auto": {"fr": "Automatisation", "en": "Automation", "pt": "Automação"}, "tag_oop": {"fr": "POO", "en": "OOP", "pt": "POO"}, "h_proj": {"fr": "Projets.", "en": "Projects.", "pt": "Projetos."}, "h_proj_s": {"fr": "Ce que j'ai construit.", "en": "What I've built.", "pt": "O que construí."}, "p_hint": {"fr": "Faites glisser, utilisez les flèches ou cliquez sur un projet.", "en": "Swipe, use the arrows or click a project.", "pt": "Deslize, use as setas ou clique num projeto."}, "p_more": {"fr": "Voir le détail ›", "en": "See details ›", "pt": "Ver detalhes ›"}, "p_all": {"fr": "Tout le code sur GitHub ›", "en": "All my code on GitHub ›", "pt": "Todo o código no GitHub ›"}, "p_close": {"fr": "Fermer", "en": "Close", "pt": "Fechar"}, "p_code": {"fr": "Voir le code ›", "en": "View the code ›", "pt": "Ver o código ›"}, "a_prev": {"fr": "Projet précédent", "en": "Previous project", "pt": "Projeto anterior"}, "a_next": {"fr": "Projet suivant", "en": "Next project", "pt": "Projeto seguinte"}, "a_theme": {"fr": "Changer de thème", "en": "Switch theme", "pt": "Mudar de tema"}, "a_menu": {"fr": "Menu", "en": "Menu", "pt": "Menu"}, "pk2": {"fr": "Stage · 2026", "en": "Internship · 2026", "pt": "Estágio · 2026"}, "p1_t": {"fr": "Cluster Raspberry Pi", "en": "Raspberry Pi cluster", "pt": "Cluster Raspberry Pi"}, "p1_s": {"fr": "Plateforme web de calcul distribué sur 5 Raspberry Pi : MPI, sockets TCP, rôles, logs, monitoring et SSH sécurisé.", "en": "Distributed computing web platform on 5 Raspberry Pi: MPI, TCP sockets, roles, logs, monitoring and secured SSH.", "pt": "Plataforma web de cálculo distribuído em 5 Raspberry Pi: MPI, sockets TCP, perfis, logs, monitorização e SSH seguro."}, "p1_d": {"fr": "Une interface web pilote un cluster de 5 Raspberry Pi (un Pi 4 et quatre Pi Zero) pour lancer des calculs distribués ou parallèles, suivre leur avancement et consulter les résultats.", "en": "A web interface drives a cluster of 5 Raspberry Pi (one Pi 4 and four Pi Zero) to launch distributed or parallel computations, follow their progress and view the results.", "pt": "Uma interface web controla um cluster de 5 Raspberry Pi (um Pi 4 e quatro Pi Zero) para lançar cálculos distribuídos ou paralelos, acompanhar o progresso e consultar os resultados."}, "p1_f": {"fr": "Programmes distribués en Python et Java (MPI, sockets TCP)|Quatre profils : visiteur, utilisateur, administrateur web, administrateur système|Mots de passe chiffrés, CAPTCHA et journalisation des actions|Monitoring du cluster et accès SSH sécurisé", "en": "Distributed programs in Python and Java (MPI, TCP sockets)|Four profiles: visitor, user, web admin, system admin|Encrypted passwords, CAPTCHA and action logging|Cluster monitoring and secured SSH access", "pt": "Programas distribuídos em Python e Java (MPI, sockets TCP)|Quatro perfis: visitante, utilizador, administrador web e de sistema|Palavras-passe cifradas, CAPTCHA e registo de ações|Monitorização do cluster e acesso SSH seguro"}, "p2_t": {"fr": "Chatbot GLPI", "en": "GLPI chatbot", "pt": "Chatbot GLPI"}, "p2_s": {"fr": "Automatisation des tickets IT et réponses aux demandes récurrentes grâce à une base de connaissances enrichissable.", "en": "IT ticket automation and answers to recurring requests thanks to an expandable knowledge base.", "pt": "Automação de tickets de TI e respostas a pedidos recorrentes graças a uma base de conhecimento expansível."}, "p2_d": {"fr": "Réalisé en stage à la Mairie de Fontenay-aux-Roses, ce chatbot s'intègre à GLPI pour soulager le support informatique.", "en": "Built during my internship at Fontenay-aux-Roses City Hall, this chatbot plugs into GLPI to relieve the IT support team.", "pt": "Desenvolvido durante o estágio na Câmara de Fontenay-aux-Roses, este chatbot integra-se no GLPI para aliviar o suporte informático."}, "p2_f": {"fr": "Création automatique de tickets|Prise en charge d'environ 10 % des demandes récurrentes|Base de connaissances enrichissable|Déployé en conditions réelles", "en": "Automatic ticket creation|Handles about 10% of recurring requests|Expandable knowledge base|Deployed in real conditions", "pt": "Criação automática de tickets|Resolve cerca de 10 % dos pedidos recorrentes|Base de conhecimento expansível|Em produção, em condições reais"}, "p3_t": {"fr": "Calcub", "en": "Calcub", "pt": "Calcub"}, "p3_s": {"fr": "Plateforme de modules de calcul : probabilités, chiffrement RC4, polynômes, import CSV, rôles et journalisation.", "en": "Calculation platform: probability, RC4 encryption, polynomials, CSV import, roles and logging.", "pt": "Plataforma de módulos de cálculo: probabilidades, cifra RC4, polinómios, importação CSV, perfis e registos."}, "p3_d": {"fr": "Application web hébergée sur un Raspberry Pi (Apache, MySQL) proposant des calculs mathématiques et statistiques, développée avec un cahier des charges précis et versionnée sur GitHub.", "en": "Web application hosted on a Raspberry Pi (Apache, MySQL) offering mathematical and statistical calculations, built from a precise specification and versioned on GitHub.", "pt": "Aplicação web alojada num Raspberry Pi (Apache, MySQL) com cálculos matemáticos e estatísticos, desenvolvida a partir de um caderno de encargos e versionada no GitHub."}, "p3_f": {"fr": "Loi inverse gaussienne, chiffrement RC4, racines réelles et complexes de polynômes|Import et export CSV des utilisateurs par les administrateurs|Connexion avec gestion des rôles et suivi des logs|Interface ergonomique pour visiteurs, utilisateurs et administrateurs", "en": "Inverse Gaussian law, RC4 encryption, real and complex polynomial roots|CSV import and export of users by administrators|Login with role management and log tracking|User-friendly interface for visitors, users and administrators", "pt": "Lei gaussiana inversa, cifra RC4, raízes reais e complexas de polinómios|Importação e exportação CSV de utilizadores pelos administradores|Login com gestão de perfis e registo de logs|Interface ergonómica para visitantes, utilizadores e administradores"}, "p4_t": {"fr": "Jeu en Java", "en": "Java game", "pt": "Jogo em Java"}, "p4_s": {"fr": "Jeu de réflexion avec menu, scénarios, tri par sélection et tri heuristique.", "en": "Puzzle game with menu, scenarios, selection sort and heuristic sort.", "pt": "Jogo de raciocínio com menu, cenários, ordenação por seleção e ordenação heurística."}, "p4_d": {"fr": "Jeu interactif en Java où le joueur choisit son scénario et doit replacer des cristaux dans leurs temples le plus vite possible.", "en": "Interactive Java game where the player picks a scenario and must put crystals back in their temples as fast as possible.", "pt": "Jogo interativo em Java em que o jogador escolhe o cenário e tem de repor cristais nos seus templos o mais depressa possível."}, "p4_f": {"fr": "Menu d'accueil puis interface de jeu|Implémentation du tri par sélection|Implémentation d'un tri heuristique|Conception orientée objet", "en": "Welcome menu then game interface|Selection sort implementation|Heuristic sort implementation|Object-oriented design", "pt": "Menu inicial e interface de jogo|Implementação da ordenação por seleção|Implementação de uma ordenação heurística|Conceção orientada a objetos"}, "p5_t": {"fr": "Oracle et analyse de données", "en": "Oracle and data analysis", "pt": "Oracle e análise de dados"}, "p5_s": {"fr": "Base relationnelle, requêtes SQL complexes et analyse sous Excel avec tableaux croisés dynamiques.", "en": "Relational database, complex SQL queries and Excel analysis with pivot tables.", "pt": "Base de dados relacional, consultas SQL complexas e análise em Excel com tabelas dinâmicas."}, "p5_d": {"fr": "Conception d'une base Oracle SQL selon un modèle relationnel, puis analyse approfondie des données stockées.", "en": "Design of an Oracle SQL database following a relational model, then in-depth analysis of the stored data.", "pt": "Conceção de uma base de dados Oracle SQL segundo um modelo relacional e análise aprofundada dos dados."}, "p5_f": {"fr": "Modèle relationnel structuré|Requêtes SQL complexes|Tableaux croisés dynamiques et formules avancées sous Excel|Graphiques pour vérifier les résultats", "en": "Structured relational model|Complex SQL queries|Pivot tables and advanced Excel formulas|Charts to cross-check results", "pt": "Modelo relacional estruturado|Consultas SQL complexas|Tabelas dinâmicas e fórmulas avançadas em Excel|Gráficos para validar os resultados"}, "h_sk": {"fr": "Compétences.", "en": "Skills.", "pt": "Competências."}, "h_sk_s": {"fr": "Du code à l'infrastructure.", "en": "From code to infrastructure.", "pt": "Do código à infraestrutura."}, "f_all": {"fr": "Tout", "en": "All", "pt": "Tudo"}, "f_ops": {"fr": "DevSecOps", "en": "DevSecOps", "pt": "DevSecOps"}, "f_sys": {"fr": "Systèmes & réseaux", "en": "Systems & networks", "pt": "Sistemas e redes"}, "f_dev": {"fr": "Développement", "en": "Development", "pt": "Desenvolvimento"}, "f_data": {"fr": "Données", "en": "Data", "pt": "Dados"}, "h_edu": {"fr": "Formation.", "en": "Education.", "pt": "Formação."}, "h_edu_s": {"fr": "Un cap : la sécurité des systèmes.", "en": "One goal: systems security.", "pt": "Um objetivo: a segurança dos sistemas."}, "ed1_time": {"fr": "Depuis septembre 2026", "en": "Since September 2026", "pt": "Desde setembro de 2026"}, "ed1_t": {"fr": "EFREI · Cycle ingénieur", "en": "EFREI · Engineering degree", "pt": "EFREI · Ciclo de engenharia"}, "ed1_p": {"fr": "Réseaux et Sécurité, en apprentissage. Unix et scripting, cloud AWS, virtualisation, conteneurs, sécurité des infrastructures.", "en": "Networks and Security, as an apprentice. Unix and scripting, AWS cloud, virtualisation, containers, infrastructure security.", "pt": "Redes e Segurança, em alternância. Unix e scripting, cloud AWS, virtualização, contentores, segurança de infraestruturas."}, "ed2_t": {"fr": "BUT Informatique · IUT de Vélizy", "en": "BUT Computer Science · IUT de Vélizy", "pt": "BUT Informática · IUT de Vélizy"}, "ed2_p": {"fr": "Parcours Réalisation d'applications : web, bases de données, systèmes distribués.", "en": "Application development track: web, databases, distributed systems.", "pt": "Percurso Desenvolvimento de aplicações: web, bases de dados, sistemas distribuídos."}, "ed3_t": {"fr": "Baccalauréat général", "en": "French general baccalaureate", "pt": "Ensino secundário (bac geral francês)"}, "ed3_p": {"fr": "Mathématiques, NSI, Sciences de l'Ingénieur.", "en": "Mathematics, Computer Science (NSI), Engineering Sciences.", "pt": "Matemática, Informática (NSI), Ciências da Engenharia."}, "h_pa": {"fr": "Passions.", "en": "Interests.", "pt": "Paixões."}, "h_pa_s": {"fr": "Ce qui me forme aussi.", "en": "What shapes me too.", "pt": "O que também me forma."}, "pa1_t": {"fr": "Guitare · 7 ans", "en": "Guitar · 7 years", "pt": "Guitarra · 7 anos"}, "pa1_p": {"fr": "Discipline et rigueur.", "en": "Discipline and rigour.", "pt": "Disciplina e rigor."}, "pa2_t": {"fr": "Football · 10+ ans", "en": "Football · 10+ years", "pt": "Futebol · 10+ anos"}, "pa2_p": {"fr": "Esprit d'équipe et adaptation.", "en": "Team spirit and adaptability.", "pt": "Espírito de equipa e adaptação."}, "pa3_t": {"fr": "Jeux vidéo", "en": "Video games", "pt": "Videojogos"}, "pa3_p": {"fr": "Décision rapide, logique système.", "en": "Quick decisions, systems thinking.", "pt": "Decisão rápida, lógica de sistemas."}, "pa4_t": {"fr": "Langues", "en": "Languages", "pt": "Línguas"}, "pa4_p": {"fr": "Français (langue maternelle) · Anglais C1 · Portugais C1 · Espagnol B2.", "en": "French (native) · English C1 · Portuguese C1 · Spanish B2.", "pt": "Francês (língua materna) · Inglês C1 · Português C1 · Espanhol B2."}, "c1": {"fr": "Travaillons", "en": "Let's work", "pt": "Vamos trabalhar"}, "c2": {"fr": "ensemble.", "en": "together.", "pt": "juntos."}, "c_p": {"fr": "Un projet, une opportunité, une question ? Écrivez-moi sur LinkedIn.", "en": "A project, an opportunity, a question? Message me on LinkedIn.", "pt": "Um projeto, uma oportunidade, uma pergunta? Escreva-me no LinkedIn."}};
  const $ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const $1 = (s, c = document) => c.querySelector(s);
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  const root = document.documentElement;

  /* ---------- Langue ---------- */
  $('[data-i]').forEach((el) => { el.dataset.fr = el.textContent; });
  let lang = 'fr';
  const tr = (k) => (T[k] ? T[k][lang] : k);
  const applyLang = (l) => {
    lang = l; root.lang = l === 'pt' ? 'pt-PT' : l; store.set('lang', l);
    $('[data-i]').forEach((el) => { el.textContent = T[el.dataset.i][l]; });
    $('[data-ia]').forEach((el) => el.setAttribute('aria-label', tr(el.dataset.ia)));
    $('.lang button').forEach((b) => b.classList.toggle('on', b.dataset.l === l));
    document.title = tr('title');
    $1('meta[name=description]').setAttribute('content', tr('desc'));
    if (!$1('.modal').hidden) fillModal(current());
  };
  $('.lang button').forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.l)));

  /* ---------- Thème ---------- */
  const themeBtn = $1('.theme');
  const effective = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const paintTheme = () => { themeBtn.textContent = effective() === 'dark' ? '☀' : '☾'; };
  themeBtn.addEventListener('click', () => {
    const n = effective() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = n; store.set('theme', n); paintTheme();
  });
  paintTheme();

  /* ---------- Progression, apparition, compteurs ---------- */
  const bar = $1('.progress');
  const onScroll = () => { bar.style.width = (root.scrollTop / (root.scrollHeight - root.clientHeight || 1)) * 100 + '%'; };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const count = (el) => {
    const n = +el.dataset.n; if (calm) { el.textContent = n; return; }
    const t0 = performance.now();
    const step = (t) => { const p = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    $('[data-n]', e.target).forEach(count);
  }), { threshold: .15 });
  $('.r').forEach((el) => io.observe(el));

  /* ---------- Navigation ---------- */
  const nav = $1('.nav nav'), links = $('.nav nav a'), burger = $1('.burger');
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $('main section[id]').forEach((s) => spy.observe(s));
  const closeMenu = () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
  burger.addEventListener('click', () => burger.setAttribute('aria-expanded', nav.classList.toggle('open')));
  links.forEach((a) => a.addEventListener('click', closeMenu));

  /* ---------- Compétences ---------- */
  $('.chips button').forEach((b) => b.addEventListener('click', () => {
    $('.chips button').forEach((x) => x.classList.toggle('on', x === b));
    $('.skills span').forEach((s) => {
      const show = b.dataset.f === 'all' || s.dataset.g === b.dataset.f;
      s.hidden = !show;
      if (show) { s.classList.remove('pop'); void s.offsetWidth; s.classList.add('pop'); }
    });
  }));

  /* ---------- Carrousel de projets ---------- */
  const cards = $('.proj'), dots = $1('.dots'), car = $1('.car');
  let idx = 0;
  const current = () => cards[idx];
  cards.forEach((c, n) => {
    const d = document.createElement('button');
    d.className = 'dot'; d.setAttribute('aria-label', String(n + 1)); d.addEventListener('click', () => go(n)); dots.appendChild(d);
  });
  const layout = () => {
    const narrow = innerWidth < 700, gap = narrow ? 56 : 74;
    cards.forEach((c, n) => {
      const o = n - idx, a = Math.abs(o);
      c.style.transform = `translateX(${o * gap}%) translateZ(${-a * 140}px) rotateY(${-o * (narrow ? 18 : 26)}deg) scale(${a ? .92 : 1})`;
      c.style.opacity = a > 2 ? 0 : a ? .55 : 1;
      c.style.zIndex = 10 - a;
      c.style.pointerEvents = a > 2 ? 'none' : 'auto';
      c.classList.toggle('active', !a);
      c.setAttribute('aria-hidden', a ? 'true' : 'false');
    });
    $('.dot').forEach((d, n) => d.classList.toggle('on', n === idx));
  };
  const go = (n) => { idx = (n + cards.length) % cards.length; layout(); };
  $1('.prev').addEventListener('click', () => go(idx - 1));
  $1('.next').addEventListener('click', () => go(idx + 1));
  $1('.carousel').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(idx - 1);
    if (e.key === 'ArrowRight') go(idx + 1);
    if (e.key === 'Enter' && e.target === e.currentTarget) openModal();
  });
  let sx = null, moved = false;
  car.addEventListener('pointerdown', (e) => { sx = e.clientX; moved = false; });
  addEventListener('pointerup', (e) => {
    if (sx === null) return;
    const dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 45) { moved = true; go(idx + (dx < 0 ? 1 : -1)); }
  });
  cards.forEach((c, n) => c.addEventListener('click', () => {
    if (moved) { moved = false; return; }
    if (n === idx) openModal(); else go(n);
  }));
  addEventListener('resize', layout);
  layout();

  /* ---------- Détail d'un projet ---------- */
  const modal = $1('.modal'), sheet = $1('.sheet', modal);
  let lastFocus = null;
  function fillModal(c) {
    const p = c.dataset.p;
    $1('.k', sheet).textContent = $1('.k', c).textContent;
    $1('h3', sheet).textContent = tr(p + '_t');
    $1('.d', sheet).textContent = tr(p + '_d');
    $1('ul', sheet).innerHTML = '';
    tr(p + '_f').split('|').forEach((t) => { const li = document.createElement('li'); li.textContent = t; $1('ul', sheet).appendChild(li); });
    $1('.tags', sheet).innerHTML = $1('.tags', c).innerHTML;
    const img = $1('img', c), im = $1('img', sheet);
    im.hidden = !img; if (img) im.src = img.getAttribute('src');
    const a = $1('a.btn', sheet);
    a.hidden = !c.dataset.link; if (c.dataset.link) { a.href = c.dataset.link; a.textContent = tr('p_code'); }
  }
  function openModal() {
    lastFocus = document.activeElement; fillModal(current());
    modal.hidden = false; document.body.classList.add('lock');
    requestAnimationFrame(() => modal.classList.add('open')); $1('.x', modal).focus();
  }
  function closeModal() {
    modal.classList.remove('open'); document.body.classList.remove('lock');
    setTimeout(() => { modal.hidden = true; }, calm ? 0 : 300);
    if (lastFocus) lastFocus.focus();
  }
  $1('.x', modal).addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  /* ---------- Inclinaison des cartes ---------- */
  if (!calm && matchMedia('(hover: hover)').matches) {
    $('.tilt').forEach((c) => {
      c.addEventListener('mousemove', (e) => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        c.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
      });
      c.addEventListener('mouseleave', () => { c.style.transform = ''; });
    });
  }

  /* ---------- Langue initiale ---------- */
  const nl = (navigator.language || 'fr').slice(0, 2);
  applyLang(store.get('lang') || (T.title[nl] !== undefined ? nl : 'fr'));
})();
