import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import Header from '../layout/header/header';
import * as S from './app-style';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
