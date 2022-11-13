import { Box } from "@mui/material";
import "../styles/card.css";
import { theme } from "../styles/theme";

export const Card = ({ front, back }) => {
  return (
    <Box
      class="flip-card"
      borderRadius={theme.shape.borderRadius * 2}
      boxShadow={theme.shadows[4]}
    >
      <Box class="flip-card-inner">
        <Box class="flip-card-front">
          {front}
        </Box>
        <Box class="flip-card-back">
          {back}
        </Box>
      </Box>
    </Box>
  );
}