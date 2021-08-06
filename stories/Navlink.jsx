import PropTypes from 'prop-types';



export const Navlink = ({ active, text, ...props }) => {
  const mode = active ? "bg-gray-900 text-white" : 'text-gray-300 hover:text-gray-700';
  return (
    <div className="pflex space-x-4 justify-self-center">
      <a
        className={['px-3 py-2 rounded-md text-sm font-medium', mode].join(' ')}
        {...props}
      >
        {text}
      </a>
    </div>
  );
};

Navlink.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Navlink.defaultProps = {
  active: false,
  onClick: undefined,
};