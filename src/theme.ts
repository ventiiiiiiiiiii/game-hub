import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({ 
  config,
  colors: {
    gray: {
      50:'#faeafd',
      100:'#eac5ed',
      200:'#dca1de',
      300:'#d07cd0',
      400:'#c256bf',
      500:'#a93ea1',
      600:'#832f7b',
      700:'#5e2156',
      800:'#3a1338',
      900:'#170417',
    }
  }
 });

export default theme;