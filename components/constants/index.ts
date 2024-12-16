
export const NAV_LINKS = [
    { href: "/", key: "welcome", label: "Welcome" , id: 1},
    { href: "/travels", key: "travels", label: "Travels" , id:3 },
    { href: "/education", key: "education", label: "Education", id: 4 },
    { href: "/whoWeAre", key: "whoWeAre", label: "WhoWeAre", id: 5 },
    { href: "/contact", key: "contact", label: "Contact", id: 6 }
]

export const ICONS = [
    { src: "/edu1.png", ref: "/education", label: "Education", alt: "Educational Page", id: 0 },
    { src: "/travel.png", ref: "/travel", label: "Travel", alt: "Travel Page", id: 1 }
]


export const MINI_MENU = {
    menu: [
        { href: "/#ielts", label: " IELTS EXAMS", alt: "IELTS EXAMS", id: 1, content: "ONE" },
        { href: "/#visa", label: "VISA PROCESSING", id: 2, content: "TWO" },
        { href: "/#trainedTeacher", label: "TRAINED TEACHERS", id: 3, content: "THREE" },
        { href: "/#cambridge", label: "CAMBRIDGE CURRICULUM", id: 4, content: "FOUR" },
        { href: "/#scholarship", label: "SCHOLARSHIP", id: 5, content: "FIVE" }
    ],
    content: [
        { icon: "/transfers.png", header: "IELTS", description: "description description description description description description", button: "LEARN MORE", id: 1 },
        { icon: "/diaspora-account-zenith-icons-150x150.png", header: "VISA PROCESSING", description: "description description description description description description", button: "LEARN MORE", id: 2 },
        { icon: "/zenith-community-icon-300x300.png", header: "TRAINED TEACHERS", description: "description description description description description description", button: "LEARN MORE", id: 3 },
        { icon: "/Zenith-Share-Icon_.png", header: "CAMBRIDGE CURRICULUM", description: "description description description description description description", button: "LEARN MORE", id: 4 },
        { icon: "/transfers.png", header: "SCHOLARSHIP", description: `description description description description description description`, button: "LEARN MORE", id: 5 }
    ]
}

export const REVIEW = [
    { img: "/boy_study.jpg", id: 1, button: "Learn More", link: "/travel", name: "Chidimma", profession: "Data analyst", Comment: "To provide access to the worlds informationTo provide access to the worlds To provide access to the world informationTo provide access to the world informationTo provide access to the world information" },
    { img: "/boy_study.jpg", id: 2, button: "Learn More",link: "/travel", name: "Ekulie", profession: "Digital Marketer", Comment: "To provide access To provide access to the worlds informationTo provide access to the world to the world informationTo provide access to the world informationTo provide access to the world information" },
    { img: "/boy_study.jpg", id: 3, button: "Learn More", link: "/travel", name: "Victoria", profession: "Developer", Comment: "To provide access To provide access to the worlds informationTo provide access to the world to the world informationTo provide access to the world informationTo provide access to the world information" },
    { img: "/boy_study.jpg", id: 4, button: "Learn More", link: "/travel", name: "Henry", profession: "Analyst", Comment: "To provide access To provide access to the worlds informationTo provide access to the worlds to the world informationTo provide access to the world informationTo provide access to the world information" },
]

export const EDUCATIONSERVICES = [
    { label: "EDUCATIONAL CONSULTANCY", link: "/travel", description: "Riskout Travels conducts comprehensive risk assessments to identify potential hazards and ", image: "/scholar.jpg", id: 1 },
    { label: "SCHOOL SUPERVISION", link: "/insurance", description: "Riskout Travels assists travelers in selecting the right travel insurance policies to protect them against unforeseen events" ,image: "/CambridgeEnglish.png", id: 2},
    { label: "TRAINED TEACHERS ACADEMY", link: "/safety-guideance", description: "Riskout Travels provides travels with up-to-date safety guidelines and practical advice. They offer ", image: "/Screenshot_20240429-232525.png" },
]

