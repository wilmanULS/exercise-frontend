import wanqaraApi from './wanqaraApi';

export default class WanqaraService {
  async createProduct(data: any) {
    try {
      const productData = new FormData();
      productData.append('price', data.price);
      productData.append('name', data.name);
      productData.append('observation', data.observation);
      productData.append('size', data.size);
      const response = await wanqaraApi.post('/products', productData);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async listProducts() {
    try {
      const response = await wanqaraApi.get('/products');
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getProductById(id: any) {
    try {
      const response = await wanqaraApi.get('/products/' + id);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async updateProduct(id: any, data: any) {
    try {
      const response = await wanqaraApi.patch(
        '/products/' + id + '/edit',
        data
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async login(user: string, password: string) {
    try {
      const loginData = new FormData();
      loginData.append('email', user);
      loginData.append('password', password);
      const response = await wanqaraApi.post('/login', loginData);
      sessionStorage.setItem('token', response.data.token);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
