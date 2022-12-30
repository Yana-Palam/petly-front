import PropTypes from 'prop-types';

export default function EmailTo({ email, children }) {
  return <a href={`mailto:${email}`}>{children}</a>;
}

EmailTo.propTypes = {
  phone: PropTypes.string,
  children: PropTypes.node.isRequired,
};
