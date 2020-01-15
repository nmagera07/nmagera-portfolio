import React from 'react';
import { Card } from 'semantic-ui-react'

const Skills = (props) => {
    return ( 
        <div className="skills-box">
            <h1>Skills</h1>
            <div className="skills">
                <div className="skill-boxes">   
                    <Card className="skill1">
                        <h3>Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Python</li>
                            <li>NodeJS</li>
                        </ul>
                    </Card>
                    <Card className="skill2">
                        <h3>Frameworks/Tools</h3>
                        <ul className="frameworks">
                            <div>
                            <li>React</li>
                            <li>Git</li>
                            <li>Redux</li>
                            <li>Django</li>
                            </div>
                            <div>
                            <li>Flask</li>
                            <li>Express</li>
                            <li>AWS</li>
                            <li>Heroku</li>
                            </div>
                        </ul>
                    </Card>
                </div>
            </div>
            
        </div>
     );
}
 
export default Skills;