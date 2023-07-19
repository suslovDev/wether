import { Box, Button, Grid, TextField } from "@mui/material";
import Routing from "./pages";
import { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "./const/API_KEY";

const App = (): JSX.Element => {
   return <Routing />
};

export default App;
