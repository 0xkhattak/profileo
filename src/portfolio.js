/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naveedsec",
  title: "Hey 👋 Its Naveed Hussain",
  subTitle: emoji(
    "I’m an Independent Security Researcher and Red Team Member at Synack inc. I’m currently working in the cybersecurity sector mainly as a Bug Bounty Hunter and Penetration Tester, performing web application, mobile application, and network security assessments."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/naveedsec",
  linkedin: "https://www.linkedin.com/in/Naveedsec/",
  gmail: "Naveedkhattak1001@gmail.com",
  gitlab: false,
  facebook: false,
  medium: false,
  instagram: "https://instagram.com/naveedsec",
  stackoverflow: false,
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I love to Hack, Code, drink, break, probably drink again and Hack it back again. Maybe the loop i am in love with. View my stack below: ",
  skills: [
    emoji(
      "⚡ Deliver high-end quality solutions as per your requirements (API, Web, Desktop, Linux, Windows, Cyber Security, Cloud)"
    ),
    emoji("⚡ Provides a complete manual penetration test against the web application in order to ensure its safety."),
    emoji(
      "⚡ Provides IOS and Android application penetration testing in order to make the mobile app secured using manual or automated penetration testing methods to identify any vulnerability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python-3/2",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "javascript/typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fas fa-keyboard"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-bars"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3/sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "cloud",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cubes"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Air University",
      logo: require("./assets/images/airunilogo.png"),
      subHeader: "Bachelors of Science in Cyber Security",
      duration: "2019 - 2023",
      desc: "Completed 4 years of the program. Took courses about Software Engineering, Web Security, Operating Systems, Programming Practices & Principles, ...",
      descBullets: [
        "Acted as Vice-President of Air University Bits & Bytes Society",
        "Organizated national level CTF Hackathon",
        "Won 2 cateogires in national level CTF Hackathon by Ignite and Ministry of IT (2021)",
        "Held various cyber security workshops and seminars for students."
      ]
    },
    {
      schoolName: "Punjab College of College",
      logo: require("./assets/images/punjablogo.png"),
      subHeader: "ICS (Computer Science)",
      duration: "2020 - 2023",
      desc: "Complted 2 of ICS in comuter science. Took courses about Programming, Web Development and OOP...",
      descBullets: [
        "",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Application Security Testing", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Application Security Testing",
      progressPercentage: "90%"
    },
    {
      Stack: "Network Security Testing",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cyber Security Consultant",
      company: "Secure Purple",
      companylogo: require("./assets/images/horizonlogo.png"),
      date: "November 2021 – Present",
      desc: "Secure Purple a cyber security and digital safety firm that provides innovative solutions and services to help organizations and individuals stay protected in the ever-evolving digital landscape",
    },
    {
      role: "Security Researcher",
      company: "Synack",
      companylogo: require("./assets/images/contractlogo.png"),
      date: "2023 - Present",
      desc: "Synack is a crowdsourced security platform that uses a network of white-hat hackers to find and fix vulnerabilities in software and systems",
    },
    {
      role: "Security Researcher",
      company: "Hackerone",
      companylogo: require("./assets/images/upworklogo.png"),
      date: "2020 - Present",
      desc: "HackerOne's platform allows organizations to invite a community of ethical hackers to test their systems for vulnerabilities",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Startup / Projects",
  subtitle: "SOME STARTUPS AND AMAZING TECH THAT I WORKED ON!",
  projects: [
    {
      image: require("./assets/images/airoverflowlogo.png"),
      projectName: "Zamonga Internet (Project)",
      projectDesc: "Zamonga Internet is a project that spreads cyber security awareness in remote areas, teaching people how to stay safe",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "Visit Project",
          url: false
        }
      ]
    },
    {
      image: require("./assets/images/subrake.png"),
      projectName: "Subrake",
      projectDesc: "A Subdomain Reconnaissnace toolkit that I developed in Python",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/hash3liZer/subrake"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Got acknowledged by more than 100+ well known companies for reporting security vulnerabilities in their services and products. Acknowledgments include monetary rewards, certificates, hall of fame, and swags",

  achievementsCards: [
    {
      title: "Participated in Pakistan's 1st Nationwide Cyber Security Competition",
      subtitle:
        "",
      image: require("./assets/images/hackathon.jpeg"),
      imageAlt: "Ignite hackathon",
      footerLink: [
        {
          name: "President Arif Alvi handing us the award",
          url: "https://ignite.org.pk/digital-pakistan-grand-finale-awards-ceremony/"
        },
      ]
    },
    {
      title: "Certified Network Security Specialist (CNSS)",
      subtitle:
        "Gpt 3rd position in the Speed Programming category of Pakistan Hackathon 2021",
      image: require("./assets/images/hackathon2.png"),
      imageAlt: "Ignite Hackathon",
      footerLink: [
        {
          name: "President Arif Alvi handing us the award",
          url: "https://ignite.org.pk/digital-pakistan-grand-finale-awards-ceremony/"
        },
      ]
    },

    {
      title: "Certified AppSec Practitioner(CAP) ",
      subtitle: "",
      image: require("./assets/images/toprated.png"),
      imageAlt: "Top Rated PLus",
      footerLink: [
        {
          name: "More about Top Rated plus",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://web.archive.org/web/20201203033133/https:/www.shellvoide.com/wifi/how-to-crack-wifi-password-using-pmkid-new-method-wifibroot/",
      title: "Capturing the PMKID of WPA2 and performing brute force against it",
      description:
        "This guide covers attacking the weakness discovered by Jens Steube the writer of Hashcat in the specification of WPA2. This allows an attacker to capture a hash without establishing the 4 way handshake with the targetted wireless System. We here are going to see a customized tool developed by me for the purpose."
    },
    {
      url: "https://web.archive.org/web/20210614222116/https://www.shellvoide.com/wifi/setting-up-fake-access-point-or-evil-twin-to-hack-wifi-rogue-ap/",
      title: "How to Setup Fake (Rogue) Access Point on Linux | hostapd",
      description:
        "how one can use Fake (Rogue) Access Point to sneak passphrases and other important target details over the air by showing targets a fabricated document. We will do hell of this task using hostapd, a well-written ad-hoc software."
    },
    {
      url: "https://web.archive.org/web/20210119000817/https:/www.shellvoide.com/wifi/how-to-setup-captive-portal-login-with-rogue-ap-nginx/",
      title: "Captive Portal Guide: Setup Your Fake Access Point",
      description:
        "A comprehensive guide published on Captive Portals in the wild. A Captive portal is an advanced level technique used by attackers to harvest WiFi Credentials. It involves various steps and configuration and is one of the most advanced methodologies used in the realm of WiFi Hacking."
    },
    {
      url: "https://web.archive.org/web/20210118223148/https://www.shellvoide.com/python/scraping-and-download-all-images-from-a-web-page-python/",
      title: "Scraping and Download All Images from a Web Page",
      description:
        "Here's a small guide to help you downloading images from website and web pages in a bulk amount through python. This guide will help you through the basics of downloading images from a web source in a bulk by extractin"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3192205651",
  email_address: "me@shameerkashif.io"
};

// Twitter Section

const twitterDetails = {
  userName: "hash3liZer", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