export const TRAVELSERVICES = [
    { label: "VISA PROCESSING", link: "/travels/visaprocessing", description: "We gives you an indication of how long your Visa application may take to process We gives you an indication of how long your Visa application may take to process", image: "/visa.png", id: 1 },
    { label: "IELTS EXAMS", link: "/travels/ielts", description: "IELTS test assesses Listening, Reading, Writing, and Speaking IELTS test assesses Listening, Reading, Writing, and Speaking ", image: "/ielts.png", id: 2},
    { label: "JOB SECURING", link: "/travels/jobSecuring", description: "Get opportunities Abroad for scholarships and Jobs Get opportunities Abroad for scholarships and Jobs ", image: "/jobSecuring.png" },
]
export const TRAVEL_WHYCHOOSEUS = [
    { label: "TRAVEL RISK ASSESSMENT", button: "Learn More", link: "/travel", description: "Riskout Travels conducts comprehensive risk assessments to identify potential hazards and threats associated with travel", image: "/ielts.png", id: 1 },
    { label: "TRAVEL INSURANCE", button: "Learn More", link: "/insurance", description: "Riskout Travels assists travelers in selecting the right travel insurance policies to protect them against unforeseen events like trip cancellations, medical emergencies, or lost luggage. They work with reputable insurance " ,image: "/Screenshot_20240429-224309.png", id: 2},
    { label: "SAFETY GUIDEANCE", button: "Learn More", link: "/safety-guideance", description: "Riskout Travels provides travels with up-to-date safety guidelines and practical advice. They offer recommendations on personal safety local customs and traditions, health precautions, and strategies to ", image: "/Screenshot_20240429-232525.png" },
    { label: "EMERGENCY ASSISTANCE", button: "Learn More", link: "/emergency-assistance", description: "Riskout Travels offers 24/7 emergency assistance to travelers incase of unforeseen situations. Their support team is always available to provide guidance, help with travel document replacements, coordinate ", image: "/PngItem_1176695.png", id: 3 },
    { label: "CRISIS MANAGEMENT", button: "Learn More", link: "/crisis-management", description: "In event of a crisis of emergency, Riskout Travels provides swift and effective crisis Management services. They have protocols in place to handle situations such as natural disasters, political", image: "/PngItem_1041079.png", id: 4 },
    { label: "QUALITY ASSURANCE", button: "Learn More", link: "/quality-assurance", description: "Riskout Travels is a provider of medical physics and health physics services. We are dedicated to maintaining superior image quality, and to assuring radiation safety ", image: "/3d.jpg", id: 5 }    
]

export const EDUCATION_WHYCHOOSEUS = [
    { label: "TRAVEL RISK ASSESSMENT", button: "Learn More", link: "/travel", description: "Riskout Travels conducts comprehensive risk assessments to identify potential hazards and threats associated with travel", image: "/ielts.png", id: 1 },
    { label: "TRAVEL INSURANCE", button: "Learn More", link: "/insurance", description: "Riskout Travels assists travelers in selecting the right travel insurance policies to protect them against unforeseen events like trip cancellations, medical emergencies, or lost luggage. They work with reputable insurance " ,image: "/Screenshot_20240429-224309.png", id: 2},
    { label: "SAFETY GUIDEANCE", button: "Learn More", link: "/safety-guideance", description: "Riskout Travels provides travels with up-to-date safety guidelines and practical advice. They offer recommendations on personal safety local customs and traditions, health precautions, and strategies to ", image: "/Screenshot_20240429-232525.png" },
    { label: "EMERGENCY ASSISTANCE", button: "Learn More", link: "/emergency-assistance", description: "Riskout Travels offers 24/7 emergency assistance to travelers incase of unforeseen situations. Their support team is always available to provide guidance, help with travel document replacements, coordinate ", image: "/PngItem_1176695.png", id: 3 },
    { label: "CRISIS MANAGEMENT", button: "Learn More", link: "/crisis-management", description: "In event of a crisis of emergency, Riskout Travels provides swift and effective crisis Management services. They have protocols in place to handle situations such as natural disasters, political", image: "/PngItem_1041079.png", id: 4 },
    { label: "QUALITY ASSURANCE", button: "Learn More", link: "/quality-assurance", description: "Riskout Travels is a provider of medical physics and health physics services. We are dedicated to maintaining superior image quality, and to assuring radiation safety ", image: "/3d.jpg", id: 5 }    
]

// 

