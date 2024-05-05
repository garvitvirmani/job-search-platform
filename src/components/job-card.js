import { Box, Chip, Paper } from "@mui/material";
import React from "react";

const JobCard = () => {
  return (
    <Paper
      sx={{ p: "10px", width: "360px", borderRadius: "20px" }}
      elevation={3}
    >
      <Chip label="⏳ Posted 4 days ago" variant="outlined" size="small"></Chip>
    </Paper>
  );
};

export default JobCard;
