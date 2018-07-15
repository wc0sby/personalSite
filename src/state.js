// Avatar Photos
import mainPhoto from './Images/IMG_0451.JPG'
import resumePhoto from './Images/resume.png'
import contactPhoto from './Images/contact.png'
import projectsPhoto from './Images/brackets.png'
// Project Images
import balancedProject from './Images/Balanced.png'
import grubbaProject from './Images/Grubba.png'
import portfolioProject from './Images/Portfolio.png'
import weatherProject from './Images/ChromeLanding.png'
// FontAwesome Icons
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export default {
  contacts:[
      {
        icon: faLinkedin,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/wade-cosby-4346a77a/'
      },
      {
        icon: faGithubSquare,
        name: 'GitHub',
        link: 'https://github.com/wc0sby'
      },
      {
        icon: faEnvelopeSquare,
        name: 'Email',
        link: 'mailTo:wcosby6607@gmail.com'
      },
    ],
  contents:[
    {
      link: 'Wade Cosby',
      image: mainPhoto,
      headline: 'Your next full stack developer',
      title: 'About Me',
      description: [
        `Welcome! Please browse around, review my favorite projects, and read about my journey from accountant to web developer. If I can contribute to any of your projects in the future, please be sure to contact me.`,
        `Over the past 7 years, I’ve spent an abundance of time molding my analytical and problem solving skills as an accountant and auditor.  During my time in the field, I quickly found there a need to improve  various monotonous tasks.  Therefore, I began teaching myself basic skills using Visual Basic tools. Using these skills, I’ve built several tools that have improved work life balance for myself, and my peers.`,
        `Learning to build tools to improve other’s work life has become a passion for me.  Therefore, I sought out the opportunity to expand my knowledge base to take my skills to the next step.  This led me to enroll in Austin Coding Academy’s JavaScript course.  Through this program’s coursework, I have built a strong baseline skillset and experience for contributing to the development of full stack applications using JavaScript with a focus on React and many of the accompanying tools.`,
        `My eagerness, determination, and flexibility are some of my strongest skills I bring to the table.  I set the bar high, and work to achieve the task requested.  When you have an opening available and need a person with persistence, contact me and I will deliver.`
      ]
    },
    {
      link: 'Projects',
      image: projectsPhoto,
      headline: `Check out some of the awesome things I've built`,
      title: 'Projects',
      description: [
        `Here are the top picks from my collection of apps that I have built using JavaScript and React. These are ongoing projects that I have built in my spare time for practice.`,
        `In addition to reviewing these production projects, please be sure to head over to my GitHub profile and check out my public repositories.  Here you will find a wide array of contributions that I have been permitted to share.`,
        `NOTE: The Chrome Landing Page is deployed locally to my machine, however you may review the related source code using the card link below.`
 
      ]
    },
    {
      link: 'Resume',
      image: resumePhoto,
      headline: `In case you have some work you need help with and like formal documents`,
      title: 'Qualifications and Skills',
      description: [
        `I’m always looking for a new challenge, and I want to help you out.  Therefore, I’ve placed a PDF version of my resume on my site for you to review.`,
        `Please skim or read through my qualifications and reach out with any questions.  And of course, if my skills and qualifications align to your search criteria, let’s connect.`,
        `Click the link below, grab a cup of coffee and/or tea, and enjoy!`,
      ]
    },
    {
      link: 'Contact',
      image: contactPhoto,
      headline: `Give me a ring, DM, text, or whatever your preference`,
      title: 'Ways to Connect',
      description: [
        `Okay, so now I want to hear from you.  Let me know what you would like to see more of, any work I can contribute to, or just drop some kudos. `,
        `My preferred mode of communication is via email.  However, you may connect with me on LinkedIn, GitHub, or grab my phone number from my resume to call or text me directly.  I look forward to hearing from you soon, and THANK YOU for your time!`
      ]
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
      name: 'Grubba',
      photo: grubbaProject,
      description: 'App for locating food venues around you, based on desired cuisines',
      link: 'https://wc0sby.github.io/Grubba/'
    },
    {
      name: 'Portfolio v1.0',
      photo: portfolioProject,
      description: 'My first portfolio project',
      link: 'https://wc0sby.github.io/portfolio/'
    },
    {
      name: 'Chrome Landing Page',
      photo: weatherProject,
      description: 'App for budgeting your life',
      link: 'https://balancedbudget.herokuapp.com/'
    },
  ]
}
