interface IRequest {
  url: string,
  method?: string,
  body?: string
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

  public request({ url, method, body }: IRequest) {
    fetch(url, {
      headers: this.headers,
      method: method || 'GET',
      body
    }).then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        const { status, body } = response;
        return { status, body };
      }
    }).catch((e: Error) => console.error(`Error: ${e}`)); 
  }
}
