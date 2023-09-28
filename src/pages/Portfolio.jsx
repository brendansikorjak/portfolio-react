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

function Portfolio() {
  return (
    <Box>
      <h1> Portfolio </h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          href="https://brendansikorjak.github.io/new-york-rangers-quiz/"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="300"
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
    </Box>
  );
}
export default Portfolio;
