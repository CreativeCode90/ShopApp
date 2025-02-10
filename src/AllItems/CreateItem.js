import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CreateItem = () => {
  return (
    <View style={styles.createContainer}>
      <Text style={styles.title}>Create Item</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Enter Product Name" />
        <TextInput style={styles.input} placeholder="Enter Product Price" />
        <TextInput style={styles.input} placeholder="Enter Product Stock" />
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#493D9E",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Add Item
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateItem;

const styles = StyleSheet.create({
  createContainer: {
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    fontSize: 17,
    backgroundColor: "#FFF2AF",
    padding: 10,
  },
  formContainer: {
    gap: 6,
    marginTop: 10,
  },
});
