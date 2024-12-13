import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>This is the home page</Text>
      <View style={styles.buttons}>
        <Button
          title="Go to About Page"
          onPress={() => navigation.navigate("About")}
          color={"blue"}
        />
        <Button
          title="Go to List Page"
          onPress={() => navigation.navigate("List")}
          color={"green"}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
