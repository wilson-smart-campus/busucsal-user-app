import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import MainAppRoute from "../navigation";

import Theme from "../resources/theme";

const App = () => (
  <PaperProvider theme={Theme}>
    <MainAppRoute />
  </PaperProvider>
);

export default App;
