import { Box, styled } from '@mui/material';
import React from 'react';
import headerImage from '../images/job-bg.png';

const Header = () => {
  const StyleHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    minHeight: '300px',
    backgroundImage: `url(${headerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  });
  return (
    <>
      <StyleHeader></StyleHeader>
    </>
  );
};

export default Header;
