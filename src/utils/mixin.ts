import { TypeOfData } from "constants/general";

export const setDimensions = (width: number, height?: number) => {
  if(height) {
    return {
      width: `${width}px`,
      height: `${height}px`,
    }
  }

  return {
    width: `${width}px`,
    height: `${width}px`,
  }
};

export const preventTextOverflow = () => ({
  'text-overflow': 'ellipsis',
  overflow: 'hidden',
  'white-space': 'nowrap',
});

export const setFontValues = (size: number | string, height: number | string) => ({
  'font-size': typeof size === TypeOfData.STRING ? size : `${size}px`,
  'line-height': typeof height === TypeOfData.STRING ? height : `${height}px`,
});
