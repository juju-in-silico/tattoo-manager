'use client';

import StyledComponentsRegistry from './Registry';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {props.children} 
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers
