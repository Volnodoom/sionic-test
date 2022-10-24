import { HiddenLabel, HiddenSpan } from 'components/styled';
import { defaultTheme } from 'themes/default-theme';
import * as S from './search-form.style';
import {ReactComponent as IconSearch} from 'assets/img/svg/icon-search.svg'

const SearchForm = () => {
  return(
    <S.Form>
      <S.Input id="search" type="text" autoComplete="off" placeholder="Поиск бренда, товара, категории..."/>
      <HiddenLabel htmlFor="search">Поиск</HiddenLabel>
      <S.SearchFormButton
        $back={defaultTheme.color.extremelyLightBlue}
      >
          <IconSearch style={{margin: '0 auto'}}/>
        <HiddenSpan>Начать поиск</HiddenSpan>
      </S.SearchFormButton>
    </S.Form>
  )
}

export default SearchForm;
