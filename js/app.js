(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'));
    const root = document.documentElement;

    if (!prefersReduced) {
        window.addEventListener('load', () => {
            document.body.classList.add('cinematic');
        });
    }

    if (!prefersReduced && revealTargets.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealTargets.forEach((el) => observer.observe(el));
    } else {
        revealTargets.forEach((el) => el.classList.add('is-visible'));
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (!prefersReduced) {
        anchorLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                const targetId = link.getAttribute('href');
                const target = targetId ? document.querySelector(targetId) : null;
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach((link) => {
        const href = link.getAttribute('href');
        if (href && href === currentPath) {
            link.classList.add('active');
        }
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    if (!prefersReduced) {
        let raf = null;
        const handleMove = (event) => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const x = (event.clientX / window.innerWidth) * 100;
                const y = (event.clientY / window.innerHeight) * 100;
                root.style.setProperty('--mx', `${x}%`);
                root.style.setProperty('--my', `${y}%`);
                raf = null;
            });
        };
        window.addEventListener('mousemove', handleMove, { passive: true });
    }

    const projectLinks = document.querySelectorAll('.projets-sommaire a[href^="#"]');
    const projectCards = Array.from(document.querySelectorAll('.projet[id]'));
    const projectsWrap = document.querySelector('.projets');
    if (projectLinks.length && projectCards.length && projectsWrap) {
        const setActiveProject = (hash) => {
            const targetId = hash ? hash.replace('#', '') : '';
            const hasTarget = Boolean(targetId);
            projectsWrap.classList.toggle('is-hidden', !hasTarget);
            projectCards.forEach((card) => {
                card.classList.toggle('is-hidden', !hasTarget || card.id !== targetId);
            });
            projectLinks.forEach((link) => {
                link.classList.toggle('active', hasTarget && link.getAttribute('href') === `#${targetId}`);
            });
        };

        const initialHash = window.location.hash;
        setActiveProject(initialHash);

        projectLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const href = link.getAttribute('href');
                const currentHash = window.location.hash;
                if (!href) return;
                if (href === currentHash) {
                    history.replaceState(null, '', window.location.href.split('#')[0]);
                    setActiveProject('');
                    return;
                }
                history.replaceState(null, '', href);
                setActiveProject(href);
            });
        });

        window.addEventListener('hashchange', () => {
            setActiveProject(window.location.hash);
        });
    }

    const projectImages = document.querySelectorAll('.imgProjet img');
    if (projectImages.length) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = '<button type="button" aria-label="Fermer">Fermer</button><img alt="Apercu du projet">';
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('img');
        const closeButton = lightbox.querySelector('button');

        const closeLightbox = () => {
            lightbox.classList.remove('is-open');
            lightboxImg.removeAttribute('src');
        };

        closeButton.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        });

        projectImages.forEach((img) => {
            img.addEventListener('click', () => {
                const src = img.getAttribute('src');
                const alt = img.getAttribute('alt') || 'Apercu du projet';
                if (src) {
                    lightboxImg.setAttribute('src', src);
                    lightboxImg.setAttribute('alt', alt);
                    lightbox.classList.add('is-open');
                }
            });
        });
    }
})();
