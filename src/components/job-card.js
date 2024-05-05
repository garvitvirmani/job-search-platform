import { Box, Card, Chip, Paper, Typography } from "@mui/material";
import React from "react";

const JobCard = () => {
  return (
    <Paper
      sx={{
        p: "10px",
        width: "360px",
        borderRadius: "20px",
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px",
      }}
      elevation={3}
    >
      <Chip
        label="⏳ Posted 4 days ago"
        variant="outlined"
        size="small"
        sx={{ width: "107px", fontSize: "9px" }}
      ></Chip>
      <Box display="flex" alignItems="center" gap="10px">
        <Box
          component="img"
          sx={{
            height: 24,
            width: 40,
          }}
          alt="company logo"
          src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
        />
        <Box>
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontSize: "13px", color: "#8B8B8B" }}
          >
            Google
          </Typography>
          <Typography variant="h4" component="h4" sx={{ fontSize: "14px" }}>
            Senior Frontend Digital Developer - Creative
          </Typography>
          <Typography variant="h4" component="h4" sx={{ fontSize: "11px" }}>
            Bengaluru
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h4"
        component="h4"
        sx={{ fontSize: "14px", color: "#4D596A" }}
      >
        Estimated Salary: ₹10 - 14 LPA ⚠️
      </Typography>
    </Paper>
  );
};

export default JobCard;
