import { Box } from '@mui/material';
import { Document, Page } from 'react-pdf';
import resume from '../assets/resume.pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Resume() {
  return (
    <Box>
      <h1> Resume </h1>
      <Document file={resume} >
      <Page pageNumber={1} />
    </Document>
    </Box>
  );
}

export default Resume;
