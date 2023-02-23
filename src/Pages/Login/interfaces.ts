export interface ILoginRequest{
email: string
password: string
}

export interface IErrorDialog {
    message: string 
    statusCode?: number
    show: boolean
}

export interface IMessageDialog {
    title: string
    message: string 
    show: boolean
}
export interface ILink {
  [key: string]: {
      href: string;
      type: string;
  };
}
export interface IApiKey {
   id?: number
   name: string,
   expireAt: string,
   createAt: string,
   links?: ILink
}