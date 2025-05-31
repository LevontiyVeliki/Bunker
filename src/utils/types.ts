export type THTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IRequestOptions {
  method: THTTPMethod;
  credentials?: boolean;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export type TUser = 
{
  username: string,
  password: string
}

export type TCard =
{
  name: string,
  sex: string,
  age: string
  bodytype: string,
  personality: string,
  profession: string,
  health: string,
  hobby: string,
  phobia: string,
  largeInventory: string,
  backpack: string,
  additionalInformation: string
  specialFeature: string
}

export type TResponse =
{
  status: string,
  message: string
}


export interface IAuthRegInputProps
{
  field: keyof TUser;
  placeholder?: string;
  value: string;
  updateField: (field: keyof TUser, value: string) => void
}

export interface IAuthRegButtonProps
{
  loading: boolean,
  onCLick: () => void
}

export interface ICardInputProps
{
  field: keyof TCard;
  placeholder?: string;
  value: string;
  updateField: (field: keyof TCard, value: string) => void
}

export interface ICardButtonProps
{
  loading: boolean,
  onCLick: () => void
}