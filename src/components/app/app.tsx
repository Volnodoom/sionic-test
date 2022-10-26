import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import * as S from './app-style';
import PageWrapper from 'components/layout/page-wrapper/page-wrapper';
import BasketSummery from 'components/blocks/basket/components/basket-summery/basket-summery';
import BasketCard from 'components/blocks/basket/components/basket-card/basket-card';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <PageWrapper>
        <BasketCard />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
