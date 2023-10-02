import * as React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  CardActionArea,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import nyrLogo from '../assets/new-york-rangers-logo.png';
import nutritionLogo from '../assets/nutrition-logo.png';
import weatherPic from '../assets/weather-app.png';
import purrfectLogo from '../assets/purrfect-logo.svg';
import dictionaryPic from '../assets/dictionary.jpg';

function Portfolio() {
  return (
    <Box>
      <h1> Portfolio </h1>
      <Grid container spacing={2}>
        <Card sx={{ width: 325 }}>
          <CardActionArea
            href="https://brendansikorjak.github.io/new-york-rangers-quiz/"
            target="_blank"
          >
            <CardMedia
              component="img"
              height="250"
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
          <CardActions>
            <a
              href="https://github.com/brendansikorjak/new-york-rangers-quiz"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </CardActions>
        </Card>
        <Card sx={{ width: 325 }}>
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
          <CardActions>
            <a
              href="https://github.com/Sergrojas29/GroupProject1"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </CardActions>
        </Card>
        <Card sx={{ width: 325 }}>
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
          <CardActions>
            <a
              href="https://github.com/brendansikorjak/weather-app"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </CardActions>
        </Card>
        <Card sx={{ width: 325 }}>
          <CardActionArea
            href="https://new-cat-cafe-748a9644a8c0.herokuapp.com/"
            target="_blank"
          >
            <CardMedia
              component="img"
              height="250"
              image={purrfectLogo}
              alt="Purrfect Cat Cafe"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Purrfect Cat Cafe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visit our fictional Cat Cafe!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://github.com/Sergrojas29/Purrfect-Cat-Cafe"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </CardActions>
        </Card>
        <Card sx={{ width: 325 }}>
          <CardActionArea
            href=" https://main.d24rgv9ivojyz8.amplifyapp.com/"
            target="_blank"
          >
            <CardMedia
              component="img"
              height="250"
              image={dictionaryPic}
              alt="Dictionary App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dictionary App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get a random word with the definition or play a multiple choice
                quiz to test your knowledge from any of the following
                dictionaries: French, Biology, Chemistry, Geology, and Medical!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://github.com/brendansikorjak/dictionary"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}
export default Portfolio;
