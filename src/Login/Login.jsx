import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
} from "react-native";
import { CTAButton } from "../Components/CTAButton/CTAButton";
import auth from "@react-native-firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigation();

  const goToRegistration = () => {
    nav.push("Register");
  };

  const goToMainFlow = async () => {
    if (email && password) {
      try {
        const response = await auth().signInWithEmailAndPassword(
          email,
          password
        );

        if (response.user) {
          console.log("THIS IS THE USER", response.user);
          nav.replace("Main");
        }
      } catch (error) {
        Alert.alert("Oops, Please check your email and password and try again");
      }
    }
  };

  return (
    <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.contentView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Karen App</Text>
          </View>
          <View style={styles.mainContent}>
            <TextInput
              style={styles.loginTextField}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              inputMode="email"
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <CTAButton title="Login" onPress={goToMainFlow} variant="primary" />
          <CTAButton
            title="Sign Up"
            onPress={goToRegistration}
            variant="secondary"
          />
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginHorizontal: 50,
    backgroundColor: "white",
    paddingTop: 20,
  },
  titleContainer: {
    flex: 1.2,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "200",
  },
  loginTextField: {
    borderBottomWidth: 1,
    height: 60,
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "300",
  },
  mainContent: {
    flex: 6,
  },
});
