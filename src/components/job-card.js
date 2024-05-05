import { Box, Button, Card, Chip, Paper, Typography } from "@mui/material";
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
        //  backgroundColor: "red",
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
      <Typography
        variant="h4"
        component="h4"
        sx={{ fontSize: "14px", fontWeight: 500 }}
      >
        About Company:
      </Typography>
      <Box>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "13px", color: "#8B8B8B" }}
        >
          Minium Experience
        </Typography>
        <Typography variant="h4" component="h4" sx={{ fontSize: "14px" }}>
          1 years
        </Typography>
      </Box>

      <section style={{ position: "relative" }}>
        <div
          className="fadeout"
          style={{
            position: "absolute",
            bottom: 0,
            height: "8em",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
            }}
          ></div>
        </div>
        <p>
          senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
          vitae est. Mauris placerat eleifend leo.senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        <Button
          color="primary"
          style={{
            textTransform: "none",
            position: "absolute",
            bottom: "1em",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "10000",
          }}
        >
          Show More
        </Button>
      </section>

      <Button
        variant="contained"
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          color: "black",
          backgroundColor: "#55EFC4",
          "&:hover": {
            backgroundColor: "#55EFC4",
          },
        }}
        disableElevation
      >
        ⚡️ Easy Apply
      </Button>
    </Paper>
  );
};

export default JobCard;
