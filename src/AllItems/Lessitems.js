import { FlatList, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

const Lessitems = ({ data }) => {
  const [selectedStock, setSelectedStock] = useState("Up Stock");
  const [extended, setExtended] = useState(false);

  const stockItems = [
    { id: 1, stock: "Up Stock" },
    { id: 2, stock: "Down Stock" },
  ];

  return (
    <View style={styles.itemContainer}>
      <View style={styles.headerContainer}>
        <Text>Product</Text>
        <Text>Price</Text>

        {/* Dropdown Section */}
        <View style={styles.dropdownMenu}>
          <Text onPress={() => setExtended(!extended)} style={styles.dropdownToggle}>
            Stock
          </Text>
          {extended && (
            <View style={styles.dropmenu}>
              <FlatList
                data={stockItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View
                    style={styles.droplist}
                    onTouchEnd={() => {
                      setSelectedStock(item.stock);
                      setExtended(false);
                    }}
                  >
                    <FontAwesome name="arrow-up" size={20} color={item.stock === 'Up Stock' ? '#347928' : '#B82132'} />
                    <Text style={{ color : item.stock === 'Up Stock' ? '#347928' : '#B82132' }} >{item.stock}</Text>
                  </View>
                )}
              />
            </View>
          )}
        </View>
      </View>

      {/* Filtered Item List */}
      <FlatList
        data={data.filter((item) =>
          selectedStock === "Up Stock" ? item.stock > 7 : item.stock <= 7
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.wrapperContainer,
              { backgroundColor: item.stock <= 7 ? "#FFA09B" : "#AEEA94" },
            ]}
          >
            <Text>
              <FontAwesome
                name={item.stock > 7 ? "arrow-up" : "arrow-down"}
                size={18}
                color={item.stock > 7 ? "#347928" : "#B82132"}
              />
              {` ${item.name}`}
            </Text>
            <Text>{item.price} ₹</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Lessitems;

const styles = StyleSheet.create({
  itemContainer: {
    gap: 6,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  dropdownMenu: {
    position: "relative",
  },
  dropdownToggle: {
    fontWeight: "bold",
    color: "#5C7285",
  },
  dropmenu: {
    backgroundColor: "white",
    padding: 5,
    position: "absolute",
    zIndex: 20,
    width: 120,
    top: "100%",
    left: '-200%',
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  droplist: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    marginBottom: 5,
    padding: 5,
    alignItems: "center",
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
