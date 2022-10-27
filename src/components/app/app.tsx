import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import * as S from './app-style';
import PageWrapper from 'components/layout/page-wrapper/page-wrapper';
import OrderHistory from 'pages/order-history/order-history';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <PageWrapper>
        <OrderHistory />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
