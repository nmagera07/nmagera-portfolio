import React from 'react';
import { Card } from 'semantic-ui-react'

const MainContent = (props) => {
    return ( 
        <div className="main">
            <h1>Projects</h1>
            
            <div className="main-content">
                <div className="boxes">
                    <Card className="new-card">
                    <Card.Header><h3>Family Website</h3></Card.Header>
                    <div className="custom-cards">
                    <p>This family site was originally built in HTML/CSS. I rebuild the site in React, while adding the functionality to add data to a table. I did this by adding a Postgresql database, and using Express to relay data to the React app.</p>
                    </div>
                    <Card.Content extra>
                    <p><a href="https:www.reid-family-site.netlify.com">Project Page</a></p>
                    <p><a href="https://github.com/nmagera07/family-site">Github Page</a></p>
                    </Card.Content>
                    </Card>
                </div>
                <div className="boxes">
                    <Card className="new-card">
                    <Card.Header><h3>NASA API Photo Of The Day</h3></Card.Header>
                    <div className="custom-cards">
                    <p>A front end application built in React. This project uses the NASA API to grab a photo along with information to display on a web page. You can even click for a random date of info!</p>
                    </div>
                    <Card.Content extra>
                        <div className="links">
                            
                            <p><a href="https://flamboyant-wescoff-2ce805.netlify.com/">Project Page</a></p>
                            <p><a href="https://github.com/nmagera07/nasa-photo-of-the-day">Github Page</a></p>
                           
                        </div>
                         </Card.Content>
                    </Card>
                </div>
                <div className="boxes">
                    <Card className="new-card">
                    <Card.Header><h3>Gif-fy Town</h3></Card.Header>
                    <div className="custom-cards">
                    <p>A full stack application built in React and NodeJS. This project uses the Giphy API to display a random gif You can even click for a random gif!</p>
                    </div>
                    <Card.Content extra>
                        <div className="links">
                            
                            <p><a href="https://nmagera-giphy-test.netlify.com/">Project Page</a></p>
                            <p><a href="https://github.com/nmagera07/giphy-login-app">Github Page</a></p>
                           
                        </div>
                         </Card.Content>
                    </Card>
                </div>
                <div className="boxes">
                    <Card className="new-card">
                    <Card.Header><h3>Art Portfolio</h3></Card.Header>
                    <div className="custom-cards">
                    <p>A full stack application built in React and NodeJS. This application stores pictures and descriptions of a person's artwork. This project was build in tandem with 5 other people, and I was the Backend Engineer. </p>
                    </div>
                    <Card.Content extra>
                        <div className="links">
                            
                            <p><a href="https://amazing-saha-bf876d.netlify.com/">Project Page</a></p>
                            <p><a href="https://github.com/Lambda-ArtPortfolio/BE-ArtPortfolio">Github Page</a></p>
                           
                        </div>
                         </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
     );
}
 
export default MainContent;