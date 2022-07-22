import firestore from "@react-native-firebase/firestore";
import Preference from "react-native-preference";
export const addUserData = async (id, phone, email) => {
  await firestore().doc(`users/${id}`).set({
    id,
    email,
    phone,
  });
};
export const getAllUsers = async () => {
  const rawUsers = await firestore().collection(`users`).get();
  const users = [];
  rawUsers.forEach((rawUser) => {
    Preference.get("userID") != rawUser.id && users.push(rawUser.data());
  });
  return users;
};
