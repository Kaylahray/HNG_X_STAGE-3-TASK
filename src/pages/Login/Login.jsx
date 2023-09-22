import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Context } from "../../context/Context";

const LogIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must contain at least 8 characters."),
  });

  const { signInUser } = Context();

  const onSubmit = (values) => {
    const { email, password } = values;
    if (email && password) {
      signInUser(email, password);
    }
  };

  return (
    <>
      <h2>Login</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="form">
              <div className="inputBox">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. chiomachris@gmail.com"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="inputBox">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*********"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="buttonDiv">
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LogIn;
