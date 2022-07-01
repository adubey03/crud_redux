import React, { useState, useEffect } from "react";
import { Modal, Typography, Grid, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, state, setState }) {
  const handleClose = () => {
    setOpen(false);
    setData({
      name: "",
      budget: "",
      deadline: new Date(),
    });
    setState(null);
  };
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    budget: "",
    deadline: new Date(),
  });

  useEffect(() => {
    if (state) {
      setData({ ...state });
    }
  }, [state, setData]);

  const submit = () => {
    if (!isNaN(data.id)) {
      dispatch({
        type: "UPDATE",
        data: { name: data.name, budget: data.budget, deadline: data.deadline },
        index: data.id,
      });
    } else {
      dispatch({ type: "ADD", data });
    }
    setData({ name: "", budget: "", deadline: new Date() });
    setOpen(false);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((item) => ({ ...item, [id]: value }));
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          sx={style}
          item
          container
          alignItems={"center"}
          justifyContent={"center"}
          xs={12}
          spacing={2}
          component="form"
          onSubmit={submit}
        >
          <Grid item xs={12}>
            <Typography variant="h5" textAlign={"center"}>
              {!isNaN(data.id) ? "Update " : "Add a "} Project
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Project Name"
              id="name"
              value={data.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Project Budget"
              fullWidth
              value={data.budget}
              id="budget"
              onChange={(e) => {
                if (!isNaN(e.target.value)) handleChange(e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                id="deadline"
                value={data.deadline}
                onChange={(date) =>
                  handleChange({ target: { id: "deadline", value: date } })
                }
                label={"Project Deadline"}
                renderInput={(params) => (
                  <TextField required fullWidth {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Button type="submit" fullWidth variant="contained" color="primary">
              {!isNaN(data.id) ? "Update" : "Add"}
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
