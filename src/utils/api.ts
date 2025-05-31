import { METHODS } from "http";
import { IRequestOptions, TCard, TResponse } from './types';
import { getCookie } from "./session_token";

export const signup = async (username: string, password: string): Promise<TResponse> =>
{
  const res = request<TResponse>("signup/", {
    method: "POST",
    credentials: true,
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  return res
}

export const login = async (username: string, password: string): Promise<TResponse> =>
{
  const res = request<TResponse>("login/", {
    method: "POST",
    credentials: true,
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  return res
}

export const getCards = async (): Promise<TCard[]> =>
{
  const res = request<TCard[]>("my_cards/", {
    method: "GET",
    credentials: true,
    headers: {
      "X-CSRFToken": getCookie("csrftoken") || ""
    }
  })
  return res
}


export const craeteCard = async (name: string): Promise<TResponse> =>
{
  const res = request<TResponse>("create_card/", {
    method: "POST",
    credentials: true,
    headers: {
      "X-CSRFToken": getCookie("csrftoken") || ""
    },
    body: JSON.stringify({
      name: name,
    })
  })
  return res
}


export async function request<T = any>(
  url: string,
  { method, credentials = true, headers = {}, body = null }: IRequestOptions
): Promise<T> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
    method,
    credentials: credentials ? 'include' : 'omit',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body,
  });

  console.log(response.ok)

  const contentType = response.headers.get('Content-Type');
  const isJson = contentType?.includes('application/json');

  let data: any = null;
  try {
    data = isJson ? await response.json() : await response.text();
  } catch (err) {
    console.warn('Ошибка парсинга ответа:', err);
  }
  if (!response.ok) {
    const errorMessage = data?.message || response.statusText || 'Неизвестная ошибка';
    throw new Error(`HTTP ${response.status}: ${response.ok}`);
  }

  return data as T;
}
