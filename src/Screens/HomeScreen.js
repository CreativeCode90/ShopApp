import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Allitems from "../AllItems/Allitems";
import StockApi from "../Api/StockApi";
import Lessitems from "../AllItems/Lessitems";
import CreateItem from "../AllItems/CreateItem";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const HomeScreen = (props) => {
  const [index, setIndex] = useState(0);
  const [stockData, setStockData] = useState(StockApi);
  const addNewItem = (newItem) => {
    setStockData((prevStock) => [
      ...prevStock,
      { ...newItem, id: prevStock.length + 1 },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DeshBoard</Text>
        <View style={styles.menubar}>
          <FontAwesome name="search" size={20} onPress={()=>props.navigation.navigate('Search')} />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => setIndex(0)}
          style={({ pressed }) => [
            styles.btn1,
            {
              backgroundColor: index === 0 ? "#DD88CF" : "#5C7285",
              transform: [{ scale: pressed ? 0.95 : 1 }],
            },
          ]}
        >
          <Text style={styles.btn1text}>All Items</Text>
        </Pressable>
        <Pressable
          onPress={() => setIndex(1)}
          style={({ pressed }) => [
            styles.btn1,
            {
              backgroundColor: index === 1 ? "#DD88CF" : "#5C7285",
              transform: [{ scale: pressed ? 0.95 : 1 }],
            },
          ]}
        >
          <Text style={styles.btn1text}>list Items</Text>
        </Pressable>
        <Pressable
          onPress={() => setIndex(2)}
          style={({ pressed }) => [
            styles.btn1,
            {
              backgroundColor: index === 2 ? "#DD88CF" : "#5C7285",
              transform: [{ scale: pressed ? 0.95 : 1 }],
            },
          ]}
        >
          <Text style={styles.btn1text}>More Items</Text>
        </Pressable>
      </View>
      <View style={styles.minContainer}>
        {index === 0 && <Allitems data={stockData} />}
        {index === 1 && <Lessitems data={stockData} />}
        {index === 2 && <CreateItem addNewItem={addNewItem} />}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    padding: "5%",
    paddingTop: "10%",
  },
  title: {
    fontSize: 32,
    textTransform: "capitalize",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 10,
  },
  btn1: {
    backgroundColor: "#B2A5FF",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  btn1text: {
    color: "white",
    fontWeight: "bold",
  },
  minContainer: {
    marginTop: "10%",
    height: "80%",
  },
  header : {
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'space-between'
  },  
  menubar  : {
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'center',
    gap: 5,
  }
});
