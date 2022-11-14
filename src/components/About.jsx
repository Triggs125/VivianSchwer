import { Box, Button, Container, Typography } from "@mui/material"
import { theme } from "../styles/theme"
import Image from "mui-image";
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/Gmail-Logo.png';

export const About = () => {
  return (
    <Container>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          gap: '2rem'
        }}
      >
        <Typography
          variant="h3"
          textAlign='center'
        >
          Hello! My name is Vivian Schwer, and I'm a St. Louis born and raised girl 
          who moved to Kansas City to explore my passion for pharmacy. 
          I am currently interested in both acute and ambulatory care settings and am 
          interested in pursuing a residency. I have over two years of hospital experience. 
          I enjoy interprofessional collaboration to seek out the best individualized care for patients!
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          gap="2rem"
        >
          <Button
            variant="text"
            href="https://www.linkedin.com/in/vivianschwer/"
            target="_blank"
            sx={{ padding: 0, width: '4rem' }}
            title="LinkedIn"
          >
            <Image
              src={linkedin}
              style={{
                height: 'unset!important',
                borderRadius: 8,
                boxShadow: theme.shadows[3]
              }}
            />
          </Button>
          <Button
            variant="text"
            href="mailto:vivianschwer@gmail.com"
            target="_blank"
            sx={{
              padding: 0,
              width: '3rem'
            }}
            title="Email me!"
          >
            <Image
              src={gmail}
              style={{
                height: 'unset!important',
                backgroundColor: 'white',
                borderRadius: 8,
                boxShadow: theme.shadows[3]
              }}
            />
          </Button>
        </Box>
      </Box>
    </Container>
  )
}