export interface DefaultParamsForTheme {
  font: {[x: string]: string},
  color: {[x: string]: string},
  width: {[x: string]: string},
  padding: {[x: string]: string},
}

export interface ThemeParameters {
  theme: DefaultParamsForTheme
}
