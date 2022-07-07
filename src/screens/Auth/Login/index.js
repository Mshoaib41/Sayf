import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import AuthWrapper from '../../../../components/AuthWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonStyle from '../../../../util/CommonStyle';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomInput from '../../../../components/CustomInput';
import CustomText from '../../../../components/CustomText';
import colors from '../../../../util/colors';
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../../../assets/images/Image4.png')}
            style={styles.loginImage}
          />
          <AuthWrapper
            buttonIcon={false}
            buttonOnPress={() => navigation.navigate('MainStack')}
            buttonLabel={'Log in'}
            continueLable={'Or continue with'}
            navigation={navigation}
            signTitle={', Sign Up'}
            onPress={() => navigation.navigate('Register')}>
            <CustomInput
              imagePath={require('../../../../assets/images/User.png')}
              placeholder="Youremail@gmail.com"
            />
            <CustomInput
              imagePath={require('../../../../assets/images/Lock.png')}
              placeholder="Password"
              secureTextEntry={true}
            />
            <View style={{marginHorizontal: verticalScale(30)}}>
              <CustomText
                label="Forgot Password?"
                color={colors.textColorGray}
                fontSize={10}
                alignSelf={'flex-end'}
                marginTop={10}
              />
            </View>
          </AuthWrapper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = ScaledSheet.create({
  loginImage: {
    width: '120@vs',
    height: '130@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: '35@s',
    marginRight: '30@s',
  },
});
