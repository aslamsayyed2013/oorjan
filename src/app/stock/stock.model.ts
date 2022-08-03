export interface Response{
  pagination:string,
  data:Data[]
}

export interface Data{
  open:number,
  high:number,
  low:number,
  close:number,
  date:string
}
