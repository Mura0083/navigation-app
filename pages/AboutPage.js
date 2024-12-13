import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function AboutPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image source={require("../assets/dog.png")} style={styles.image} />
          <Text style={styles.text}>
            Bark woof wagging tail zoomies pupper snoot boop doggo fluffer. Paws
            on the couch, no regrets, belly rubs required for optimal happiness.
            Chew toy destroyer, king of fetch, napper extraordinaire. Such a
            good boy, treat plz, wag wag barkaroo. Sniff the ground, investigate
            all the smells, chase tail like it’s the enemy. Big stretch on the
            carpet, roll over for belly scratches, tongue out, blep. Midnight
            howls, protector of the realm, squirrel watcher, mailman adversary.
            Long walkies, head out the car window, ears flapping in the wind,
            life is good. Loyal companion, best friend, unconditional love in
            fur form. Bark, bark, repeat.
          </Text>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go to Home Page</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("List")}
            style={[styles.button, styles.secondaryButton]}
          >
            <Text style={styles.buttonText}>Go to List Page</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  image: {
    width: 400,
    height: 500,
    borderRadius: 8,
    borderWidth: 3,
    marginBottom: 16,
    borderColor: "#eee",
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    padding: 16,
    marginTop: 16,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
