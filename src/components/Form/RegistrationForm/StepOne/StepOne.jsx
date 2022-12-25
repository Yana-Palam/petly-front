import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from 'components/Common/Button/Button';
import { Form } from '../RegistrationForm.styled';

const StepOne = ({ next, data }) => {
  const stepOneValidationSchema = yup.object().shape({
    email: yup.string().email().required().min(10).max(63).label('Email'),
    password: yup.string().min(7).max(32).required().label('Password'),
    confirmPassword: yup
      .string()
      .min(7)
      .max(32)
      .required()
      .test('checkEqualityPasswords', 'Passwords must match', function (value) {
        if (this?.options?.parent?.password !== value) {
          return false;
        }
        return true;
      })
      .label('Confirm password'),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: stepOneValidationSchema,

    onSubmit: event => {
      const email = event.email;
      const password = event.password;
      const confirmPassword = event.confirmPassword;

      next({ email, password, confirmPassword });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        type="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        variant="outlined"
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        variant="outlined"
      />
      <TextField
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        variant="outlined"
      />
      <Button type="submit">Next</Button>
    </Form>
  );
};

export default StepOne;
