import mainPhoto from './Images/IMG_0451.JPG'
import resumePhoto from './Images/resume.png'
import contactPhoto from './Images/contact.png'
import projectsPhoto from './Images/brackets.png'

import balancedProject from './Images/Balanced.png'



export default {
  contacts:[
      {
        icon: 'faLinkedin',
        name: 'LinkedIn'
      },
    ],
  contents:[
    {
      link: 'Wade Cosby',
      image: mainPhoto,
      headline: 'Your next full stack developer',
      title: 'About Me',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus amet soluta harum quibusdam similique! Nam unde recusandae ab magni, molestias tempore necessitatibus aliquam perspiciatis obcaecati animi dolorum placeat fugit quae.'
    },
    {
      link: 'Projects',
      image: projectsPhoto,
      headline: `Check out some of the awesome things I've built`,
      title: 'Projects',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus amet soluta harum quibusdam similique! Nam unde recusandae ab magni, molestias tempore necessitatibus aliquam perspiciatis obcaecati animi dolorum placeat fugit quae.'
    },
    {
      link: 'Resume',
      image: resumePhoto,
      headline: `In case you have some work you need help with and like formal documents`,
      title: 'Qualifications and Skills',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus amet soluta harum quibusdam similique! Nam unde recusandae ab magni, molestias tempore necessitatibus aliquam perspiciatis obcaecati animi dolorum placeat fugit quae.'
    },
    {
      link: 'Contact',
      image: contactPhoto,
      headline: `Give me a ring, DM, text, or whatever your preference`,
      title: 'Ways to Connect',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus amet soluta harum quibusdam similique! Nam unde recusandae ab magni, molestias tempore necessitatibus aliquam perspiciatis obcaecati animi dolorum placeat fugit quae.'
    },
  ],
  projects:[
    {
      name: 'Balanced',
      photo: balancedProject,
      description: 'App for budgeting your life',
      link: 'https://balancedbudget.herokuapp.com/'
    },
    {
      name: 'Balanced',
      photo: balancedProject,
      description: 'App for budgeting your life',
      link: 'https://balancedbudget.herokuapp.com/'
    },
    {
      name: 'Balanced',
      photo: balancedProject,
      description: 'App for budgeting your life',
      link: 'https://balancedbudget.herokuapp.com/'
    },
    {
      name: 'Balanced',
      photo: balancedProject,
      description: 'App for budgeting your life',
      link: 'https://balancedbudget.herokuapp.com/'
    },
  ]
}