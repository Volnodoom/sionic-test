import HeaderBasket from "./components/header-basket/header-basket";
import SearchForm from "./components/search-form/search-form";
import {ReactComponent as IconLocation} from 'assets/img/svg/icon-location.svg'
import * as S from "./header.style";

const Header = (): JSX.Element => {
  return(
    <S.Header style={{display: 'flex'}}>
      <S.LogoLike href="/">React</S.LogoLike>
      <IconLocation style={S.IconStyle} />
      <S.PositionSpan>Александровск-Самара</S.PositionSpan>
      <SearchForm />
      <HeaderBasket />
      <a href="/profile">
        <img src="/img/avatar.jpg" width="50" height="50" alt="Your avatar." />
      </a>
    </S.Header>
  )
}

export default Header;
