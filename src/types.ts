export interface AppProps{
    message?:MessageType
}

export interface MessageType{
    id:number,
    name:string,
    body:string,
    createdAt:Date,
    type:string
}