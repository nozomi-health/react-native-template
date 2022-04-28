import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';
import { useColorScheme } from 'react-native';
import PropTypes from 'prop-types';

import { dark, light } from '@theme/index';

export const ThemeContext = createContext({
  theme: null,
});

const ThemeProvider = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState(isDarkMode ? dark : light);

  useEffect(() => {
    setTheme(isDarkMode ? dark : light);
  }, [isDarkMode]);

  const value = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};

export default React.memo(ThemeProvider);
