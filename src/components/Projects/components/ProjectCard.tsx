import React from "react";
import PropTypes from "prop-types";
import "../ProjectSection.scss";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import PattyImage from "../../../static/images/cards/Frame 6.png";
import { colors } from "../../../theme/colors";
import { ProjectType } from "../../../types/ProjectType";

function ProjectCard({
  title,
  description,
  techUsed,
  link,
  image,
}: ProjectType) {
  return (
    <div
      className="inline-block p-5 cursor-pointer hover:scale-95 ease-in-out duration-300"
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <Card
        style={{
          borderRadius: 30,
          height: 350,
          width: 400,
        }}
      >
        <CardMedia component="img" alt="green iguana" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {techUsed?.map(() => {
            return <></>;
          })}
        </CardContent>

        <CardActions className="justify-end mr-3">
          <p>Click to learn more</p>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;
