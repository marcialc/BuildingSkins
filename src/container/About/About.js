import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import data from '../../en';
import './About.scss';

const About = () => {

    const [aboutInfo, setAboutInfo] = useState(data.aboutme);

    return (
        <div className="about">
            <div className="about-background">
                <div className="left-triangle"></div>
                <div className="">
                    <Card className="root">
                        {
                            aboutInfo.map( el  => {
                                return (
                                    <CardContent className="content">
                                        <Typography className="title" variant="h5" component="h2">
                                            {el.title}
                                        </Typography>
                                        <Typography variant="body2" component="p" dangerouslySetInnerHTML={{ __html: el.description }}>
                                        </Typography>
                                    </CardContent>
                                )

                            })
                        }
                    </Card>
                </div>
            </div>
            
        </div>
    )
}

export default About;