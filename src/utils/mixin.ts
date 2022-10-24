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
