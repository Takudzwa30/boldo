"use client";

// Libraries
import { Formik, Form, Field } from "formik";

// Components
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Styles
import Style from "./ContactUs.module.css";

const ContactUs: React.FC = () => {
  // Functions
  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  return (
    <section>
      <Wrapper>
        <div className={Style.cta}>
          <h1>An enterprise template to ramp up your company website</h1>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, isValid }) => (
              <Form className={Style.form}>
                <div className={Style.fieldWrapper}>
                  <Field
                    placeholder="Your email address"
                    name="email"
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && (
                    <div className={Style.error}>{errors.email}</div>
                  )}
                </div>
                <Button disabled={!isValid} version="green" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactUs;
