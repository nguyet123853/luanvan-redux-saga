import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        //materialpalette - gg
        primary: "#FFA000",
        secondary: "#BDBDBD",
        error: "#F44336"
    },
    typoraphy: {
        fontFamily: "Roboto" //font mac dinh
    },
    shape: {
        borderRadius: 4,
        blackroundColor: "#FFEB3B",
        textColor: "#FFFFFF",
        border: "#CCCCCC"
    }
})
export default theme;