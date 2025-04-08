import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useCallback, useMemo, useState, useEffect } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import axios from "axios";

const ContactForm = () => {
  // State for status feedback
  const [status, setStatus] = useState("");

  // Validation Schema
  const validationSchema = useMemo(
    () =>
      yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Enter a valid email").required("Email is required"),
        contact: yup
          .string()
          .min(10, "Contact number should be at least 10 digits")
          .required("Contact number is required"),
        address: yup.string(), // Optional
        message: yup.string().required("Message is required"),
      }),
    []
  );

  const sendData = async (data) => {
    const response = await axios.post('http://localhost:3000/server.php', data);
    console.log(response.data);
  }

  // Formik for Form Handling
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      address: "",
      message: "",
    },
    validationSchema,
    onSubmit: useCallback((values, { resetForm }) => {
      setStatus("Sending...");
      sendData(values);
      // emailjs
      //   .send(
      //     "service_5lur7ru", // Your EmailJS Service ID
      //     "template_bappulm", // Your EmailJS Template ID
      //     values, // Use Formik values instead of formData
      //     "uMWum8ECeWLklefRl" // Your EmailJS Public Key
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //       setStatus("Email sent successfully!");
      //       resetForm(); // Reset form after success
      //     },
      //     (error) => {
      //       console.error(error.text);
      //       setStatus("Error sending email");
      //     }
      //   );
    }, []),
  });

  // Initialize EmailJS (optional, but good practice)
  useEffect(() => {
    emailjs.init("uMWum8ECeWLklefRl"); // Initialize with Public Key
  }, []);

  return (
    <Card
      elevation={0}
      sx={{
        p: { lg: 4, xs: 2 },
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent component="form" onSubmit={formik.handleSubmit} sx={{ flex: 1 }}>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Name"
              {...formik.getFieldProps("name")}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{ border: "1px solid #9e9e9e" }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Email"
              type="email"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ border: "1px solid #9e9e9e" }}
            />
          </Grid>

          {/* Mobile */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Mobile"
              type="tel"
              {...formik.getFieldProps("contact")}
              error={formik.touched.contact && Boolean(formik.errors.contact)}
              helperText={formik.touched.contact && formik.errors.contact}
              sx={{ border: "1px solid #9e9e9e" }}
            />
          </Grid>

          {/* Address (optional) */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Address (optional)"
              {...formik.getFieldProps("address")}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              sx={{ border: "1px solid #9e9e9e" }}
            />
          </Grid>

          {/* Message */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Your Message..."
              multiline
              rows={2}
              {...formik.getFieldProps("message")}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={{ border: "1px solid #9e9e9e" }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} md={3}>
            <Button fullWidth size="large" variant="contained" type="submit">
              Send
            </Button>
          </Grid>

          {/* Status Feedback */}
          <Grid item xs={12}>
            {status && <p>{status}</p>}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactForm;