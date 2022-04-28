import { useContext, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '@contexts/Theme';

const useThemeStyles = (createStyles) => {
  const { theme } = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  return useMemo(() => createStyles(theme, insets), [theme, insets, createStyles]);
};

export default useThemeStyles;
