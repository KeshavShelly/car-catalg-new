import React, { useEffect, useState } from "react";
import { LOAD_CAR_DETAILS } from "../GraphQL/query";
import { useQuery, gql } from "@apollo/client";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {
  Grid,
  Typography,
} from "@material-ui/core/";
import "../styles/style.css";

export default function Body() {

  const { data } = useQuery(LOAD_CAR_DETAILS);
  const [cardetails, setCarDetails] = useState();
  let cardDataJSONObject;

  useEffect(() => {
    if (data) {
      cardDataJSONObject = data.allCars
      setCarDetails(cardDataJSONObject);
    }
  }, [data]);

  return (
    <div className="MarginTop" >
      <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
      {cardetails && cardetails.map((elem) => (
        <Grid item xs={3} key={elem.id}>
          <Card>
            <CardHeader
              title={`${elem.car}`}
            />
            <CardContent>
              <Typography gutterBottom>
                Model : {elem.car_model}
              </Typography>
              <Typography  gutterBottom>
                Color : {elem.car_color}
              </Typography>
              <Typography  gutterBottom>
                Year : {elem.car_model_year}
              </Typography>
              <Typography  gutterBottom>
                Price : {elem.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
</Grid>
    </div>
  );
}
