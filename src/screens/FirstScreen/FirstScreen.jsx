import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useThemeStyles from '@hooks/useThemeStyles';
import { MAIN_ROUTE } from '@routes/main';

const createStyleSheet = (theme) =>
  StyleSheet.create({
    title: {
      color: theme.mainTitle,
    },
    button: {
      width: '50%',
      backgroundColor: 'gray',
      marginTop: 10,
      padding: 15,
      alignItems: 'center',
      borderRadius: 15,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });

const FirstScreen = () => {
  const { t } = useTranslation();
  const styles = useThemeStyles(createStyleSheet);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.title}>{t('firstScreen.title')}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(MAIN_ROUTE.SECOND_SCREEN)}
      >
        <Text style={styles.buttonText}>{t('firstScreen.button')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FirstScreen;
