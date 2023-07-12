import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, green, red, pink } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Table from "./Table";
import button from "../api/buttons.json";
import { colors } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const openLinkInNewTab = (url) => {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) newTab.opener = null;
};

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const buts = button.buttons;

  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon color="secondary" />
          </IconButton>
          // <ExpandMore
          //   expand={expanded}
          //   onClick={handleExpandClick}
          //   aria-expanded={expanded}
          //   aria-label="show more"
          // >
          //   ...
          // </ExpandMore>
        }
        title={
          <Typography color="darkviolet" fontSize={21}>
            INSIGHT: Open Home Loan Application
          </Typography>
        }
        subheader="September 14, 2023"
      />
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {" "}
        </CardContent>
      </Collapse> */}
      {/* <CardMedia
        component="img"
        height="194"
        image=""
        alt="Pa"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Application opened: Apr 5th
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          Current state: Underwriting (Apr 22th)
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          Latest event: Require additional proof of employment (communicated May
          5th)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon color="secondary" /> */}
          <Typography variant="body1">
            Create new insight 
          </Typography>
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon color="secondary" />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color="secondary" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Table of Last 10 Transaction:
          </Typography>
          <br />
          <Table />
          {buts.map((but, index3) => {
            return (
              <button
                className="cancelCard"
                onClick={() => openLinkInNewTab(but.link)}
                key={index3}
              >
                {but.title}
              </button>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
