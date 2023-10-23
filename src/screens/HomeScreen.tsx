//HomeScreen.js
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../redux/colorSlice";

const HomeScreen = () => {
  const color = useSelector((state: any) => state.color.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          dispatch(setColor())
        }}
        style={styles.button}
      >
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => item}
        data={color}
        style={{ marginTop: 15 }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: item,
                height: 150,
                width: 150,
                alignSelf: "center",
                margin: 10,
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});