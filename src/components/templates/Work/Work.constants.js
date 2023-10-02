import quicknote from '../../../images/projectStills/proj-quicknote.png'
import gameon from '../../../images/projectStills/proj-gameon.png'
import flexfox from '../../../images/projectStills/proj-flexfox.png'
import vinylboxd from '../../../images/projectStills/proj-vinylboxd.png'
import nextcpap from '../../../images/projectStills/proj-nextcpap.png'

export const projects = [
  {
    name: "ClearMix Projects Platform",
    desc: "Video marketing campaign ideation and tracking platform.",
    path: "/work/clearmix-projects",
  },
  {
    name: "ClearMix Virtual Studio",
    desc: "ClearMix's flagship recording studio platform.",
    path: "/work/clearmix-studio",
  },
  {
    name: "ClearMix Intros",
    desc: "Personalized video introductions for user generated content made easy.",
    path: "/work/clearmix-intros",
  },
  {
    name: "Chess 2",
    desc: "Turn-less, cooldown based chess variant supporting multiple players.",
    path: "/work/chess-2",
  },
  {
    name: "NEXTcpap",
    image: nextcpap,
    desc: "The landing page for NEXTcpap's services.",
    tools: [
      "React", "Nodejs", "AWS Lambda", "DynamoDB", "Sass", "Adobe Photoshop"
    ],
    video: null,
    linkUrl: "https://www.nextcpap.com/",
    githubUrl: null
  },
  {
    name: "QuickNote",
    image: quicknote,
    desc: "A light-weight note taking productivity app.",
    tools: [
      "React", "Redux", "Nodejs", "Express", "Sass", "JWT", "bcrypt", "MongoDB", "react-spring", "Adobe Photoshop"
    ],
    video: null,
    linkUrl: null,
    githubUrl: "https://github.com/zachkaigler/quicknote-frontend"
  },
  {
    name: "Game On",
    image: gameon,
    desc: "A social networking app designed to connect users to new friend groups through shared interests in hobbies and games.",
    tools: [
      "React", "Ruby on Rails", "Action Cable", "WebSockets", "JWT", "Adobe Photoshop", "Adobe AfterEffects", "Semantic UI React", "Custom CSS"
    ],
    video: "https://www.youtube.com/watch?v=WNL0FNjPNUQ",
    linkUrl: null,
    githubUrl: "https://github.com/zachkaigler/game-on-frontend"
  },
  {
    name: "Flex Fox!",
    image: flexfox,
    desc: "An adorable Flexbox visualizer designed to showcase the technology’s versatility in styling collections of items.",
    tools: [
      "React", "styled-components", "Adobe Photoshop", "Custom CSS",
    ],
    video: null,
    linkUrl: "https://zachkaigler.github.io/flex-fox/",
    githubUrl: "https://github.com/zachkaigler/flex-fox"
  },
  {
    name: "Vinylboxd",
    image: vinylboxd,
    desc: "A social platform for vinyl enthusiasts to share, rate, and review records in their collection.",
    tools: [
      "React", "Ruby on Rails", "JWT", "Adobe Photoshop", "Semantic UI React", "Custom CSS"
    ],
    video: "https://www.youtube.com/watch?v=Qc-piW2B2vE",
    linkUrl: null,
    githubUrl: "https://github.com/jbrundagejr/phase-4-front-end"
  },
];