import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, label, ...props }) => {
  const mode = primary ? 'text-white bg-green-700 hover:bg-green-600 md:py-4 md:text-lg md:px-10' : 'text-green-700 bg-green-50 hover:bg-green-100 md:py-4 md:text-lg md:px-10';
  return (
    <div className="rounded-md shadow">
      <a
        role="button"
        className={['flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md', mode].join(' ')}
        {...props}
      >
        {label}
      </a>
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
 
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
};
