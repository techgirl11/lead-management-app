import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const Theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: blue,
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export default Theme;