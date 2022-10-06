import React from "react";
import { SiCodewars, SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";
import Typography from '@mui/material/Typography';

const Info = () => {
    return (
        <div className="info">
            <Typography
                variant="h2"
                component="h2"
                sx={{ 
                    color: "black", 
                    fontFamily: '"Raleway", sans-serif' 
                }}
            >
                Linh Le
            </Typography>
            <div id="info-icons">
                <a
                href="https://www.linkedin.com/in/linh-le-96baaa154/"
                target="_blank"
                >
                <SiLinkedin className="icons" />
                </a>
                <a href="https://github.com/LinhLe2307" target="_blank">
                <SiGithub className="icons" />
                </a>
                {/* <a href="https://www.codewars.com/users/Linh%20Le" target="_blank">
                <SiCodewars className="icons" />
                </a>
                <a href="https://leetcode.com/LinhLe2307/" target="_blank">
                <SiLeetcode className="icons" /> */}
                {/* </a> */}
            </div>
        </div>
    );
};

export default Info;