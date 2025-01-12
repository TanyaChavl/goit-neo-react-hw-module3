import PropTypes from "prop-types";
import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
    const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .required("Required")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in format XXX-XX-XX"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };
    
    return (
        <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="phonebook-form">
        <label className="input-label">
            Name
            <div>
              <Field name="name" type="text" className="form-field"/>
            <ErrorMessage name="name" component="div" className="text-error" />
            </div>
        </label>
        <label className="input-label">
            Number
            <div>
              <Field name="number" type="text" className="form-field"/>
              <ErrorMessage name="number" component="div" className="text-error"/>
            </div>
        </label>
        <button type="submit" className="form-button">Add contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;