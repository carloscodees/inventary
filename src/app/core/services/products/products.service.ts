import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    
    return this.http.get(`${environment.API}/products?per_page=100`);
  }
  getSingleProduct(id: string){
    return this.http.get(`${environment.API}/products/${id}`);
  }
  getAllCategories(){
    return this.http.get(`${environment.API}/products/categories`);
  }
  


  createProduct(products: any){
   
    const product =  {
      name: products.name,
      type: "simple",
      regular_price: products.price,
      price: products.price,
      description: products.description,
      short_description: products.description,
      categories: [
        {
          id: products.category
        }
      ]
    };
   

    return this.http.post(`${environment.API}/products`, product);

  }

  deleteProduct(id: any){
      return this.http.delete(`${environment.API}/products/${id}`)
  }
}

