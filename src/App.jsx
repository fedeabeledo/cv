import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Presentation } from "./Presentation";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack>
      <Presentation />
    </Stack>
  );
}

export default App;
