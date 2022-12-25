import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from 'components/Common/Button/Button';
import { Form } from '../RegistrationForm.styled';

const StepTwo = ({ next, data, prev }) => {
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

  const stepTwoValidationSchema = yup.object().shape({
    username: yup.string().required(),
    city: yup
      .string()
      .required()
      .matches(cityRegex, 'Error. Example: Brovary, Kyiv'),
    phone: yup
      .string()
      .required()
      .max(13)
      .matches(phoneRegex, 'Phone number is not valid'),
  });
  const formik = useFormik({
    initialValues: data,

    validationSchema: stepTwoValidationSchema,

    onSubmit: event => {
      const username = event.username;
      const city = event.city;
      const phone = event.phone;

      next({ username, city, phone }, true);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        type="text"
        name="username"
        label="Name"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        variant="outlined"
      />
      <TextField
        type="text"
        name="city"
        label="City, region"
        value={formik.values.city}
        onChange={formik.handleChange}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
        variant="outlined"
      />
      <TextField
        type="phone"
        name="phone"
        label="Mobile phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        variant="outlined"
      />
      <Button type="button" onClick={() => prev(formik.values)}>
        Back
      </Button>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default StepTwo;
