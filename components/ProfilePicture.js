import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'

const ProfilePicture = ({source, width, height}) => {
  return (
    <View style={[styles.root, {width:  verticalScale(width || 27), height: verticalScale(height || 27)}]}>
        <Image source={source} resizeMode="cover" style={styles.image} />
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create({
    root: {
        overflow: 'hidden',
        borderRadius: 9999,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})