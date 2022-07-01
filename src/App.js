import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Card from "./Card";
import { Button, Grid, Typography } from "@mui/material";
import AddInfo from "./AddInfo";
function App() {
  const [state, setState] = useState(null);
  const { cards } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  console.log(cards);
  const editCard = (id) => {
    const card = cards.find((_, index) => index === id);
    setState({ ...card, id });
    setOpen(true);
  };
  return (
    <div className="App">
      <AddInfo
        open={open}
        setOpen={setOpen}
        state={state}
        setState={setState}
      />
      <Grid
        alignItems="center"
        container
        spacing={2}
        item
        xs={12}
        justifyContent={"center"}
      >
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          sx={{
            backgroundColor: "#45A6ED",
            padding: "1em",
            borderRadius: "1em",
          }}
          justifyContent={"center"}
        >
          <Typography textAlign={"center"} fontSize={"18px"}>
            Total Projects = {cards.length}, Total Budget ={" "}
            {cards.reduce((total, item) => total + Number(item.budget), 0) || 0}
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setState(null);
              setOpen(true);
            }}
          >
            Add a Project
          </Button>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          {cards.map((obj, index) => {
            return (
              <Card data={{ ...obj, id: index }} key={index} edit={editCard} />
            );
          })}
        </Grid>
      </Grid>
      {/*  child 1 state */}
      {/* child 2 state  */}
    </div>
  );
}

export default App;
