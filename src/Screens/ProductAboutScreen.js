import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../contants/Color";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ProductAboutScreen = ({ route }) => {
  const { product } = route.params; // Receive product data

  return (
    <View style={styles.productContainer}>
      <Text style={styles.title}>Product Details</Text>

      <View style={styles.productCard}>
        <View style={[styles.colorBar , {backgroundColor : product.stock >= 7 ? Color.lightGreen : Color.lightRed}]}  />
        <View style={styles.productCardContent}>
          <View style={styles.productHeader}>
            <Text style={styles.productName}>{product.name}</Text>
            <FontAwesome name="arrow-up" size={15} color={product.stock >=7 ? Color.darkGreen : Color.darkRed} />
          </View>
          <Text style={styles.productDetail}>Price: {product.price} ₹</Text>
          <Text style={styles.productDetail}>Stock: {product.stock}</Text>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.editButton}>
              <Text>Edit</Text>
            </Pressable>
            <Pressable style={styles.deleteButton}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductAboutScreen;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: Color.lightpurple, 
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  productCard: {
    backgroundColor: "white",
    marginTop: "10%",
    borderRadius: 8,
    elevation: 3,
  },
  colorBar: {
    backgroundColor: Color.lightGreen,
    width: "100%",
    height: 10,
  },
  productCardContent: {
    padding: 15,
  },
  productHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  productDetail: {
    fontSize: 18,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },
  editButton: {
    backgroundColor: Color.lightGreen,
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: Color.lightRed,
    padding: 10,
    borderRadius: 5,
  },
});
