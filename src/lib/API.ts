export default class API {
  get(url: RequestInfo | URL, options?: any) {
    return fetch(url, {
      ...options,
    });
  }

  post(url: RequestInfo | URL, options?: any) {
    return fetch(url, {
      method: 'POST',
      ...options,
    });
  }
}
