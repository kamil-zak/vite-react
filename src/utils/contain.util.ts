interface ISize {
  width: number;
  height: number;
}

export const contain = (imageRatio: number, { width, height }: ISize) =>
  imageRatio >= width / height ? { width, height: width / imageRatio } : { width: height * imageRatio, height };
