import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../util/colors';
const CustomInput = ({imagePath, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={imagePath} style={styles.imageSize} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.placeholderColor}
      />
    </View>
  );
};

export default CustomInput;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.gray,
    width: '85%',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: '25@s',
    padding: '6@s',
    marginTop: '25@s',
    alignItems:"center"
  },
  imageSize: {
    width: '20@vs',
    height: '20@vs',
    resizeMode: 'contain',
    marginHorizontal: '15@s',
    marginTop: '2@s',
  },
});
