import { gql } from "@apollo/client";

export const LOAD_CAR_DETAILS= gql`
  query{
        allCars{
                  id
                  car
		              car_model
                  car_color
                  car_model_year
                  car_vin
                  price
                  availability
                }
            }
`;