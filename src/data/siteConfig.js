// Set Company name in both languages (for use in multple locations.)
const siteTitle = {
    en: 'The Lansdowne West Tutoring Centre',
    fr: 'Le centre de tutorat Lansdowne Ouest'
};
// Set dynamic date for copyright.
const currentYear = new Date().getFullYear();

module.exports = {
    baseUrl: 'localhost:8000',
	siteTitle: {
		en: siteTitle.en,
		fr: siteTitle.fr
	},
	siteTitleAlt: {
		en: '',
		fr: '',
	},
	siteDescription: { // Website description used for RSS feeds/meta description tag.
		en: 'We are a private non-profit organization whose sole aim is to help your child succeed. We have the experience and know-how to ensure your child’s success.',
		fr: 'Nous sommes un centre à but non-lucratif qui a pour mission d’aider votre enfant à réussir. Nous avons l’expérience et le savoir faire pour assurer la réussite de votre enfant.',
	},
	siteGATrackingID: 'UA-8677366-2',
	siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
	address: {
		street: '203 Boulevard Hymus, suite 204',
		city: 'Pointe-Claire',
		prov: 'Qc',
		postalCode: 'H9R 1E9',
	},
	contactInfo: {
		tel: '514-697-4133',
		fax: '',
	},
	socialIcons: {
		facebookUrl: 'https://www.facebook.com/LansdowneWest',
		twitterUrl: 'https://twitter.com/lansdownewest',
		linkedinUrl: 'https://www.linkedin.com/company/lansdowne-west-tutoring-centre/',
    },
    copyright: {
        en: `Copyright reserved © 1972-${currentYear} ${siteTitle.en}`,
        fr: `Tous droits réservés © 1972-${currentYear} ${siteTitle.fr}`,
    },
    navItems: {
        en: {
            workshops: { label: 'Workshops', url: '/workshops'},
            reading: { label: 'Reading', url: '/reading'},
            about: { label: 'About', url: '/about' },
            contact: { label: 'Contact Us', url: '/contact-us'},
        },
        fr: {
            workshops: { label: 'Ateliers', url: '/ateliers'},
            reading: { label: 'Lecture', url: '/lecture'},
            about: { label: 'À propos', url: '/a-propos' },
            contact: { label: 'Contactez-nous', url: '/contactez-nous'},
        }
    },
    translationPaths: {
        'en': '/fr',
        'fr': '/en',
        '/en/workshops': '/fr/ateliers',
        '/fr/ateliers': '/en/workshops',
        '/en/resources': '/fr/ressources',
        '/fr/ressources': '/en/resources',
        '/en/contact-us': '/fr/contactez-nous',
        '/fr/contactez-nous': '/en/contact-us',
        '/en/about': '/fr/a-propos',
        '/fr/a-propos': '/en/about',
        '/en/reading': '/fr/lecture',
        '/fr/lecture': '/en/reading',
        '/en/workshops/history': '/fr/ateliers/histoire',
        '/fr/ateliers/histoire': '/en/workshops/history',
        '/en/workshops/science': '/fr/ateliers/science',
        '/fr/ateliers/science': '/en/workshops/science',
    }
  };
  