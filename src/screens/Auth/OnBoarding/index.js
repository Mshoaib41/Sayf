import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import CommonStyle from '../../../../util/CommonStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import {OnBoardingData} from '../../../../util/Data';

import {verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../../../util/colors';
import CustomButton from '../../../../components/CustomButton';
import Icon from '../../../../components/Icons';
const OnBoarding = ({navigation}) => {
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  const goBack = () => {
    if (page - 1 >= 0) {
      ref?.current?.goToSlide(page - 1);
      setPage(page - 1);
    } else {
      //   navigation.navigate("Registration");
    }
  };
  const moveForward = () => {
    if (page + 1 <= 2) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
    } else {
      //   navigation.navigate("Registration");
    }
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <AppIntroSlider
        showNextButton={false}
        showDoneButton={false}
        ref={ref}
        data={OnBoardingData}
        keyExtractor={(item, index) => {
          item?.id + index.toString();
        }}
        dotStyle={{marginTop: 100}}
        activeDotStyle={{marginTop: 100}}
        onSlideChange={index => setPage(index)}
        renderItem={({item}) => (
          <>
            <View style={{height: '10%'}} />
            <View style={styles.onBoardingContainer}>
              <Image
                source={item.image}
                style={
                  item.id == 2 ? styles.ImageContainer1 : styles.ImageContainer
                }
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={{height: '10%'}} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity activeOpacity={0.6} onPress={() => goBack()}>
                {/* <Ionicons
                  name="chevron-back-outline"
                  size={30}
                  color={colors.parimay}
                /> */}

                <Icon
                  size={verticalScale(20)}
                  family={'AntDesign'}
                  name="left"
                  color={colors.parimay}
                />
              </TouchableOpacity>
              <View style={{width: verticalScale(40)}} />
              <View style={page == 0 ? styles.dotactive : styles.dotInactive} />
              <View style={page == 1 ? styles.dotactive : styles.dotInactive} />
              <View style={page == 2 ? styles.dotactive : styles.dotInactive} />
              <View style={{width: verticalScale(40)}} />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => moveForward()}>
                <Icon
                  size={verticalScale(20)}
                  family={'AntDesign'}
                  name="right"
                  color={colors.parimay}
                />
              </TouchableOpacity>
            </View>
            <View style={{height: '15%'}} />
            {page == 2 && (
              <CustomButton
                label={'Get Started'}
                onPress={() => navigation.navigate('Login')}
                buttonIcon={true}
              />
            )}
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;
