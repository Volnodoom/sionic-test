import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import * as S from './app-style';
import Catalog from 'components/blocks/catalog/catalog';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <Catalog />
    </ThemeProvider>
  );
}

export default App;
