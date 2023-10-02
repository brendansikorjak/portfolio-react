import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/brendansikorjak" target="_blank">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/brendan-sikorjak-18414123b/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
