export interface ILoginRequest{
email: string
password: string
}

export interface IError {
    message: string 
    statusCode: number
    show: boolean
}