import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { Typography } from "@mui/material";
import Textfield from "./Components/FormsUI/Textfield";
import Select from "./Components/FormsUI/Select";
import DateTimePicker from "./Components/FormsUI/DataTimePicker";
import Checkbox from "./Components/FormsUI/Checkbox";
import Button from "./Components/FormsUI/Button";
import countries from "./data/countries.json";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivealDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

function submitValue(value){

  console.log(value)

}

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                submitValue(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid  xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Address Line 1" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine2" label="Address Line 2" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="city" label="City" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="state" label="State" />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Booking information</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker name="arrivealDate" label="Arrival Date" />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>Submit Form</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;

