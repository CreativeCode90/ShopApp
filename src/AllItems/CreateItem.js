import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

const CreateItem = ({ addNewItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleAddItem = () => {
    if (!name || !price || !stock) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    const newItem = {
      name,
      price: parseFloat(price),
      stock: parseInt(stock),
    };

    addNewItem(newItem);
    Alert.alert("Success", "Item added successfully!");

    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <View style={styles.createContainer}>
      <Text style={styles.title}>Create Item</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Product Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Product Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Product Stock"
          keyboardType="numeric"
          value={stock}
          onChangeText={setStock}
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Item</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    fontSize: 17,
    backgroundColor: "#EFE3C2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  formContainer: {
    gap: 6,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#123524",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
