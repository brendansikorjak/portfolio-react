import { Box } from '@mui/material';

function Resume() {
  return (
    <Box>
      <h1> Resume </h1>
      <a
        className="btn"
        href="CS-resume2.pdf"
        download="Brendan-Sikorjak-resume"
      >
        Download my Resume
      </a>
    </Box>
  );
}

export default Resume;
