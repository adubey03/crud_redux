import * as React from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

import moment from "moment";
import { useDispatch } from "react-redux";
export default function BasicCard({ data, edit }) {
  const dispatch = useDispatch();
  const copyCard = () => {
    dispatch({ type: "ADD", data });
  };
  const deleteCard = () => {
    dispatch({ type: "DELETE", data: data.id });
  };
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card
        sx={{ width: "100%", backgroundColor: "#95c5f7", borderRadius: "1em" }}
      >
        <CardContent sx={{ padding: "1em" }}>
          <Typography style={{ marginTop: "0.5em" }}>
            Card Name: {data?.name}{" "}
          </Typography>
          <Typography style={{ marginTop: "0.5em" }}>
            Project Budget: {data?.budget}{" "}
          </Typography>
          <Typography style={{ marginTop: "0.5em" }}>
            Project End Date: {moment(data.deadline).format("LLL")}{" "}
          </Typography>
        </CardContent>
        <Divider sx={{ borderBottomWidth: "3px", borderColor: "#934BA8" }} />
        <CardActions>
          <Grid item container xs={12} justifyContent="space-evenly">
            <Grid item>
              <Button
                onClick={() => edit(data.id)}
                sx={{ textTransform: "none", color: "black" }}
              >
                Edit Card
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={deleteCard}
                sx={{ textTransform: "none", color: "black" }}
              >
                Delete Card
              </Button>
            </Grid>
            <Grid item onClick={copyCard}>
              <Button sx={{ textTransform: "none", color: "black" }}>
                Copy Card
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
