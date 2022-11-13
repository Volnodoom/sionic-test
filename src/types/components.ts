import { ChangeEventHandler } from "react";

export type ButtonProps = {
  $back?: string,
  $color?: string,
  $size?: string,
  $padding?: string,
  $radius?: string,
  $border?: string,
  disabled?: boolean,
}

export type InputModalProps = {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

type ParseInt<T extends `text${number}`> =
  T extends any
  ? (T extends `text${infer Digit extends number}`
    ? Digit
    : never)
  : never


export type ColoRangeProps = { $numericCalor: ParseInt<"text1" | "text2" | "text3" | "text4">};
export type ColorRange = ParseInt<"text1" | "text2" | "text3" | "text4">;

export type ClassNameProp = {
  className?: string,
}

export type ContentWrapperProps = {
  $bottom: string,
}

export type MainTitleProps = {
  $bottom: string,
}

export type InputNumberProps = {
  type: string,
  max: number,
  id: string,
  name: string,
};

export type BasketCardGridProps = {
  $isDetailsEmpty?: boolean,
};

export type DeliveryFieldsetParam = {
  $bottom?: string,
}

export type DeliveryInputProps = {
  type?: string,
}

export type DeliveryList = {
  isHidden?: boolean,
}

export type ButtonTypesProp = {
  type: 'submit' | 'button',
}

export type ModalProp = {
  isActive?: boolean,
}

export interface ObjectWithIdType {
  id: number,
}
