interface Request {
  url: string;
  method?: string;
  body?: string;
}

export default class Http {
  private headers: Headers;
  public apiUrl: string;

  constructor(apiUrl: string, authToken: string) {
    this.apiUrl = apiUrl;
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
  }

  public async request<T>({ url, method, body }: Request): Promise<T> {
    const res = await fetch(url, {
      headers: this.headers,
      method: method || 'GET',
      body
    }).then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).catch((e: Error) => console.error(`Error: ${e}`));
    return res;
  }
}
