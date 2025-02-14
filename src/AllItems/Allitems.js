import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Color from "../contants/Color";
import { useNavigation } from "@react-navigation/native";

const Allitems = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.headerRow}>
        <Text>Product</Text>
        <Text>Price</Text>
        <Text>Stock</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.wrapperContainer,
              { backgroundColor: item.stock >= 7 ? Color.lightGreen : Color.lightRed },
            ]}
            onPress={() => {
              navigation.navigate("ProductAbout", { product: item }); // Ensure "ProductAbout" matches navigator
            }}
          >
            <Text>
              <FontAwesome
                name="arrow-up"
                size={15}
                color={item.stock >= 7 ? "green" : "red"} // Fix potential undefined colors
              />
              {` ${item.name}`}
            </Text>
            <Text>{item.price} ₹</Text>
            <Text>Stock: {item.stock}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Allitems;

const styles = StyleSheet.create({
  itemContainer: {
    gap: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  wrapperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
