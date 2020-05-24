import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { level, children, className } = props;
  
  const TagName = `h${level}`;

  return (
    <TagName
      {...props}
      className={`mt-4 mb-2 ${className}`}
    >
      {children}
    </TagName>
  );
}

Header.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  level: 1,
}

export default Header;
