import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '../util/colors';
import Icon from './Icons';
const TextInputComponent = ({placeholder}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.seacrhIconContainer}>
        <Icon
          size={verticalScale(22)}
          family={'EvilIcons'}
          name="search"
          color={colors.black}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.black}
        />
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '85%',
    alignSelf: 'center',
    borderRadius: verticalScale(10),
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  seacrhIconContainer: {
    backgroundColor: colors.gray,

    borderRadius: verticalScale(10),
    paddingVertical: verticalScale(10),
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '84%',
  },
});
