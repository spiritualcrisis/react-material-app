import React, { useContext } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Icon } from "../icons/appIcons";
import { Box } from "@mui/system";
import { AppContext } from "./DataProvider";

const CustomCard = ({ cardData }) => {
  const { removeApps } = useContext(AppContext);
  return (
    <div>
      <Card sx={{ minWidth: 275, mx: "auto" }}>
        <CardContent>
          <Box sx={{ mx: "auto", width: 100 }}>
            <Icon className="icons" name={cardData.icon} />
            <h4>{cardData.label}</h4>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => removeApps(cardData.id)}
            className="text-sm text-red-500"
          >
            remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
