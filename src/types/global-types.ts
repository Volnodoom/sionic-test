export type DefaultParamsForTheme = {
  font: {[x: string]: string},
  color: {[x: string]: string},
  width: {[x: string]: string},
  padding: {[x: string]: string},
}

export type ThemeParameters = {
  theme: DefaultParamsForTheme
}

export type ActionType <T> = {
  type: string,
  payload: T,
}


export type CategoryType = {
  id: number,
  name: string,
}
