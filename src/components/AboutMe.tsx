import React from 'react';
import casualPhoto from "../assets/img/Johnathan_Casual Photo.jpg";

export const AboutMePage: React.FC = () => {

  const publications = [
    { title: "Effectivness of an Online Self-Management Tool for People with Rheumatoid Arthritis", url: "https://trialsjournal.biomedcentral.com/articles/10.1186/s13063-019-3851-0" },
    { title: "Effects of a Multifaceted Wearable-Based Program for People with Knee Osteoarthritis", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7367519/" },
    { title: "Efficacy of a Physical Activity Counseling Program With the Use of a Wearable Tracker in People with Inflammatory Athritis", url: "https://pubmed.ncbi.nlm.nih.gov/32248626/" }
  ];

  return (
    <div className="aboutMeContainer" id='about'>
      <div className="aboutMeContent">
        <div className="aboutMeImage">
          <img src={casualPhoto} alt="Image" />
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p><span>I am Johnathan Tam</span></p>
          <p>I am a software engineer with experience in <strong>full-stack, cloud, serverless, and pipeline development.</strong></p>
          <p>I am proficient with <strong>Python</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, <strong>Java</strong>, <strong>PHP</strong>, <strong>AWS</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>Django</strong>, <strong>Zend</strong>, <strong>and Node</strong>.</p>
          <p>I graduated from the University of British Columbia (UBC) with a <strong>Bachelor's of Computer Science</strong> and a Bachelor's of Science in Biology.</p>
          <p>As a passion-driven and results-oriented achiever, I am deeply committed to transforming innovative ideas into tangible solutions that better our tomorrow. My unique perspective is shaped by a proven track record of publishing academic papers focused on leveraging modern technologies, including apps and fitness trackers, to enhance physical activity among patients with arthritis. This work underscores my dedication to making a positive impact, a goal I pursue through my robust problem-solving capabilities, strong interpersonal skills, and extensive full-stack experience. Eager to contribute these attributes, I look forward to pushing the boundaries of innovation and leveraging my unique mix of software technical skills and academic research experience to drive advancements that profoundly benefit society.</p>
          <p>Please reach out if you would like to connect and chat more about software development or any of my interests! I also enjoy meeting and working together with new people.</p>
          <p><strong>Publications</strong></p>
          <div className="publications">
          <ul>
            {publications.map((publication, index) => (
              <li key={index}><a href={publication.url} target="_blank" rel="noopener noreferrer">{publication.title}</a></li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

