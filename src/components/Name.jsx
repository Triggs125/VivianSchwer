import { Container, Typography } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import textGif from '../assets/textBackground.webp';
import VivianSchwer from '../assets/VivianSchwer.jpg';
import { theme } from "../styles/theme";
import '../styles/name.css';

export const Name = () => {
  const imageDimension = () => {
    const width = Math.min(400, window.innerWidth * 0.80);
    const height = width + 100;
    return { width, height };
  }

  const height = window.innerHeight;
  const [imageDimensions, setImageDimensions] = useState(imageDimension());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setImageDimensions(imageDimension());
    });
  }, []);

  return (
    <Container
      id="name-box"
      sx={{
        minHeight: height,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Image
        id="name-image"
        src={VivianSchwer}
        fit="cover"
        easing="ease-in"
        alt=""
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: `${imageDimensions.height}px`,
          marginTop: '1rem'
        }}
        style={{
          width: `${imageDimensions.width}px`,
          height: `${imageDimensions.height}px`,
          borderRadius: 5,
          boxShadow: theme.shadows[10]
        }}
      />
      <Typography
        id="name-text"
        variant="h1"
        sx={{
          backgroundImage: `url(${textGif})`,
          backgroundSize: 'cover',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          fontSize: '6rem'
        }}
      >
        Vivian Marie B. Schwer
      </Typography>
    </Container>
  );
}