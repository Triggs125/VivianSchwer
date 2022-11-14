import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import textGif from '../assets/textBackground.webp';
import VivianSchwer from '../assets/VivianSchwer.jpg';
import { theme } from "../styles/theme";
import '../styles/name.css';
import { useCallback } from "react";

export const Name = () => {
  const imageDimension = () => {
    const width = Math.min(400, window.innerWidth * 0.80);
    const height = width + 100;
    return { width, height };
  }

  const isSticky = useCallback(() => {
    if (window.scrollY > window.innerHeight / 5 * 4) {
      return true;
    }
    return false;
  }, []);

  const attributes = useCallback(() => {
    const stickyAttributes = {};
    const fontSize = `${Math.min(6, Math.max(3, (window.innerHeight / window.scrollY) * 2.4))}rem`;
    stickyAttributes.fontSize = fontSize;

    if (isSticky()) {
      stickyAttributes.position = "fixed";
      stickyAttributes.backgroundColor = `rgba(255, 255, 255, 1)`;
      stickyAttributes.boxShadow = theme.shadows[3];
      if (window.innerWidth <= 600) {
        stickyAttributes.fontSize = '2rem !important';
      }
    }
    return stickyAttributes;
  }, [isSticky]);

  const height = window.innerHeight;
  const [imageDimensions, setImageDimensions] = useState(imageDimension());
  const [stickyAttributes, setStickyAttributes] = useState(attributes());

  useEffect(() => {
    setStickyAttributes(attributes());
    window.addEventListener("resize", () => {
      setImageDimensions(imageDimension());
      setStickyAttributes(attributes());
    });
    window.addEventListener("scroll", () => {
      setStickyAttributes(attributes());
    });
  }, [attributes]);

  return (
    <Box
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
          marginTop: '1rem',
          marginLeft: '1rem',
          marginRight: '1rem'
        }}
        style={{
          width: `${imageDimensions.width}px`,
          height: `${imageDimensions.height}px`,
          borderRadius: 5,
          boxShadow: theme.shadows[10]
        }}
      />
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          ...stickyAttributes
        }}
      >
        <Typography
          id="name-text"
          variant="h1"
          sx={{
            paddingY: 0.5,
            marginX: '1rem',
            backgroundImage: `url(${textGif})`,
            backgroundSize: 'cover',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            fontSize: stickyAttributes.fontSize
          }}
        >
          Vivian Marie B. Schwer
        </Typography>
      </Box>
    </Box>
  );
}