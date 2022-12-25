import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';

import Button from 'components/Common/Button/Button';
import {
  Form,
  Input,
  Title,
  Text,
  RegisterLink,
  InputWrp,
} from './LoginForm.styled';

const inputs = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];

const emailRegExp = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

const LoginForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required().min(10).max(63).matches(emailRegExp),
    password: yup.string().min(7, 'min 7').max(32).required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: event => {
      console.log(event);
    },

    validateOnMount: false,
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Login</Title>
        <InputWrp>
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
          {/* <Input
            type="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          /> */}

          {/* {inputs.map(({ type, name, label }) => (
            <>
              <Input
                key={name}
                type={type}
                name={name}
                placeholder={label}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <ErrorMessage name="email" />
            </>
          ))} */}
        </InputWrp>
        <Button
          type="submit"
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#F59256s',
          }}
        >
          Login
        </Button>
        <Text>
          Don't have an account?{' '}
          <RegisterLink to="/register">Register</RegisterLink>
        </Text>
      </Form>
    </>
  );
};

export default LoginForm;

// import { Formik, Form, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// import Button from 'components/Common/Button/Button';
// import { Input, Title, Text, RegisterLink, InputWrp } from './LoginForm.styled';

// export const LoginForm = () => {
//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   const validationSchema = yup.object().shape({
//     email: yup.string().email().required().min(10).max(63),
//     password: yup.string().min(7, 'min 7').max(32).required(),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };
//   return (
//     <Formik
//       onSubmit={handleSubmit}
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//     >
//       <Form>
//         <Input type="email" name="email" />
//         <ErrorMessage name="email" />
//         <Input type="password" name="password" />
//         <ErrorMessage name="password" />
//         <Button
//           type="submit"
//           style={{
//             width: '100%',
//             height: '48px',
//           }}
//         >
//           Login
//         </Button>
//         <Text>
//           Don't have an account? <RegisterLink to="/">Register</RegisterLink>
//         </Text>
//         ;
//       </Form>
//     </Formik>
//   );
// };

// export default LoginForm;
