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

export default function Hero() {

  const { data } = useQuery(LOAD_CAR_DETAILS);
  const [users, setUsers] = useState();
  let cardDataJSONObject;

  useEffect(() => {
    if (data) {
      cardDataJSONObject = data.allCars
      setUsers(cardDataJSONObject);
    }
  }, [data]);

  return (
    <div >
      {users && users.map((elem) => (
        <Grid item xs={3} key={elem.id}>
          <Card>
            <CardHeader
              title={`${elem.car}`}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Model : {elem.car_model}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Color : {elem.car_color}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Year : {elem.car_model_year}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Price : {elem.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

    </div>
  );
}
