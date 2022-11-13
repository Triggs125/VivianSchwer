import { Box } from "@mui/material";
import { About } from "../components/About";
import { Education } from "../components/Education";
import { Name } from "../components/Name";
import { theme } from "../styles/theme";
import "../styles/home.css";
import { Experience } from "../components/Experience";
import { Leadership } from "../components/Leadership";

export const Home = () => {
  document.body.style.backgroundColor = theme.palette.background.default;

  return (
    <Box paddingBottom='4rem' display='flex' flexDirection='column' gap='4rem'>
      <Name />
      <About />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Leadership />
    </Box>
  );
}