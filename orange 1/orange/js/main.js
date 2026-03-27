/**
 * Delta Team Industry Website - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navContainer = document.querySelector('.nav-container');

  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', () => {
      navContainer.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (navContainer.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Language Dictionary
  const translations = {
    'fr': {
      // Header & Navigation
      'nav_home': 'Accueil',
      'nav_about': 'À Propos',
      'nav_services': 'Services',
      'nav_gallery': 'Galerie',
      'nav_partners': 'Partenaires',
      'nav_contact': 'Contact',
      // Footer
      'footer_desc': 'Spécialistes en construction métallique, fabrication mécanique, maintenance industrielle et structures solaires, offrant des solutions robustes pour l\'industrie.',
      'footer_tagline': 'Votre partenaire de confiance pour tous vos besoins en services énergétiques et industriels au Maroc.',
      'footer_address': '42 avenue des forces auxiliaires, Etage 1, Hay Raja, Casablanca',
      'footer_quick_links': 'Liens Rapides',
      'footer_our_services': 'Nos Services',
      'footer_rights': '© 2026 Delta Team Industry. Tous droits réservés.',
      // Services Items (Repeated globally)
      'sect_services': 'Nos Services',
      'srv_sub_title': 'Des solutions complètes pour tous vos besoins industriels et énergétiques',
      'srv_metal': 'Construction Métallique',
      'srv_mech': 'Fabrication Mécanique',
      'srv_maint': 'Maintenance Mécanique Industrielle',
      'srv_solar': 'Structure pour Kit Solaire',
      'srv_metal_desc': 'Nous fournissons des solutions de structure métallique de haute qualité, conçues pour répondre à des normes industrielles strictes et offrir une longévité incroyable.',
      'srv_mech_desc': 'Production de pièces mécaniques de précision à l\'aide de machines modernes pour répondre aux besoins d\'assemblage et de fabrication complexes.',
      'srv_maint_desc': 'Solutions de maintenance complètes visant à prolonger la durée de vie des machines et à prévenir les temps d\'arrêt opérationnels coûteux.',
      'srv_solar_desc': 'Conception et construction de structures de montage résilientes parfaitement adaptées pour des systèmes d\'énergie solaire efficaces.',
      // Home Page specific
      'hero_metal_desc': 'Des structures métalliques robustes et précises adaptées aux besoins industriels complexes.',
      'hero_mech_desc': 'Des techniques de fabrication de pointe garantissant durabilité et efficacité.',
      'hero_maint_desc': 'Garantissez des opérations fluides grâce à des services de diagnostic et de réparation experts.',
      'hero_solar_desc': 'Cadres durables spécialement conçus pour les installations d\'énergie solaire.',
      'hero_read_more': 'Lire la Suite',
      'home_about_title': 'À Propos de Delta Team Industry',
      'home_about_desc': 'Delta Team Industry est une entreprise dynamique de fabrication et d\'ingénierie apportant des solutions modernes aux défis industriels complexes.',
      // Form Specific
      'form_name': 'Votre Nom',
      'form_email': 'Votre Email',
      'form_phone': 'Votre Numéro de Téléphone',
      'form_subject': 'Sujet',
      'form_message': 'Votre Message',
      'form_submit': 'Envoyer le Message'
    },
    'it': {
      // Header & Navigation
      'nav_home': 'Home',
      'nav_about': 'Chi Siamo',
      'nav_services': 'Servizi',
      'nav_gallery': 'Galleria',
      'nav_partners': 'Partner',
      'nav_contact': 'Contatti',
      // Footer
      'footer_desc': 'Specialisti in carpenteria metallica, produzione meccanica, manutenzione industriale e strutture solari, offrendo soluzioni robuste per l\'industria.',
      'footer_tagline': 'Il tuo partner di fiducia per tutte le tue esigenze di servizi energetici e industriali in Marocco.',
      'footer_address': '42 viale delle forze ausiliarie, Piano 1, Hay Raja, Casablanca',
      'footer_quick_links': 'Link Rapidi',
      'footer_our_services': 'I Nostri Servizi',
      'footer_rights': '© 2026 Delta Team Industry. Tutti i diritti riservati.',
      // Services Items
      'sect_services': 'I Nostri Servizi',
      'srv_sub_title': 'Soluzioni complete per tutte le vostre esigenze industriali ed energetiche',
      'srv_metal': 'Costruzione Metallica',
      'srv_mech': 'Produzione Meccanica',
      'srv_maint': 'Manutenzione Meccanica Industriale',
      'srv_solar': 'Struttura per Kit Solare',
      'srv_metal_desc': 'Forniamo soluzioni di strutture metalliche di alta qualità, progettate per soddisfare severi standard industriali e offrire un\'incredibile longevità.',
      'srv_mech_desc': 'Produzione di parti meccaniche di precisione utilizzando macchine moderne per soddisfare complesse esigenze di assemblaggio e produzione.',
      'srv_maint_desc': 'Soluzioni di manutenzione complete volte a prolungare la vita delle macchine e prevenire costosi tempi di inattività operativa.',
      'srv_solar_desc': 'Progettazione e costruzione di strutture di montaggio resilienti perfettamente adatte per sistemi ad energia solare efficienti.',
      // Home Page specific
      'hero_metal_desc': 'Strutture metalliche robuste e precise adattate a complesse esigenze industriali.',
      'hero_mech_desc': 'Tecniche di produzione all\'avanguardia che garantiscono durata ed efficienza.',
      'hero_maint_desc': 'Garantisci operazioni fluide con servizi esperti di diagnosi e riparazione.',
      'hero_solar_desc': 'Telai resistenti appositamente progettati per installazioni di energia solare.',
      'hero_read_more': 'Scopri di Più',
      'home_about_title': 'Riguardo a Delta Team Industry',
      'home_about_desc': 'Delta Team Industry è un\'azienda dinamica di produzione e ingegneria che porta soluzioni moderne a sfide industriali complesse.',
      // Form Specific
      'form_name': 'Il Tuo Nome',
      'form_email': 'La Tua Email',
      'form_phone': 'Il Tuo Numero di Telefono',
      'form_subject': 'Oggetto',
      'form_message': 'Il Tuo Messaggio',
      'form_submit': 'Invia Messaggio'
    }
  };

  // Language Switcher Logic
  const langBtns = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-lang-key]');

  // Check LocalStorage for saved language, default to 'en'
  let currentLang = localStorage.getItem('dti_lang') || 'fr';

  function applyLanguage(lang) {
    if (!translations[lang]) return;

    // Update active button state
    langBtns.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update text content
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-lang-key');
      if (translations[lang][key]) {
        // If it's an input/textarea placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Save choice
    localStorage.setItem('dti_lang', lang);
    document.documentElement.lang = lang;
  }

  // Initialize Language
  applyLanguage(currentLang);

  // Bind Language Change Events
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.dataset.lang;
      applyLanguage(selectedLang);
    });
  });

});
