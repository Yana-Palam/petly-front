import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from 'components/Common/Button/Button';

// const inputs = [
//   { type: 'email', name: 'email', label: 'Email' },
//   { type: 'password', name: 'password', label: 'Password' },

//   { type: 'password', name: 'confirmPassword', label: 'Confirm Password' },

//   { type: 'text', name: 'name', label: 'Name' },

//   { type: 'text', name: 'city', label: 'City, region' },

//   { type: 'text', name: 'phone', label: 'Mobile phone' },
// ];

const RegistrationForm = () => {
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

  const validationSchema = yup.object().shape({
    email: yup.string().email().required().min(10).max(63),
    password: yup.string().min(7).max(32).required(),
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
      }),
    name: yup.string().required(),
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

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: event => {
      console.log(event);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        {/* {inputs.map(({ type, name, label }) => (
          <TextField
            key={name}
            type={type}
            name={name}
            label={label}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            variant="outlined"
          />
        ))} */}
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
      </div>
      <div>
        <TextField
          type="text"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
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
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegistrationForm;
