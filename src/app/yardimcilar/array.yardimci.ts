export const arrayElemanSil = (array: Array<any>, eleman: any): Array<any> => {
  return array.filter(el => {
    return el !== eleman;
  });
};
