import './App.css';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Theme from "./Theme";
import SimpleTabs from "./Tabs";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Paper variant="outlined" className="container" spacing={2}>
        <SimpleTabs />
      </Paper>
    </MuiThemeProvider>
  );
}

export default App;
