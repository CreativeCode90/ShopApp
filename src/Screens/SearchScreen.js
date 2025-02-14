import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import StockApi from "../Api/StockApi"; 
import FontAwesome from "react-native-vector-icons/FontAwesome";
const SearchScreen = () => {
  const [productname, setProductname] = useState("");
  const [filteredData, setFilteredData] = useState([]); 

  const SearchData = () => {
    const results = StockApi.filter((item) =>
      item.name.toLowerCase().includes(productname.toLowerCase())
    );
    setFilteredData(results);
    setProductname("");
    console.log(results);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchbar}>
        <TextInput
          placeholder="Search Product"
          value={productname}
          style={styles.searchinput}
          onChangeText={(text) => setProductname(text)}
        />
        <Pressable style={styles.searchbtn} onPress={SearchData}>
          <Text>Search</Text>
        </Pressable>
      </View>

      {/* Display Search Results */}
     <View style={{marginTop : '5%'}} >
     <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.wrapperContainer,
              { backgroundColor: item.stock >= 7 ? "#AEEA94" : "#FFA09B" },
            ]}
          >
            <Text>
              <FontAwesome
                name="arrow-up"
                size={15}
                color={item.stock >= 7 ? "#347928" : "#B82132"}
              />
              {item.name}
            </Text>
            <Text>{item.price} ₹</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noResult}>No products found</Text>
        }
      />
     </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#F5EFFF",
    flex: 1,
    padding: "5%",
    paddingTop: "12%",
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    gap: 10,
  },
  searchinput: {
    backgroundColor: "white",
    padding: 10,
    width: "80%",
    borderRadius: 5,
  },
  searchbtn: {
    backgroundColor: "#DAD2FF",
    padding: 10,
  },
  productItem: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  noResult: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
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
