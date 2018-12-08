
// DATE FORMAT: day-month-year

const announcements = [
    {
        date: '01-12-2018',
        image: '',
        'en': {
            title: 'New Workshop Added',
            description: 'We have just added a workshop to help high school students reduce anxiety by learning more effective study strategies.',
            url: '/en/workshops/study-strategies-to-reduce-anxiety'
        },
        'fr': {
            title: 'Nouvel Atelier offert',
            description: 'Un nouvel atelier destiné au élèves du secondaire souffrnat d\'anxiété. Ils apprendront des stratégies d\'apprentissages. Offert en anglais seulement.',
            url: '/fr/ateliers/strategies-dapprentissage-pour-anxiete'
        }
    },
    {
        date: '05-06-2018',
        image: 'nancy-honigman.jpg',
        'en': {
            title: 'School Counselor & Coach, Nancy Honigman joins our team.',
            description: 'Where our tutors cover our students academic needs, Nancy works with our students and their families on issues that are socially, emotionally or behaviourally based. In particular, Nancy has been helping young people experiencing anxiety, to find effective strategies in order to overcome their challenge. As well, Nancy traches effective Study Strategies to students both on a one-to-one basis or through workshop format.',
        },
        'fr': {
            title: 'School Counselor & Coach, Nancy Honigman joins our team.',
            description: 'Where our tutors cover our students academic needs, Nancy works with our students and their families on issues that are socially, emotionally or behaviourally based. In particular, Nancy has been helping young people experiencing anxiety, to find effective strategies in order to overcome their challenge. As well, Nancy traches effective Study Strategies to students both on a one-to-one basis or through workshop format.',
        }
    },
    {
        date: '01-05-2018',
        image: '',
        'en': {
            title: 'Start now to prepare for June Exams',
            description: 'Our experienced tutors are ready to help. Science and technology, as well as history (final exam will be a prototype) and Math.',
            imageDescription: '',
            url: '/en/workshops'   
        },
        'fr': {
            title: 'Commencer dès maintenant votre préparation des examens de fin d\'année',
            description: 'Nos enseignants d\'expérience sont là pour vous aider. Science et technologie, ainsi que histoire et mathématiques.',
            imageDescription: '',
            url: '/fr/ateliers' 
        }
    },
];

// NOT VISIBLE ON THE WEBSITE
const archive = [
    {
        date: '22-08-2018',
        image: '',
        'en': {
            title: 'New French Workshop Added',
            description: 'Due to popular demand, we have added a French version of the High School Entrance Exam that will be taught by Michèle Moinet Shannon, on September 23.',
            url: '/fr/ateliers/preparation-examen-entre-au-secondaire'
        },
        'fr': {
            title: 'Nouvel Atelier offert',
            description: 'À la demande générale, notre atelier préparatoire au examens d\'admissions au secondaire est maintenant offert en français. Cet atelier sera donner par Michèle Moinet Shannon le 23 septembre.',
            url: '/fr/ateliers/preparation-examen-entre-au-secondaire'
        }
    },
    {
        date: '23-06-2018',
        'en': {
            title: 'Hot Summer Deal',
            description: '10 Lessons for $550! Call 514-697-4133 for more information.',
        },
        'fr': {
            title: 'Rabais cool de l\'été',
            description: '10 lessons pour seulement $550! Appelez-nous pour les détails.',
        }
    },
]

export default announcements;