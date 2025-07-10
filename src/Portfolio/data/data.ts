


export const skills = [
    { id: 1, name: "React JS"},{ id: 2, name: "HTML"},{ id: 3, name: "CSS"},
    { id: 4, name: "TailwindCSS"},{ id: 5, name: "Javascript"},{ id: 6, name: "Typescript"},
    { id: 7, name: "Nextjs"},{ id: 8, name: "Git"},{ id: 9, name: "Github"},
    { id: 10, name: "Material UI"},{ id: 11, name: "Chakra UI"},{ id: 12, name: "Shadcn UI"},
    { id: 13, name: "Express JS", }, {id: 14, name: 'MongoDB'}
]

export const experiences = [
    {
      id: 'tab1',
      name: 'Edencloudwave',
      description: 'Front end developer  ',
      time: "Jun 2025 - Present ",
      story: [
        'Developed an AI chatbot that provides real-time financial advice and insights, improving user interaction and support.',
        'Developed a responsive and user-friendly web application for a financial management platform, enhancing user engagement and satisfaction.'
      ]
    },
    {
        id: "tab2",
        name: "Okgbrand ",
        description: "Front end developer  ",
        time: "Jan 2024 - Present ",
        story: [
            "Collaborated with backend developers to ensure seamless API integration, enhancing system efficiency.",
            "Architected and developed a scalable fitness management platform, enhancing gym operations and member engagement",
            "Developed a scalable, responsive fashion landing page to ensure optimal performance and user experience across devices",
            "Design and integrated real-time analytics tools, enabling data driven decision-making for gym owners.",
            "Using nextjs & redux to create an e-commerce platform with filter to edit choices and favorites for wishlist and cart"

        ],
    },
    {
        id: "tab3",
        name: "Dafe Tech Ltd ",
        description: "Front end developer  ",
        time: "February 2023- November- 2023 ",
        story: [
            "Engineered a travel and product website page optimizing responsiveness and performance",
            "Refined UX/UI strategies, ensuring and intuitive and high-performance application experience",
            "Implemented cross-browser compatibility and mobile-first design to enhance user experience on all devices",
            "Conducted end to end testing, reducing post-deployment issues by 30% "
        ],
    },
    {
        id: "tab4",
        name: "NIIT ",
        description: "Software Engineer Intern  ",
        time: "April 2022- October 2022 ",
        story: [
            "Responsive UI development building or adjusting interfaces that adapt smoothly to different screen sizes",
            "Assisted in the migration of a static site to a dynamic React application, improving site scalability and maintainability while learning best practices in component-based architecture  ",
        ],
    },

]

import SQgym from "../imgs/SQgym.png"
import Commerce from "../imgs/commerce.png"
import DataStrategist from "../imgs/dataStrategist.png"
import AI from '../imgs/AIchatbot.png'
import { describe } from "node:test"

export const works = [
    {
        id: 1,
        image: AI,
        implementations: 'A Fevai with an AI chatbot designed to help users chat about their finances in real time.The AI processes the message and generates a financial answer, tip, or suggestion.',
        links: 'https://github.com/edwardogheneochuko/eden-tech.git'
    },
    {
        id: 2, 
        image: DataStrategist,
        implementation: 'An AI-powered web application that delivers real-time marketing insights and intelligence using user-provided data. Built with React and Tailwind CSS for a responsive and clean frontend, and Express.js for backend API routes with user authentication.',
        links: 'https://github.com/edwardogheneochuko/AI-DataStrategist.git'

    },
    {
        id: 3,
        image: SQgym,
        implementation: "Using Typescript providing scalable fitness management platform, enhancing gym operations and member engagement",
        links: 'https://github.com/edwardogheneochuko/SqGym-fitness.git'
    },
    {
        id: 4,
        image: Commerce,
        implementation: "Using nextjs & zustand to create an e-commerce platform with filter to edit choices and favorites for wishlist and cart",
        links: 'https://github.com/edwardogheneochuko/Ecommerce-nextjs.git'

    }
]