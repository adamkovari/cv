// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ádám",
  middleName: "Zsolt",
  lastName: "Kővári",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/adamkovari",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/adam.kovari.7/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kovari.adi/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/adam-kovari/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/avatar.jpeg"),
  imageSize: 375,
  message:
    "Hi, My name is Ádám Kővári. I have been studying Software Engineering at Budapest University of Technology for 1,5 years after I had graduated as Electrical Engineer. I am passionate about software development especially for web development, but I am interested in IoT and AI innovations, hardver reparations and in the world of Startups. In brief in anything which is connected with technology.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "adamkovari", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 90 },
    { name: "Laravel", value: 85 },
    { name: "Vapor", value: 75 },
    { name: "Amazon AWS", value: 55 },
    { name: "JavaScript", value: 70 },
    { name: "Node", value: 75 },
    { name: "SQL", value: 75 },
    { name: "Meteor", value: 60 },
    { name: "Vue", value: 60 },
    { name: "C/C++", value: 65 },
    { name: "C#", value: 80 },
    { name: "Java", value: 70 },
    { name: "Git Workflow", value: 80 },
    { name: "Illustrator", value: 80 },
    { name: "Photoshop", value: 70 },
    { name: "After Effects", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Thirst for Knowledge", value: 100 },
    { name: "Problem Solving", value: 75 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Full-stack, Back-end or Front-end developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "adam.kovari@schdesign.hu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: '3D Artist',
      companylogo: require('../assets/img/geolink_logo.svg'),
      date: 'September 2017 – May 2018',
    },
    {
      role: 'Full-stack Developer', company_name: 'MazeSoft Technologies',// Here Add Company Name
      companylogo: require('../assets/img/maze_logo_white.svg'),
      date: 'October 2020 – June 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
