import "./App.css";
import { Container, Grid } from "@mui/material";
import JobCard from "./components/job-card";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState, useRef } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Lexend", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  const [jobsList, setJobsList] = useState([]);
  console.log("jobsList: ", jobsList);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const loadMoreJobs = async () => {
    console.log("Fetching data for page:", page);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: (page - 1) * 10, // Calculate offset based on current page
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const result = await response.json();
      setJobsList((prevJobsList) => [...prevJobsList, ...result?.jdList]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Page updated:", page);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Intersection detected!");
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    loadMoreJobs();

    return () => observer.disconnect();
  }, [page]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {jobsList.map((job, index) => (
            <Grid item xs={2} sm={4} md={4} key={job.jdUid}>
              <JobCard job={job} />
            </Grid>
          ))}
          <div ref={loader} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
