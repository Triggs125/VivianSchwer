import { Box, Container, Typography } from "@mui/material"
import { theme } from "../styles/theme"
import "../styles/experience.css";
import Image from "mui-image";
import university_health from "../assets/university-health.png";

export const Experience = () => {
  return (
    <Container id="experience" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography variant="h1" textAlign='center'>Experience</Typography>
      <Box id="experience-wrapper" display="flex" gap="2rem" flexDirection="column">
        <Box className="experience-item" boxShadow={theme.shadows[4]}>
          <Image src={university_health} iconWrapperStyle={{ display: "hidden" }} />
          <Box className="experience-text" display='flex' flexDirection='column'>
            <Typography variant="h2" display="flex" flexDirection="row" flexWrap="wrap">
              <Box width="100%">University Health&nbsp;</Box>
              <Box width="100%" fontStyle="italix">(formerly Truman Medical Center)</Box>
            </Typography>
            <Typography variant="h3">Clinical Pharmacy Intern</Typography>
            <Typography variant="h3" className="experience-text-date">
              <Box width="unset">March 2020 -&nbsp;</Box>
              <Box>Present</Box>
            </Typography>
            <Typography variant="h4" textAlign="left">
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>
                  Provide metabolic support services by monitoring and adjusting adult 
                  and neonatal parenteral nutrition and electrolytes in collaboration with 
                  metabolic support team and attending physicians
                </li>
                <li>
                  Perform medication reconciliations and anticoagulation educations
                </li>
                <li>
                  Compound sterile and nonsterile medications 
                </li>
                <li>
                  Assist in COVID-19 vaccination inventory and preparation for outpatient clinic
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}