import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import nyrLogo from '../assets/new-york-rangers-logo.png';
import nutritionLogo from '../assets/nutrition-logo.png';
import weatherPic from '../assets/weather-app.png';

function Portfolio() {
  return (
    <Box>
      <h1> Portfolio </h1>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea
          href="https://brendansikorjak.github.io/new-york-rangers-quiz/"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="350"
            image={nyrLogo}
            alt="NYR Logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              New York Rangers quiz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Test your knowledge on the jersey numbers of some of the players
              for the New York Rangers!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea
          href="https://sergrojas29.github.io/Nutrition-Tracker/"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="250"
            image={nutritionLogo}
            alt="Nutrition Tracker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nutrition Tracker
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Track your daily and weekly calories with our Nutrition Tracker
              app!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea
          href="https://brendansikorjak.github.io/weather-app/"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="250"
            image={weatherPic}
            alt="Weather App"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Find out what the weather is in any city around the world this
              week!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
export default Portfolio;
