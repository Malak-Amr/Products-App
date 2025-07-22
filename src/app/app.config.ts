export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  inStock: boolean;
  rating: number;
  image: string;
  description: string;
  discountPercentage?: number;
  brand: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds, IPX8",
    price: 89.00,
    currency: "USD",
    inStock: true,
    rating: 4.69,
    image: "https://www.apple.com/v/airpods/t/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
    description: "An apple mobile which is nothing like apple",
    discountPercentage: 12.96,
    brand: "Apple",
    category: "smartphones",
    stock: 94
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 559.00,
    currency: "USD",
    inStock: true,
    rating: 5,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1604022365000",
    description: "Samsung Galaxy Book is a powerful laptop",
    discountPercentage: 4.15,
    brand: "Samsung",
    category: "laptops",
    stock: 50
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: 289.00,
    currency: "USD",
    inStock: false,
    rating: 4,
    image: "https://th.bing.com/th/id/R.d075ff124f4a00108f90e5d8a68ae60b?rik=uNUhRVnrewMYcg&pid=ImgRaw&r=0",
    description: "Long lasting perfume with amazing scent",
    brand: "Royal_Mirage",
    category: "fragrances",
    stock: 0
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    price: 39.00,
    currency: "USD",
    inStock: true,
    rating: 4.3,
    image: "https://tse1.mm.bing.net/th/id/OIP.FS2k0phpzicLE8FozQlhDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "OPPO F19 is officially announced on April 2021",
    discountPercentage: 17.91,
    brand: "OPPO",
    category: "smartphones",
    stock: 123
  },
  {
    id: 5,
    name: "Wireless Earbuds, IPX8",
    price: 89.00,
    currency: "USD",
    inStock: false,
    rating: 4.5,
    image: "https://www.apple.com/v/airpods/t/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
    description: "MacBook Pro 2021 with mini-LED display",
    discountPercentage: 11.02,
    brand: "Apple",
    category: "laptops",
    stock: 30
  },
  {
    id: 6,
    name: "AirPods Max",
    price: 559.00,
    currency: "USD",
    inStock: true,
    rating: 5,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1604022365000",
    description: "Strong long-lasting masculine fragrance",
    brand: "Fog",
    category: "fragrances",
    stock: 61
  },
  {
    id: 7,
    name: "Bose BT Earphones",
    price: 289.00,
    currency: "USD",
    inStock: true,
    rating: 4,
    image: "https://th.bing.com/th/id/R.d075ff124f4a00108f90e5d8a68ae60b?rik=uNUhRVnrewMYcg&pid=ImgRaw&r=0",
    description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5",
    brand: "HP",
    category: "laptops",
    stock: 89
  },
  {
    id: 8,
    name: "VIVEFOX Headphones",
    price: 39.00,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    image: "https://tse1.mm.bing.net/th/id/OIP.FS2k0phpzicLE8FozQlhDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10",
    brand: "Infinix",
    category: "laptops",
    stock: 96
  }
];

