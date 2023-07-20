import { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "../../const/API_KEY";
import { Button, Container, TextField } from "@mui/material";

const HomePage = (): JSX.Element => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleGetForecast = (event: any) => {
    event.preventDefault();
    const city = event.target.city_name.value;
    setCity(city);

    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key=" +
        "4f2aa6c0f2bf4bc186151423232205" +
         // KEY +
          "&q=" +
          city +
          "&aqi=no"
      )
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <Container>
      <h1>Только Майкоп-App</h1>
      <form onSubmit={handleGetForecast}>
        <TextField
          id="outlined-basic"
          color="info"
          name="city_name"
          label="Введи, пожалуйста, Maykop..."
          style={{ background: "white", width: "80%" }}
          variant="outlined"
        />

        <Button
          type="submit"
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            marginLeft: "10px",
          }}
          color="success"
          variant="contained"
        >
          Go!
        </Button>
      </form>
    </Container>
  );
};

export default HomePage;
