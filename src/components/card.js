import React, { useContext } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Icon } from "../icons/appIcons";
import { Box } from "@mui/system";
import { AppContext } from "./DataProvider";
import { Link } from "@mui/material";

const CustomCard = ({ cardData, type }) => {
  const { removeApps } = useContext(AppContext);
  return (
    <div>
      <Card sx={{ minWidth: 275, mx: "auto" }}>
        <CardContent>
          <Box sx={{ mx: "auto", width: 100 }}>
            <Icon className="icons" name={cardData.icon} />
            <h4>{cardData.label}</h4>
            {type === "apps" ? (
              <Link
                onClick={() => removeApps(cardData.id)}
                component="button"
                sx={{ marginTop: "10px" }}
              >
                remove
              </Link>
            ) : (
              ""
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomCard;
