import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type TripDetailsScreenProps = {
  navigation: FrameNavigationProp<any, "TripDetails">,
};

export function TripDetailsScreen({ navigation }: TripDetailsScreenProps) {
  return (
    <scrollView style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Trip Details
      </label>
      <textField hint="Trip Name" style={styles.input} />
      <textField hint="Start Date" style={styles.input} />
      <textField hint="End Date" style={styles.input} />
      <button
        style={styles.button}
        onTap={() => {/* Implement photo capture with geolocation */}}
      >
        Add Photo
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.goBack()}
      >
        Save Trip
      </button>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  input: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#2e6ddf",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});