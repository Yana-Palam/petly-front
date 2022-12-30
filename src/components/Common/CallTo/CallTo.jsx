import PropTypes from 'prop-types';

export default function CallTo({ phone, children }) {
  return <a href={`tel:${phone}`}>{children}</a>;
}

CallTo.propTypes = {
  phone: PropTypes.string,
  children: PropTypes.node.isRequired,
};
