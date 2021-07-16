import { gql } from "@apollo/client";
import client from "./apollo-client";

export async function getAll() {
  const { data } = await client.query({
    query: gql`
      query Rocket {
        launchesPast(limit: 10) {
          id
          launch_date_local
          links {
            flickr_images
          }
          rocket {
            rocket_name
            first_stage {
              cores {
                land_success
              }
            }
          }
          details
        }
      }
    `,
  });
  return data;
}

export async function getById(id) {
  const { data } = await client.query({
    query: gql`
      query Launch($id : ID!) {
        launch(id: $id) {
          id
          launch_date_local
          links {
            flickr_images
          }
          rocket {
            rocket_name
            first_stage {
              cores {
                land_success
              }
            }
          }
          details
          mission_name
        }
      }
      
    `,
    variables: {
      id
    }
  });
  return data;
}
