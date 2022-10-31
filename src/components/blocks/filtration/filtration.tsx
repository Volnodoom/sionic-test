import { Fragment } from "react";
import { useSelector } from "react-redux";
import * as selector from "store/selectors/selectors";
import { CategoryType } from "types/global-types";
import GeneralUtils from "utils/general-utils";
import * as S from "./filtration.style";

const Filtration = () => {
  const categoryList = useSelector(selector.getCategory) as CategoryType[];

  return(
    <S.Form>
      {
        categoryList.map((line) => {
          const randomNumber = GeneralUtils.getRandomColor(1, 4);
          return (
            <Fragment key={`${line.name}-${line.id}-input`}>
              <S.Input
                $numericCalor={randomNumber}
                type="checkbox"
                name={line.name}
                id={`${line.name}-${line.id}`}
              />
              <S.Label
                $numericCalor={randomNumber}
                htmlFor={`${line.name}-${line.id}`}
              >
                {line.name}
              </S.Label>
            </Fragment>
          )
        })
      }
    </S.Form>
  )
}

export default Filtration;
