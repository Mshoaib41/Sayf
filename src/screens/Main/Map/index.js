import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomMap from '../../../../components/Map';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../../../components/CustomText';
import Button from '../../../../components/Button';
import colors from '../../../../util/colors';

import TextInputComponent from '../../../../components/TextInput';
import { verticalScale } from 'react-native-size-matters';
const Map = () => {
  const [marker, setMarker] = useState(null);
  const [region, setRegion] = useState(null);
  return (
    <SafeAreaView style={{flex: 1, marginTop:verticalScale(26)}}>
      <CustomMap
        setMarker={setMarker}
        marker={marker}
        setRegion={setRegion}
        region={region}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex:-1
        }}>
        <View
          style={{
            width: '100%',
            height: '18%',
            backgroundColor: colors.gray,
            opacity: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText
            label="FIND A LOCATION"
            fontFamily={'Poppins-Medium'}
            fontSize={15}
          />
          <TextInputComponent placeholder={'Type Location'} />
        </View>
        <View style={{flex: 1}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Button label={'Custom'} />
          <Button label={'Auto Select'} onPress={() => setRegion(marker)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({});
