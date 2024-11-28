export default class API {
  async get(url: RequestInfo | URL, options?: RequestInit) {
    try {
      const response = await fetch(url, {
        ...options,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // Ignore abort errors as they are expected when component unmounts
        return new Response(JSON.stringify([]));
      }
      throw error;
    }
  }

  async post(url: RequestInfo | URL, options?: RequestInit) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        ...options,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // Ignore abort errors as they are expected when component unmounts
        return new Response(JSON.stringify([]));
      }
      throw error;
    }
  }
}
