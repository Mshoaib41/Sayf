import { FlatList, SafeAreaView, View } from "react-native";
import React from "react";
import Header from "../../../../components/Header";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import Colors from "../../../../util/colors";
import CustomText from "../../../../components/CustomText";
import ProfilePicture from "../../../../components/ProfilePicture";
import { NOTIFICATIONS_DATA } from "../../../../util/Data";
import { formatTextWithEllipsis } from "../../../../util/helper";
const Notification = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Header title="Notifications" />
      <FlatList
        data={NOTIFICATIONS_DATA}
        contentContainerStyle={{padding: verticalScale(10)}}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProfilePicture
                source={{ uri: item.user_image }}
              />
              <CustomText marginLeft={10} label={formatTextWithEllipsis(item.text, 25)} />
            </View>
            <CustomText label={item.createdAt} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = ScaledSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    backgroundColor: Colors.gray30,
    borderRadius: "13@vs",
    paddingVertical: "8@vs",
    paddingHorizontal: '13@vs',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical:5,
  },
});
