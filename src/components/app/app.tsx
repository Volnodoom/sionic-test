import { Navigate, Routes, Route } from 'react-router-dom';
import { defaultTheme } from 'themes/default-theme';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from 'constants/path-routes';
import * as S from './app-style';
import PageWrapper from 'components/layout/page-wrapper/page-wrapper';
import OrderHistory from 'pages/order-history/order-history';
import Catalog from 'pages/catalog/catalog';
import Basket from 'pages/basket/basket';
import Delivery from 'pages/delivery/delivery';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />

      <Routes>
        <Route path={AppRoutes.Root} element={<PageWrapper />}>
          <Route index element={<Navigate to={AppRoutes.Catalog} replace/>} />
          <Route path={AppRoutes.Catalog} element={<Catalog />} />
          <Route path={AppRoutes.Basket} element={<Basket />} />
          <Route path={AppRoutes.Delivery} element={<Delivery />} />
          <Route path={AppRoutes.HistoryOrder} element={<OrderHistory />} />
        </Route>
      </Routes>

    </ThemeProvider>
  );
}

export default App;
