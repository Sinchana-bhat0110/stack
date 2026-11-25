
import React, { Component } from 'react';
import './App.css';

// Functional Component - Header
function Header() {
  return (
    <div className="header">
      <h1>Akash Gaonkar</h1>
      <p>Email: akash@gmail.com</p>
      <p>Phone: 9876543210</p>
      <p>Location: Bengaluru, Karnataka</p>
    </div>
  );
}

// Class Component - Education
class Education extends Component {
  render() {
    return (
      <div className="section">
        <h2>Education</h2>
        <p><strong>MCA:</strong> NMIT Bengaluru</p>
        <p><strong>BCA:</strong> Sindhi College, Bengaluru</p>
      </div>
    );
  }
}

// Functional Component - Skills
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Computer Networks"
  ];

  return (
    <div className="section">
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

// Main Component
function App() {
  return (
    <div className="resume">
      <Header />

      <div className="section">
        <h2>Career Objective</h2>
        <p>
          To work in a challenging environment where I can
          improve my technical skills and contribute to
          organizational growth.
        </p>
      </div>

      <Education />

      <Skills />

      <div className="section">
        <h2>Personal Details</h2>
        <p><strong>Languages:</strong> English, Kannada, Hindi</p>
        <p><strong>Hobbies:</strong> Photography, Travelling, Learning Technology</p>
      </div>
    </div>
  );
}

export default App;
