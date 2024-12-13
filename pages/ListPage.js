import { FlatList, SafeAreaView, StyleSheet, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ListPage({ navigation }) {
  const handlePress = (itemTitle) => {
    alert(`You selected: ${itemTitle}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of Items</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Pressable
          onPress={() => handlePress(item.title)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#ddd" : "#f9c2ff",
            },
            styles.item,
          ]}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
      <Pressable
      onPress={() => navigation.navigate("Home")}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Home Page</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>Go to About Page</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
  },
  button: {
    padding: 16,
    marginTop: 16,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
