import Http from './http';

export default class Products extends Http {
  public async list<T>(searchParams: string = ''): Promise<T> {
    const baseUrl = `${this.apiUrl}/api/products`;
    const url = `${baseUrl}${searchParams}`;
    return await this.request({ url });
  }
}
