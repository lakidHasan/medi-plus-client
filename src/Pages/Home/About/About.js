import React from 'react';
import about from './doctor.jpg';
import './About.css';

const About = () => {
    return (
        <div id="about" className="about mt-5">
          <img src={about} alt="" />
          <div className="p-4">
              <h1 className="text-primary">About Us</h1>
              <p>A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health. A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. There are many specific areas in the field of medicine that students can study. This article is meant to explain in general terms what a doctor does, common types of doctors, a doctor's earning potential and how to become one.</p>
          </div>
        </div>
    );
};

export default About;