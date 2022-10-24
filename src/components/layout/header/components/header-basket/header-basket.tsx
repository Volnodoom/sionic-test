import {ReactComponent as IconBasket} from 'assets/img/svg/icon-basket.svg'
import * as S from './header-basket.style';

const HeaderBasket = () => {
  return(
    <S.AnchorHead href="/basket">
      <IconBasket style={S.IconStyle}/>
      <S.SpanHeadCounter>10+</S.SpanHeadCounter>
    </S.AnchorHead>
  )
}

export default HeaderBasket;
