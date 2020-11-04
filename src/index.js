import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const commands = {
  "help": (inp)=>{return {output:"Enter commands like\nResume\nAbout"}},
  "about": (inp)=>{return {output:"Currently pursuing B.Tech (CSE) at IIIT-Naya Raipur. Maintained a sound Cumulative GPA of 9.76 on a scale of 10. Expertise in Java, Android Studio, Python, Flutter, Firebase, Django and Deep learning. Possess good analytical and problem-solving skills—4-star rating on CodeChef. Well versed in key aspects of teamwork and eﬀective communication.\nI am always open to opportunities to help chisel my skills and apply what I have learned practically. "}},
  "experience": (inp)=>{return {output:"Ekalavya Summer Intern\nIIIT Naya Raipur IIT Bombay(May 2019 – July 2019)\n• Worked on project- 'Android app to ask and answer questions in video format for individuals and institute'.\n• Designed the UI and functionalities of front end using flutter.\n• Developed a Rest API using Spring Boot to support the overall working.\n\nProcess Automation Intern\nStone Shippers Ltd(June 2020 – August 2020)\n• Wrote Google App Script for auto generation of invoice on Google Sheets.\n• Automated reading emails to sheets.\n• Created rest api (using NodeJs) for PDF form filling.\n\nSoftware Developer Intern\nCG Net Swara (June 2020- October 2020)\n• Created 'Yatra app' using Android Studio for use by the employees and tracking their performance.\n"}},
  "education": (inp)=>{return {output:"EDUCATION EXPERIENCE\nBachelor of Technology (Aug 2017 – May 2021) \n9.75 CGPA \n\nHIGHER SECONDARY EXAMINATION\nDelhi Public School, Janjgir-Champa (2017)\n92%\n\nSECONDARY EXAMINATION \nDelhi Public School, Janjgir-Champa(2015) \n10 CGPA\n"}},
};

ReactDOM.render(
  <React.StrictMode>
    <App commands={commands} invalidOutput="Please enter a valid command"/>
  </React.StrictMode>,
  document.getElementById('root')
);

