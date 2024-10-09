import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type MaintenanceLogScreenProps = {
  navigation: FrameNavigationProp<any, "MaintenanceLog">,
};

export function MaintenanceLogScreen({ navigation }: MaintenanceLogScreenProps) {
  return (
    <scrollView style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Maintenance Log
      </label>
      <textField hint="Maintenance Category" style={styles.input} />
      <textField hint="Date" style={styles.input} />
      <textField hint="Odometer Reading" style={styles.input} keyboardType="number" />
      <textView hint="Notes" style={styles.textArea} />
      <button
        style={styles.button}
        onTap={() => {/* Implement maintenance log saving */}}
      >
        Save Log
      </button>
      <button
        style={styles.button}
        onTap={() => {/* Implement email functionality */}}
      >
        Email Log
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.goBack()}
      >
        Back to Home
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
  textArea: {
    fontSize: 18,
    marginBottom: 10,
    height: 100,
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