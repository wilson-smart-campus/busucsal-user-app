import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Form, Item, Input, Label, Button, Container } from "native-base";
import { COLORS } from "../../resources/colors";
import { SPACER } from "../../util/consts";
import images from "../../resources/images";
import { KEYBOARD_BEHAVIOR } from "../../resources/keyboard";
import { NavigationScreenProps } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  loginWrapper: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    padding: 16,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: SPACER * 18,
    height: SPACER * 18,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  formItem: {
    marginLeft: 0,
    paddingBottom: 4,
  },
  label: {
    color: "white",
  },
  btnWrapper: {
    marginTop: SPACER * 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

interface IProps extends NavigationScreenProps<{}> {}

const Login = ({ navigation }: IProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior={KEYBOARD_BEHAVIOR}>
      <Container style={styles.loginWrapper}>
        <View style={styles.logoContainer}>
          <Image source={images.buslogo} style={styles.logoImage} />
        </View>
        <Form>
          <Item floatingLabel style={styles.formItem}>
            <Label style={styles.label}>E-mail</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              blurOnSubmit={false}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={setEmail}
            />
          </Item>
          <Item floatingLabel style={styles.formItem}>
            <Label style={styles.label}>Senha</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              blurOnSubmit={false}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={setPassword}
            />
          </Item>
          <View style={styles.btnWrapper}>
            <Button block>
              <Text style={styles.buttonText}>Entrar</Text>
            </Button>
          </View>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
