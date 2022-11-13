import { useAppDispatch } from "hooks/useAppDispatch";
import { Fragment, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCategories } from "store/api-actions";
import * as selector from "store/orm-modules-data/orm.selectors";
import { CategoryType } from "types/global-types";
import GeneralUtils from "utils/general-utils";
import * as S from "./filtration.style";

const Filtration = () => {
  const categoryList = useSelector(selector.getCategory) as CategoryType[];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

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

export default memo(Filtration);
