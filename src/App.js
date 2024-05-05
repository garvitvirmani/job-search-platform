import "./App.css";
import { Container } from "@mui/material";
import JobCard from "./components/job-card";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Lexend", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <JobCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
