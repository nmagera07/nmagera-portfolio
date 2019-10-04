import React from 'react';

const MainContent = (props) => {
    return ( 
        <div >
            <h1>Projects</h1>
            <p>A few projects I've worked on, that I'm pretty proud of!</p>
            <div className="main-content">
            <div className="boxes">
            <h3>Labby</h3>
            <img src="https://emoji.slack-edge.com/T4JUEB3ME/labby/2b0dc2997dfeabae.png" alt="labby emoji"></img>
            <p>Labby is a Slackbot that provides a host of interactive and automated capabilities to Lambda Labs students and staff. This Slackbot was built with NodeJS along with Go, using a Postgresql database, hosted on AWS.</p>
            <p><a href="https://github.com/Lambda-School-Labs/labby-be">Github Page</a></p>
            </div>
            <div className="boxes">
            <h3>NASA API Photo Of The Day</h3>
            <p>A full stack application built in React and NodeJS. This project uses the NASA API to grab a photo along with information to display on a web page. You can even click for a random date of info!</p>
            <div className="links">
            <p><a href="https://flamboyant-wescoff-2ce805.netlify.com/">Project Page</a></p>
            <p><a href="https://github.com/nmagera07/nasa-photo-of-the-day">Github Page</a></p>
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default MainContent;