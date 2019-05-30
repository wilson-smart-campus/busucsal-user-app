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
  // I don't know why is not working
  // tslint:disable-next-line: object-literal-sort-keys
  btnWrapper: {
    marginTop: SPACER * 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  formItem: {
    marginLeft: 0,
    paddingBottom: 4,
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
    alignItems: "center",
    height: SPACER * 18,
    justifyContent: "center",
    resizeMode: "contain",
    width: SPACER * 18,
  },
  label: {
    color: "white",
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
      isDisabled: true,
      isSubmitting: false,

      password: "",
    };
  }

  // Todo login method
  private login = () => 2 + 2;

  public render() {
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
