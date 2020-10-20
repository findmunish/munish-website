export interface textObjInterface {
    headerText: string;
    bodyText: string
    fontColor: string;
    fontSize: string;
  }
  export interface cardInterface {
    imageObj: {
        imageUrl: string;
        altText: string;
    },
    title: textObjInterface,
    desc: textObjInterface
}