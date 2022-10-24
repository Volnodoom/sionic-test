import * as S from "./footer.style";
import {ReactComponent as IconFacebook} from 'assets/img/svg/icon-facebook.svg'
import {ReactComponent as IconVk} from 'assets/img/svg/icon-vk.svg'
import {ReactComponent as IconInst} from 'assets/img/svg/icon-inst.svg'
import {ReactComponent as IconGoogle} from 'assets/img/svg/icon-google-play.svg'
import {ReactComponent as IconApple} from 'assets/img/svg/icon-app-store.svg'
import { P } from "components/styled";

const Footer = () => {
  return(
    <S.Footer>
      <S.LogoLike>React</S.LogoLike>
      <S.CheckResourcesBox>
        <div>
          <S.ClarificationParagraph>Присоединяйтесь к нам</S.ClarificationParagraph>
          <S.SocialBox>
            <S.SocialLink href="/"><IconFacebook /></S.SocialLink>
            <S.SocialLink href="/"><IconVk /></S.SocialLink>
            <S.SocialLink href="/"><IconInst /></S.SocialLink>
          </S.SocialBox>
        </div>

        <div>
          <S.ClarificationParagraph>Устанавливайте приложение</S.ClarificationParagraph>
          <S.DownloadBox>
            <S.AppLink href="/"><IconGoogle /></S.AppLink>
            <S.AppLink href="/"><IconApple /></S.AppLink>
          </S.DownloadBox>
        </div>
      </S.CheckResourcesBox>

        <S.SiteInfoDiv>
          <P>© Sionic</P>
          <S.SiteInfoAnchor href="/">Правовая информация</S.SiteInfoAnchor>
          <S.SiteInfoAnchor href="/">Политика конфиденциальности</S.SiteInfoAnchor>
        </S.SiteInfoDiv>
    </S.Footer>
  )
}

export default Footer;
