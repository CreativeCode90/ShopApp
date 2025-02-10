import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Allitems from "../AllItems/Allitems";
import StockApi from "../Api/StockApi";
import Lessitems from "../AllItems/Lessitems";
import CreateItem from "../AllItems/CreateItem";
const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DeshBoard</Text>
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => setIndex(0)}
          style={({ pressed }) => [
            styles.btn1,
            { backgroundColor: index === 0 ? "#DD88CF" : "#5C7285", transform: [{ scale: pressed ? 0.95 : 1 }] }
          ]}
        >
          <Text style={styles.btn1text}>All Items</Text>
        </Pressable>
        <Pressable
          onPress={() => setIndex(1)}
          style={({ pressed }) => [
            styles.btn1,
            { backgroundColor: index === 1 ? "#DD88CF" : "#5C7285", transform: [{ scale: pressed ? 0.95 : 1 }] }
          ]}
        >
          <Text style={styles.btn1text}>Less Items</Text>
        </Pressable>
        <Pressable
          onPress={() => setIndex(2)}
          style={({ pressed }) => [
            styles.btn1,
            { backgroundColor: index === 2 ? "#DD88CF" : "#5C7285", transform: [{ scale: pressed ? 0.95 : 1 }] }
          ]}
        >
          <Text style={styles.btn1text}>More Items</Text>
        </Pressable>
      </View>
      <View style={styles.minContainer}>
        {index === 0 && <Allitems data={StockApi} />}
        {index === 1 && <Lessitems data={StockApi} />}
        {index === 2 && <CreateItem />}
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
});
