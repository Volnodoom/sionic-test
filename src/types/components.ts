export interface ButtonProps {
  $back?: string,
  $color?: string,
  $size?: string,
  $padding?: string,
  $radius?: string,
  $border?: string,
}

export interface CategoryProps {
  $numericCalor: 1 | 2 | 3 | 4,
}

export interface ClassNameProp {
  className?: string,
}

export interface ContentWrapperProps {
  $bottom: string,
}

export interface MainTitleProps {
  $bottom: string,
}

export interface InputNumberProps {
  type: string,
  max: number,
  id: string,
  name: string,
};

export interface BasketCardGridProps {
  $isDetailsEmpty?: boolean,
};

export interface DeliveryFieldsetParam {
  $bottom?: string,
}

export interface DeliveryInputProps {
  type?: string,
}

export interface DeliveryList {
  isHidden?: boolean,
}

export interface ButtonTypesProp {
  type: 'submit' | 'button',
}

export interface ModalProp {
  isActive?: boolean,
}
