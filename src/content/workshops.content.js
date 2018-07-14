const workshops = {
    'en': {
        history: {
            current: false,
            date: 'June 2018',
            title: 'History Workshop',
            description: `The goal of the grade 10 History workshop is to prepare students to write the prototype exam.`,
            goals: [
                'Complete a practice exam guided by an experienced instructor',
                'Focus on how to answer different question-types (describe, infer, explain, multi-step)',
                'Review course content',
                'Based on the new modules'
            ],
            instructor: 'Paraskevi Hadjis',
            langOffered: ['English'],
            grade: 'Grade 10',
            price: '$100',
            schedule: [
                {
                    date: 'Sun. June 3',
                    time: '9am to 12pm',
                    open: false
                }
            ],
            examDate: 'n/a',
            infoLink: '/en/workshops/history'
        },
        science: {
            current: false,
            date: 'June 2018',
            title: 'MELS ST Science Workshop',
            description: `The workshop is designed to cover all material related to the provincial MELS final exam (ST). Several previous MELS final Science exams will be practiced by students to become familiar with exam content.`,
            goals: [
                'Review all course content from the beginning to the end of ST - level course',
                'Ensure that questions and concerns related to course content are addressed',
                'Complete and understand practice exams',
                'Learn study and test-taking strategies'
            ],
            instructor: 'Tony Nicodemo',
            langOffered: ['English'],
            grade: 'Grade 10',
            price: '$175',
            schedule: [
                {
                    date: 'Sat. June 9 and Sun. June 10',
                    time: '9am to 12pm',
                    open: false
                }
            ],
            examDate: 'Thursday, June 14, 2018, 9am TO 12pm',
            infoLink: '/en/workshops/science'
        },
        hsepSpecialEd: {
            current: false,
            date: 'April 2018',
            title: 'High School Exam Preparation: Special Edition',
            description: `This workshop is for grade 5 students writing for special programs for the Lester B. School Board. The workshop will concentrate on logic skills and test writing techniques.`,
            goals: [],
            instructor: 'Karen Kravitz',
            langOffered: ['English'],
            grade: 'Grade 5',
            price: '$150',
            schedule: [
                {
                    date: 'Sat. April 21',
                    time: '9am to 12pm',
                    open: false,
                },
                {
                    date: 'Sat. April 28',
                    time: '9am to 12pm',
                    open: false,
                },
                {
                    date: 'Sat. April 29',
                    time: '9am to 12pm',
                    open: false,   
                }
            ],
            examDate: '',
            infoLink: '/en/workshops/high-school-entrance-exam-prep-spring-edition'
        }
    },
    'fr': {
        history: {
            current: false,
            date: 'Juin 2018',
            title: 'Atelier d\'histoire',
            description: 'Le but de cet atelier est de préparer les élèves à réussir l\'examen prototype du ministère.',
            goals: [
                'passera un modèle d\'examen, encadré(e) par une enseignante chevronnée',
                'apprendra à répondre à divers types de questions, à savoir expliquer, décrire, inférer et résoudre des problèmes à étapes multiples',
                'aura l\'occasion de revoir le contenu du cours (nouveaux modules)',
            ],
            instructor: 'Paraskevi Hadjis',
            langOffered: ['Anglais'],
            grade: 'Secondaire 4',
            price: '$100',
            schedule: [
                {
                    date: 'Dim. 3 juin',
                    time: '9h to 12h',
                    open: false
                }
            ],
            examDate: 'n/a',
            infoLink: '/fr/ateliers/histoire'
        },
        science: {
            current: false,
            date: 'Juin 2018',
            title: 'Atelier Science ST (MELS)',
            description: `Cet atelier couvre tout le matériel du cours de science ST. Plusieurs examens finaux antérieurs seront explorés pour que les élèves deviennent familiers avec le contenu et la structure de l'examen.`,
            goals: [
                'aura l\'occasion de revoir le contenu du cours de Science ST',
                'Toutes questions et préoccupations portant sur le contenu du cours seront abordées',
                'passera un modèle d\'examen, encadré(e) par un enseignant chevronné',
                'apprendra des techniques d\'étude et des stratégies de préparation à l\'examen du ministère'
            ],
            instructor: 'Tony Nicodemo',
            langOffered: ['Anglais'],
            grade: 'Secondaire 4',
            price: '$175',
            schedule: [
                {
                    date: 'sam. 9 juin and dim. 10 juin',
                    time: '9h to 12h',
                    open: false
                }
            ],
            examDate: 'Jeudi, 14 juin, 2018, 9h à 12h',
            infoLink: '/fr/ateliers/science'
        },
        hsepSpecialEd: {
            current: false,
            date: 'April 2018',
            title: 'High School Exam Preparation: Special Edition',
            description: `This workshop is for grade 5 students writing for special programs for the Lester B. School Board. The workshop will concentrate on logic skills and test writing techniques.`,
            goals: [],
            instructor: 'Karen Kravitz',
            langOffered: ['English'],
            grade: 'Grade 5',
            price: '$150',
            schedule: [
                {
                    date: 'Sat. April 21',
                    time: '9am to 12pm',
                    open: false,
                },
                {
                    date: 'Sat. April 28',
                    time: '9am to 12pm',
                    open: false,
                },
                {
                    date: 'Sat. April 29',
                    time: '9am to 12pm',
                    open: false,   
                }
            ],
            examDate: '',
            infoLink: '/fr/ateliers/preparation-examen-entre-au-secondaire-printemps'
        }
    }
}

export default workshops;