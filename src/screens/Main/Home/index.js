import {TouchableOpacity, ScrollView, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import TextInputComponent from '../../../../components/TextInput';
import colors from '../../../../util/colors';

import Post from '../../../../components/Post';
import DetailPost from '../../../../components/DetailPost';
import SeeAll from '../../../../components/SeeAll.js';
import Icon from '../../../../components/Icons';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('Map')}
        style={styles.mapIconCont}>
        <Icon
          size={verticalScale(16)}
          family={'EvilIcons'}
          name="location"
          color={colors.black}
        />
        <CustomText
          alignSelf="center"
          label="Your Location, Here"
          color={colors.blackColor}
          fontSize={10}
          marginLeft={scale(10)}
        />
      </TouchableOpacity>

      <TextInputComponent
        iconWidth="18%"
        width="100%"
        backgroundColor={colors.gray10}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SeeAll title="Nearby" onPress={() => console.log('Nearby')} />
        <Post />
        <SeeAll title="Followings" onPress={() => console.log('Followings')} />
        <DetailPost />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    padding: '25@ms',
    backgroundColor: colors.backgroundColor,
  },
  mapIconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: '12@vs',
  },
});
