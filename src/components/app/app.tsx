import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import * as S from './app-style';
import Advertizing from 'components/blocks/advertizing/advertizing';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <Advertizing />
    </ThemeProvider>
  );
}

export default App;
