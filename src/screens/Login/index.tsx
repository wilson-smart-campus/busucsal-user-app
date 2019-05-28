import React from "react";
import { StyleSheet, KeyboardAvoidingView, Button } from "react-native";
import { COLORS } from "../../resources/colors";
import { SPACER } from "../../util/consts";
import { KEYBOARD_BEHAVIOR } from "../../resources/keyboard";
import { NavigationScreenProp } from "react-navigation";

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

interface IProps {
  navigation?: NavigationScreenProp<{}>;
}

interface IState {
  email: string;
  password: string;
  isSubmitting: boolean;
  isDisabled: boolean;
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isSubmitting: false,
      isDisabled: true,
    };
  }

  login = () => {};

  render() {
    const { isDisabled } = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={KEYBOARD_BEHAVIOR}
      >
        <Button title="Logar" onPress={this.login} disabled={isDisabled} />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
