import { Box } from '@mui/material';
import portrait from '../assets/Brendan2.jpg';

function Home() {
  return (
    <Box id="homeContainer">
      <h1> Brendan Sikorjak </h1>
      <div>
        <img
          src={portrait}
          id="portrait"
          // style={{ width: 750, height: 500 }}
        ></img>
      </div>
      <p>
        My name is Brendan Sikorjak and I am a huge fan of the New York Rangers.
        I am a first generation born American to immigrant parents from Slovakia
        and Czechia. Playing ice hockey, snowboarding and tennis are my hobbies
        and I was lucky enough to turn one of those sports into a profession.
        During the spring, summer, and fall I coach tennis to children and
        senior citizens and have a blast doing it! I am a front-end web
        developer with a bachelors degree of science in computer science and a
        minor in sociology from St. John's University. Recently I graduated from
        a coding bootcamp at Rutgers University and earned a certificate in
        full-stack development.
      </p>
    </Box>
  );
}

export default Home;
