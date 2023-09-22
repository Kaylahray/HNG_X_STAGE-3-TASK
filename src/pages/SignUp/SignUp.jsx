import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Context } from "../../context/Context";

const SignUp = () => {
  const initialValues = {
    email: "",
    userName: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    userName: Yup.string().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Must contain at least 8 characters."),
  });

  const { registerUser } = Context(); // Use useContext to get the context

  const onSubmit = (values, { resetForm }) => {
    const { email, userName, password } = values;
    if (email && password && userName) {
      registerUser(email, password, userName);
      resetForm();
    }
  };

  return (
    <>
      <h2> New User</h2>

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
                  placeholder="e.g @chiomachris@gmail.com"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="inputBox">
                <Field
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="YourName"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="error"
                />
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
                  Register
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUp;
