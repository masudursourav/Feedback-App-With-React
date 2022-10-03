import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Componets/Shared/Card';

const About = () => {
    return (
        <Card>
            <div className="about">
                <h1>About The Project : </h1>
                <p>React FeedBack App just for leave feedback</p>
                <Link to='/'>Back To Home</Link>
            </div>
        </Card>
    );
};

export default About;