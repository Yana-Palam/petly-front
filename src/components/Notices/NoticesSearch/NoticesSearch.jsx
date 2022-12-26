import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { helpers } from 'utils/helpers';
import {
  Form,
  Label,
  Input,
  IconSearch,
  IconClose,
} from './NoticesSearch.styled';
import Box from 'components/Common/Box';
import ButtonIcon from 'components/Common/ButtonIcon';

function NoticesSearch() {
  const [submitBtn, setSubmitBtn] = useState('search');
  const [searchParams, setSearchParams] = useSearchParams();
  const category = useLocation().pathname;
  // const query = searchParams.get('q');

  useEffect(() => {
    console.log(searchParams.q);
  }, [searchParams.q]);

  const validationSchema = yup.object({
    search: yup.string('Enter you search info').trim(),
  });

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit({ search }) {
    if (submitBtn === 'search') {
      const q = helpers.delSpaces(search);
      if (Boolean(q.length > 0)) {
        setSearchParams({ q });
        const obj = { category: category, q };
        console.log(obj);
      }
    }
    setSubmitBtn('search');
    //TODO dispatch
    formik.resetForm();
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Box position="relative">
          <Label htmlFor="search" />
          <Input
            id="search"
            type="text"
            name="search"
            autoFocus
            autoComplete="off"
            onChange={formik.handleChange}
            placeholder="Search"
            value={formik.values.search}
            variant="standard"
            aria-describedby="search info"
          />
          <Box position="absolute" right="10px" top="10px">
            {Boolean(formik.values.search.length > 0) ? (
              <ButtonIcon type="submit" aria-label="search button">
                <IconClose onClick={() => setSubmitBtn('erase')} />
              </ButtonIcon>
            ) : (
              <ButtonIcon type="submit" aria-label="search button">
                <IconSearch /* onClick={() => setSubmitBtn('search')}  */ />
              </ButtonIcon>
            )}
          </Box>
        </Box>
      </Form>
    </>
  );
}

export default NoticesSearch;
