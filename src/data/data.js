

const initialBooks = [
    {
        id: 1,
        title: 'Əli və Nino',
        author: 'Qurban Səid',
        img: '/images/Ali_ve_Nino.png',
        price: 10,
        category: 'Roman',
        stock: 10,
        description: 'Azərbaycan ədəbiyyatının ən məşhur əsərlərindən biri',
        isFavorite: false
    },
    {
        id: 2,
        img: '/images/kitabi-dede-qorqud.png',
        title: 'Dədə Qorqud',
        author: 'Xalq dastanı',
        price: 8,
        category: 'Dastan',
        stock: 15,
        description: 'Oğuz türklərinin qəhrəmanlıq dastanı',
        isFavorite: false
    },
    {
        id: 3,
        img: '/images/Riyaziyyat.jpeg',
        title: 'Riyaziyyat',
        author: 'Cahangir Həbiboğlu',
        price: 7,
        category: 'Dərslik',
        stock: 20,
        description: 'Orta məktəb şagirdləri üçün riyaziyyat dərsliyi',
        isFavorite: false
    },
    {
        id: 4,
        img: '/images/Pyhton.jpeg',
        title: 'Python',
        author: 'Əli Rzayev',
        price: 15,
        category: 'IT',
        stock: 8,
        description: 'Başlanğıc səviyyə proqramçılar üçün',
        isFavorite: false
    },
    {
        id: 5,
        img: '/images/medeniyyet.webp',
        title: 'İtmiş Mədəniyyət',
        author: 'Fuad Qasımzadə',
        price: 5,
        category: 'Tarix',
        stock: 12,
        description: 'Qədim Azərbaycan mədəniyyəti haqqında',
        isFavorite: false
    },
    {
        id: 6,
        title: 'İncəsənət Tarixi',
        author: 'Rasim Əfəndi',
        img: '/images/incesenet tarixi.jpg',
        price: 8,
        category: 'Sənət',
        stock: 7,
        description: 'Azərbaycan incəsənətinin təkamül tarixi',
        isFavorite: false
    },
    {
        id: 7,
        title: 'Xəmsə',
        author: 'Nizami Gəncəvi',
        img: '/images/xemse.jpg',
        price: 10,
        category: 'Klassik',
        stock: 5,
        description: 'Nizami Gəncəvinin beş məşhur poeması',
        isFavorite: false
    },
    {
        id: 8,
        title: 'Kimya',
        author: 'Validə Əliyeva',
        img: '/images/Kimya.jpg',
        price: 12,
        category: 'Dərslik',
        stock: 15,
        description: 'Orta məktəb şagirdləri üçün kimya dərsliyi',
        isFavorite: false
    },
    {
        id: 9,
        title: 'Proqramlaşdırma',
        author: 'Rəşad Məmmədov',
        img: '/images/Php Proqramlasdirma.png',
        price: 14,
        category: 'IT',
        stock: 10,
        description: 'HTML, CSS və JavaScript əsasları',
        isFavorite: false
    },
    {
        id: 10,
        title: 'Azərbaycan Tarixi',
        author: 'Ziya Bünyadov',
        img: '/images/AzTarixi.jpg',
        price: 11,
        category: 'Tarix',
        stock: 18,
        description: 'Qədim dövrlərdən müasirliyə qədər',
        isFavorite: false
    },
    {
        id: 11,
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        img: '/images/JS.jpg',
        price: 18,
        category: 'IT',
        stock: 20,
        description: 'JavaScript dilinin əsasları və ən yaxşı tətbiqləri haqqında ətraflı təlimat.',
        isFavorite: false
    },
    {
        id: 12,
        title: 'C++ Programming Language',
        author: 'Bjarne Stroustrup',
        img: '/images/C++.jpg',
        price: 25,
        category: 'IT',
        stock: 15,
        description: 'C++ dilini dərindən öyrənmək və effektiv istifadə etmək üçün mükəmməl resurs.',
        isFavorite: false
    },
    {
        id: 13,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        img: '/images/Clean Code.jpg',
        price: 30,
        category: 'IT',
        stock: 18,
        description: 'Proqram kodunun təmiz, oxunaqlı və səmərəli yazılması üçün təlimatlar.',
        isFavorite: false
    },
    {
        id: 14,
        title: 'Introduction to Algorithms',
        author: 'Algorithms',
        img: '/images/Clean Code.jpg',
        price: 40,
        category: 'IT',
        stock: 8,
        description: 'Alqoritmaların təməl prinsipləri və tətbiqləri haqqında ətraflı təlimat.',
        isFavorite: false
    },
    {
        id: 15,
        title: 'Learning React',
        author: 'Alex Banks & Eve Porcello',
        img: '/images/React.jpg',
        price: 22,
        category: 'IT',
        stock: 12,
        description: 'React.js ilə müasir veb tətbiqləri yaratmaq üçün başlanğıc kitabı.',
        isFavorite: false
    },
    {
        id: 16,
        title: 'Vue.js Up and Running',
        author: 'Callum Macrae',
        img: '/images/vue.jpg',
        price: 18,
        category: 'IT',
        stock: 10,
        description: 'Vue.js ilə modern veb tətbiqləri hazırlamaq üçün təlimat.',
        isFavorite: false
    },
    {
        id: 17,
        title: 'Node.js: The Right Way',
        author: 'Jim R. Wilson',
        img: '/images/Nodejs.jpg',
        price: 1,
        category: 'IT',
        stock: 14,
        description: 'Node.js ilə server tərəfi tətbiqlərini inkişaf etdirmək üçün mükəmməl bir resurs.',
        isFavorite: false
    },
    {
        id: 18,
        title: 'Machine Learning Yearning',
        author: 'Andrew Ng',
        img: '/images/MachineLearning.jpeg',
        price: 27,
        category: 'IT',
        stock: 9,
        description: 'Maşın öyrənməsi metodları və tətbiqləri üzrə mükəmməl bir kitab.',
        isFavorite: false
    },
    {
        id: 19,
        title: 'Data Science from Scratch',
        author: 'Joel Grus',
        img: '/images/DataScience.jpg',
        price: 28,
        category: 'IT',
        stock: 11,
        description: 'Data science-ə giriş və Python ilə verilənlər üzərində iş prinsipləri.',
        isFavorite: false
    },
    {
        id: 20,
        title: 'Deep Learning with Python',
        author: 'François Chollet',
        img: '/images/Deephyton.jpg',
        price: 35,
        category: 'IT',
        stock: 5,
        description: 'Süni intellekt və dərin öyrənmə ilə bağlı ən yaxşı təlimatlar.',
        isFavorite: false
    }
];

export default initialBooks;