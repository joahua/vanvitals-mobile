import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { useAppContext } from '../context/AppContext';

type HomeScreenProps = {
  navigation: FrameNavigationProp<any, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  const { user } = useAppContext();

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Welcome, {user.name}!
      </label>
      <button
        style={styles.button}
        onTap={() => navigation.navigate("TripDetails")}
      >
        New Trip
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.navigate("MaintenanceLog")}
      >
        Maintenance Log
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.navigate("Profile")}
      >
        Profile
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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