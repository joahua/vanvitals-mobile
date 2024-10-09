import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { useAppContext } from '../context/AppContext';

type LoginScreenProps = {
  navigation: FrameNavigationProp<any, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const { setUser } = useAppContext();

  const handleLogin = () => {
    // Implement native iOS and Google identity login here
    // For now, we'll just simulate a successful login
    setUser({ id: '1', name: 'John Doe', email: 'john@example.com' });
    navigation.navigate('Home');
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Caravan Trip Tracker
      </label>
      <button
        style={styles.button}
        onTap={handleLogin}
      >
        Login with iOS / Google
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
  },
});