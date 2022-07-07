import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon';
import CustomText from './CustomText';
import Images from '..//assets/images';
import {ScaledSheet} from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
          <Pressable onPress={()=>navigation.navigate('HomeStack')}>
           <Icon source={Images.arrow_left}  />
           </Pressable>
           <CustomText fontSize={18} label={title} />
            <View />
    </View>
  )
}

export default Header

const styles = ScaledSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  }
})