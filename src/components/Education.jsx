import { Box, Container, Typography } from "@mui/material"

export const Education = () => {
  return (
    <Container id="education" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography variant="h1" textAlign='center'>Education</Typography>
      <Box display='flex' flexDirection='column'>
        <Typography variant="h2">
          University of Missouri - Kansas City School of Pharmacy
        </Typography>
        <Typography variant="h3">Doctor of Pharmacy</Typography>
        <Typography variant="h3">Anticipated May 2023</Typography>
      </Box>
      <Box display='flex' flexDirection='column'>
        <Typography variant="h2">
          Southern Illinois University of Edwardsville
        </Typography>
        <Typography variant="h3">Undergraduate Pre-Pharmacy Coursework</Typography>
        <Typography variant="h3">August 2016 - May 2019</Typography>
      </Box>
    </Container>
  )
}