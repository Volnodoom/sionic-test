import * as S from "./filtration.style";

const Filtration = () => {
  return(
    <S.Form>
      <S.Input $numericCalor={2} type="checkbox" name={'x1'} id={'x1'} />
      <S.Label $numericCalor={2} htmlFor="x1">x1</S.Label>
      <S.Input $numericCalor={4} type="checkbox" name={'x2'} id={'x2'} defaultChecked/>
      <S.Label $numericCalor={4} htmlFor="x2">x2</S.Label>
      <S.Input $numericCalor={2} type="checkbox" name={'x3'} id={'x3'} />
      <S.Label $numericCalor={2} htmlFor="x3">x3</S.Label>
    </S.Form>
  )
}

export default Filtration;
