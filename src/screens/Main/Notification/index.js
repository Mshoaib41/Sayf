import { FlatList, SafeAreaView, View } from "react-native";
import React from "react";
import Header from "../../../../components/Header";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import Colors from "../../../../util/colors";
import CustomText from "../../../../components/CustomText";
import ProfilePicture from "../../../../components/ProfilePicture";
import { NOTIFICATIONS_DATA } from "../../../../util/Data";
import { formatTextWithEllipsis } from "../../../../util/helper";
import colors from "../../../../util/colors";
const Notification = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Header title="Notifications" />
      <FlatList
        data={NOTIFICATIONS_DATA}
        contentContainerStyle={{ padding: verticalScale(5) }}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProfilePicture source={{ uri: item.user_image }} />
              <CustomText
                marginLeft={10}
                label={formatTextWithEllipsis(item.text, 27)}
                textStyle={styles.notifcationTitle}
              />
            </View>
            <CustomText label={item.createdAt} textStyle={styles.time} />
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
    padding: verticalScale(10),
  },
  itemContainer: {
    backgroundColor: Colors.gray30,
    borderRadius: "13@vs",
    paddingVertical: "10@vs",
    paddingHorizontal: "10@vs",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  time: {
    fontSize: verticalScale(10),
    color: colors.gryColor,
  },
  notifcationTitle: {
    fontSize: verticalScale(13),
    color: colors.black,
  },
});
