import { Chip, Typography } from "@mui/material";
import React from "react";
import ScaleIcon from "@mui/icons-material/Scale";
import TransgenderIcon from "@mui/icons-material/Transgender";
import HeightIcon from "@mui/icons-material/Height";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const QuickInfoSection = ({ person }) => {
  return (
    <div style={{ margin: "16px" }}>
      <Typography
        component="div"
        variant="h5"
        color={"white"}
        style={{ marginBottom: "8px" }}
      >
        {"Quick info"}
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "16px",
        }}
      >
        <AttributeChip
          icon={<TransgenderIcon style={{ color: "white" }} />}
          label={person.gender.toUpperCase()}
        />
        <AttributeChip
          icon={<HeightIcon style={{ color: "white" }} />}
          label={`${person.height} m`.toUpperCase()}
        />
        <AttributeChip
          icon={<ScaleIcon style={{ color: "white" }} />}
          label={`${person.mass} kg`.toUpperCase()}
        />
        <AttributeChip
          icon={<ChildFriendlyIcon style={{ color: "white" }} />}
          label={`Born: ${person.birth_year}`.toUpperCase()}
        />
        <AttributeChip
          icon={<ColorLensIcon style={{ color: "white" }} />}
          label={`Hair: ${person.hair_color}`.toUpperCase()}
        />
        <AttributeChip
          icon={<RemoveRedEyeIcon style={{ color: "white" }} />}
          label={`Eye: ${person.eye_color}`.toUpperCase()}
        />
      </div>
    </div>
  );
};

const AttributeChip = ({ label, icon }) => (
  <Chip
    icon={icon}
    style={{ color: "white" }}
    label={label}
    variant="outlined"
  />
);

export default QuickInfoSection;
