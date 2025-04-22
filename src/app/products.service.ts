import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor() { }

  generateProducts(n: number): Product[] {
    const products = [];
    const names = ['Phone XL', 'Phone Mini', 'Phone Standard', 'Tablet', 'Laptop', 'Smart Watch', 'Headphones', 'Monitor'];
    const descriptions = [
      'A large phone with one of the best screens',
      'A great phone with one of the best cameras',
      'A standard phone with excellent features',
      'A powerful tablet for work and play',
      'High-performance laptop for professionals',
      'Fitness tracker and smart notifications',
      'Noise-cancelling wireless headphones',
      'Ultra HD monitor with vibrant colors'
    ];
    
    for (let i = 0; i < n; i++) {
      const nameIndex = i % names.length;
      const descIndex = i % descriptions.length;
      
      products.push({
        id: i + 1,
        name: names[nameIndex],
        price: Math.floor(Math.random() * 900) + 100, // Random price between 100-999
        description: descriptions[descIndex]
      });
    }
    
    return products;
  }
}
