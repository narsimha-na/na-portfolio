import emoji from "react-easy-emoji";

import mavexLogo from "./assets/img/icons/common/mavex.png";
import tatamdLogo from "./assets/img/icons/common/tatamd.jfif";

export const greetings = {
    name: "{ Narsimha Reddy S }",
    title: "Hi all, I'm Narsimha Reddy S",
    desc2: "A passionate Full Stack Web and Mobile App Developer, I enjoy building a great applications & solve problems for which I can be techincal bridge to you and your idea. So I would love to work on differnt kind of projects and solve problems",
    description: "I am a developer who started developing from the age of 16 and developed my first native android applicaiton at 18 , having an experience of 2+ Years building Web, Native Mobile Applicaiton, Hybrid Applications & RESTful Web Services  with Flutter / Angular / Nodejs / Spring Boot / Java / Kotlin .",
    resumeLink: "https://drive.google.com/file/d/16e2VFg6WJ8Eyy9D2B2bbLj_4UJpXA2a1/view?usp=sharing",
};

export const openSource = {
    githubUserName: "narsimha-na",
};

export const contact = {};

export const socialLinks = {
    facebook: "https://www.facebook.com/Narsimha.NA/",
    instagram: "https://www.instagram.com/include_narsimha.na/",
    twitter: "https://twitter.com/pandudtb",
    github: "https://github.com/narsimha-na",
    linkedin: "https://www.linkedin.com/in/subbagari-narsimha-reddy-3976b113a/",
};

export const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Desgin & Develop API's Services in both Spring Boot & NodeJS"
        ),
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your Web Applications (Angular & ReactJS)"
        ),
        emoji(
            "⚡ Develop highly interactive both Hybrid (Flutter) & Native Mobile Applications (Andorid)"
        ),
        emoji(
            "⚡ Fully Scalable RESTful Web Services with both SQL & NoSQL Databases"
        ),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
        ),
    ],

    works: [
        emoji(
            "⚡ Developed RESTful web-services using Spring Boot & NodeJS"
        ),
        emoji(
            "⚡ Developed Frontend Applications using Angular (Version 4-11) and ReactJS"
        ),
        emoji(
            "⚡ Developed Native Anroid Applications using Java & Kotlin"
        ),
        emoji(
            "⚡ Developed Hybrid Mobile Applications using Flutter"
        ),
        emoji(
            "⚡ Developed Frontend Applications using Angular and ReactJS"
        ),
        emoji(
            "⚡ Writing and Maintaing the code base & writing Unit Test cases for ever requirments to develop a scalable application"
        ),
        emoji(
            "⚡ Worked with both of database SQL & NoSQL"
        ),
        emoji(
            "⚡ Experienced with working Git , Github & Gitlab Version system"
        ),
        emoji(
            "⚡ Worked with differnt deployement platforms like AWS, Firebase & Digital Ocean"
        ),
    ],
    softwareSkills: [{
            skillName: "TypeScript",
            fontAwesomeClassname: "logos:typescript-icon",
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
            skillName: "flutter",
            fontAwesomeClassname: "logos:flutter",
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "vscode-icons:file-type-sql",
        },
        {
            skillName: "mongoDB",
            fontAwesomeClassname: "vscode-icons:file-type-mongo",
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "logos:aws",
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "logos:firebase",
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "logos:docker-icon",
        },
    ],
};

export const SkillBars = [{
        Stack: "Frontend/Design", //Insert stack or technology you have experience in
        progressPercentage: "90", //Insert relative proficiency in percentage
    },
    {
        Stack: "Backend",
        progressPercentage: "70",
    },
    {
        Stack: "Programming",
        progressPercentage: "60",
    },
];

export const educationInfo = [{
        schoolName: "Kendriya Vidyalaya",
        subHeader: "High School",
        duration: "Sep 2014 - April 2016",
        desc: "Completed high school from kendriya vidyalaya in science stream for two years and passed out in 2016",

    },
    {
        schoolName: "Institute of Aeronautical Engineering",
        subHeader: "Graduation ( Bachelors Of Technology) ",
        duration: "Sep 2016 - Oct 2020",
        desc: "Completed my graduation from Institute of Aeronautical Engineering (B.Tech) in Computer Science & Engineering for four years and passed out in Oct 2020",
    },
];

export const experience = [{
        role: "Android Developer",
        company: "MaveX",
        companylogo: mavexLogo,
        date: "Nov 2018 – Sep 2019",
        desc: "Joined in 2018 worked as Android Developer , I have developed an andorid application according to company requirements . In that time period I have developed fully funtional android application.",
    },
    {
        role: "Teach Lead & Full Stack Developer",
        company: "MaveX",
        companylogo: mavexLogo,
        date: "Sep 2019 – April 2021",
        desc: "After working as andorid developer later I started working on RESTful Web Servies and application Frontend , Afterwards I was promoted to look after the tech team of MVP product managing the teach meeting and deadlines within the team.",
    },
    {
        role: "Web Developer",
        company: "Tata MD",
        companylogo: tatamdLogo,
        date: "May 2021 – Present",
        desc: "Joined in May  2021 as UI Developer my roles and responsiblites were to look after the front-end of application & Mobile Application using Flutter and develop applications according to the new requirements.",
    },
];

export const projects = [{
        name: "NA CODE",
        desc: "A coding platform for mobile applicaiton. In this application you can browse through differnt programming languges and run your code bits",
        github: "https://github.com/narsimha-na/NACODE-v2"
    },
    {
        name: "MAVEX",
        desc: "MaveX app lets you book tickets to all those huge and tiny events happening around you within seconds. It brings events related to music, sports, arts, technology, and a lot more to you from around the country. \n I have developed android applicaiton,Web applicaitons & API services for this start-up",
        github: "https://github.com/narsimha-na",
        link: "https://play.google.com/store/apps/details?id=com.maverick.user"
    },
    {
        name: "Many More ... ",
        desc: "I have developed many other applicaitons & API services in wide varities of tech-stack and self-sustable applications for wide range of clients (Start-Up's, Corporates & Individuals)",
    },
];

export const feedbacks = [];