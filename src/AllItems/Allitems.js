import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Color from "../contants/Color";
const Allitems = (props) => {

  return (
    <View style={styles.itemContainer}>
      <View style={{flexDirection :'row', alignItems :"center",justifyContent : 'space-between', borderBottomColor : 'black', borderBottomWidth : 2,}} >
        <Text>Product</Text>
        <Text>Price</Text>
        <Text>Stock</Text>
      </View>
      <FlatList
        data={props.data}
        keyExtractor={(item) => item.id.toString()} // Ensure id is converted to string
        renderItem={({ item }) => ( // Correct destructuring
          <View style={[styles.wrapperContainer , {backgroundColor : item.stock >= 7 ? Color.lightGreen : Color.lightRed}]}  >
            <Text>
            <FontAwesome name="arrow-up" size={15}  color={ item.stock >= 7 ? Color.darkGreen : Color.darkRed} />
              {item.name}
              </Text>
            <Text>{item.price} ₹</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
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
  wrapperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2, // Shadow effect for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
