import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type ProductCardProps = {
  onClick: () => void;
  title: string;
  description: string;
  imageURL: string;
};

export default function ProductCard({
  onClick,
  title,
  description,
  imageURL,
}: ProductCardProps) {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s ease-in-out",
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
