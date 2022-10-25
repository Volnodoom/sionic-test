import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import * as S from './app-style';
import PageWrapper from 'components/layout/page-wrapper/page-wrapper';
import Catalog from 'components/blocks/catalog/catalog';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <PageWrapper>
        <Catalog />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