export const ABOUTUS = [
    { title: "To provide access to the world information", id: 1 },
    { title: "To provide access to the world information", id: 2 }
]

export const FOOTER_CONTENT = {
    address: [
        { title: "HEAD OFFICE", id: 1},
        { location: "Port Harcourt", office: "Office F3, Stice Plaza, km 17 Airport Road, Beside Chicken Republic, Rukpokwu, Port Harcourt", id: 2 },
        {location: "Lagos", office: "152 Awolowo way by Allen Bus stop, Ikeja, Lagos State, Nigeria", id:3},
        
    ],
    footerNav: [
        { title: "QUICK LINKS", id: 1 },
        { label: "Welcome", link: "/", id: 2 },
        { label: "Work and Study Abroad", link: "/travels", id: 3 },
        { label: "Scholarships", link: "/education/scholarships", id: 4 },
        { label: "Educational Consulting", link: "/education", id: 5 },
        { label: "Who We Are", link: "/whoWeAre" , id: 6},
        { label: "Contact Us", link: "/contact" , id: 6},
        { label: "IELTS Exams", link: "/travels/ielts" , id: 7},
        { label: "Visa Processing", link: "/travels/visaprocessing" , id: 8},
        { label: "Cambridge Curriculum", link: "/education/cambridgeCurriculum" , id: 9 },
        { label: "Trained Teachers Academy", link: "/education/trainedteachersacademy" , id:10 },
    ],
    opening:[
        {title: "OPENING HOURS", id: 1},
        {icon: "/time", days: "Monday - Friday: 8:00am - 5:00pm", id: 2},
        {icon: "/time", days: "Saturday: 9:00am - 3:00pm", id: 3}
    ]
}

// export const TRAVEL = [
//     { title: "To provide access to the world information", id: 1 },
//     { title: "To provide access to the world information", id: 2 }
// ]

export const EDUCATION = [
    { title: "To provide access to the world information", id: 1 },
    { title: "To provide access to the world information", id: 2 }
]

export const ACCORDION = [
    {id: 0, question: "Question 0", answer: "Answer 0", class: "first"},
    {id: 1, question: "Question 1", answer: "Answer 1"},
    {id: 2, question: "Question 2", answer: "Answer 2"},
    {id: 3, question: "Question 3", answer: "Answer 3"},
    {id: 4, question: "Question 4", answer: "Answer 4"},
    {id: 5, question: "Question 5", answer: "Answer 5", class: "last"},
]

export const COUNTRIES_OPTIONS = [
    {name: "Select Country", id: 0},
    {name: "UK", photo: "/smile.jpg", link: "/UK" , id: 1},
    {name: "USA", photo: "/Screenshot_20240429-224309.png", link: "/USA" , id: 2},
    {name: "Canada", photo: "/PngItem_254346 (1).png", link: "/Canada" , id: 3},
    {name: "Australia", photo: "/3d.jpg", link: "/Australia", id: 4 },
    {name: "New Zealand", photo: "/calendar.png", link: "/NewZealand" , id: 5},
    {name: "Finland", photo: "/Screenshot_20240430-055509.png", link: "/Finland", id: 6 },
    {name: "Austria", photo: "/worldofhouse.png", link: "/Austria" , id: 7},
    {name: "Watar", photo: "/Screenshot_20240430-063123.png", link: "/Watar", id:8 },
    {name: "Owan", photo: "/IELTS_Designed.png", link: "/Owan" , id: 9}
]

export const TRAVELREASONS = [
    {label: "Travel and Tour", details: "We have made it easier for you to request cheque books, transfer funds between your accounts, pay utility bills and lots more. What are you waiting for, download the form and submit at any of our branches nationwide.", button1: "ENROLL", button1Link: "/SignUp&SignIn", button2: "LEARN MORE", button2Link: "/Travel&Tour", button3: "CONTACT US", button3Link: "/contact"},
    {label: "Study Abroad", details: "We have made it easier for you to request cheque books, transfer funds between your accounts, pay utility bills and lots more. What are you waiting for, download the form and submit at any of our branches nationwide.", button1: "ENROLL", button1Link: "/SignUp&SignIn", button2: "LEARN MORE", button2Link: "/Travel&Tour", button3: "CONTACT US",  button3Link: "/contact"}
]