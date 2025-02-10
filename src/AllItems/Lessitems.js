import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Lessitems = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "black",
          borderBottomWidth: 2,
        }}
      >
        <Text>Product</Text>
        <Text>Price</Text>
        <Text>Stock</Text>
      </View>
      <FlatList
        data={props.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          item.stock <= 7 && (
            <View
              style={[
                styles.wrapperContainer,
                { backgroundColor: item.stock <= 7 && "#FFA09B" },
              ]}
            >
              <Text>
                <FontAwesome name="arrow-up" size={18}  color={ item.stock <= 7 && '#B82132'} />
                {item.name}
                </Text>
              <Text>{item.price} ₹</Text>
              <Text>Stock: {item.stock}</Text>
            </View>
          )
        }
      />
    </View>
  );
};

export default Lessitems;

const styles = StyleSheet.create({
  itemContainer: {
    gap: 6,
  },
  wrapperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
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
