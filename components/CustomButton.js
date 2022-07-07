import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';

import Icon from './Icons';
import colors from '../util/colors';
const CustomButton = ({
  label,
  onPress,
  buttonIcon,
  containerStyle,
  innerButtonStyle,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <LinearGradient
          start={{x: -0.4, y: 0.1}}
          end={{x: 0.8, y: 0.1}}
          colors={['#00984B', '#6BE7A7']}
          style={styles.innerContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.label}>{label}</Text>
            <View style={{marginLeft: verticalScale(20)}}>
              {!buttonIcon ? (
                <View />
              ) : (
                <Icon
                  size={verticalScale(20)}
                  family={'AntDesign'}
                  name="arrowright"
                  color={colors.white}
                />
              )}
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = ScaledSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    width: '90%',
    shadowColor: colors.boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 16,
    justifyContent: 'center',
  },
  innerContainer: {
    borderRadius: '10@s',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: '10@s',
  },
  label: {
    fontSize: '15@vs',
    fontFamily: 'PoppinsRegular',
    color: colors.backgroundColor,
    textAlignVertical: 'center',
  },
});
