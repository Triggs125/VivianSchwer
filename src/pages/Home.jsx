import { Box } from "@mui/material";
import { About } from "../components/About";
import { Education } from "../components/Education";
import { Name } from "../components/Name";
import Navbar from "../components/Navbar";
import { theme } from "../styles/theme";

export const Home = () => {
  document.body.style.backgroundColor = theme.palette.background.default;

  return (
    <Box paddingBottom='4rem' display='flex' flexDirection='column' gap='4rem'>
      <Navbar />
      <Name />
      <About />
      <hr />
      <Education />
    </Box>
  );
}