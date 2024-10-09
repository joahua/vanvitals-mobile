import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { useAppContext } from '../context/AppContext';

type ProfileScreenProps = {
  navigation: FrameNavigationProp<any, "Profile">,
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const { user, setUser } = useAppContext();

  const handleLogout = () => {
    setUser(null);
    navigation.navigate('Login');
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Profile
      </label>
      <label>Name: {user.name}</label>
      <label>Email: {user.email}</label>
      <button
        style={styles.button}
        onTap={() => {/* Implement profile picture upload */}}
      >
        Update Profile Picture
      </button>
      <button
        style={styles.button}
        onTap={() => {/* Implement vehicle transfer */}}
      >
        Transfer Vehicle
      </button>
      <button
        style={styles.button}
        onTap={handleLogout}
      >
        Logout
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
    marginTop: 10,
  },
});