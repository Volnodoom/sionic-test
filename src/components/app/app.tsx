import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import * as S from './app-style';
import PageWrapper from 'components/layout/page-wrapper/page-wrapper';
import Basket from 'pages/basket/basket';
import DeliveryForm from 'components/blocks/delivery-form/delivery-form';
import Delivery from 'pages/delivery/delivery';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <PageWrapper>
        <Delivery />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
