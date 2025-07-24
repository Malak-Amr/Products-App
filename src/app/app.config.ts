export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  inStock: boolean;
  rating: number;
  image: string;
  discountPercentage?: number;
  brand: string;
  category: string;
  stock: number;
  shortDescription?: string;
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
    discountPercentage: 12.96,
    brand: "Apple",
    category: "smartphones",
    stock: 94,
    shortDescription: "True wireless freedom with deep bass and IPX8 water resistance."
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 559.00,
    currency: "USD",
    inStock: true,
    rating: 5,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1604022365000",
    discountPercentage: 4.15,
    brand: "Samsung",
    category: "laptops",
    stock: 50,
    shortDescription: "A perfect balance of high-fidelity audio and elegant design."
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: 289.00,
    currency: "USD",
    inStock: false,
    rating: 4,
    image: "https://th.bing.com/th/id/R.d075ff124f4a00108f90e5d8a68ae60b?rik=uNUhRVnrewMYcg&pid=ImgRaw&r=0",
    brand: "Royal_Mirage",
    category: "fragrances",
    stock: 0,
    shortDescription: "Premium fragrance for all-day freshness and charm."
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    price: 39.00,
    currency: "USD",
    inStock: true,
    rating: 4.3,
    image: "https://tse1.mm.bing.net/th/id/OIP.FS2k0phpzicLE8FozQlhDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    discountPercentage: 17.91,
    brand: "OPPO",
    category: "smartphones",
    stock: 123,
    shortDescription: "Comfortable, lightweight headphones for everyday use."
  },
  {
    id: 5,
    name: "Wireless Earbuds, IPX8",
    price: 89.00,
    currency: "USD",
    inStock: false,
    rating: 4.5,
    image: "https://www.apple.com/v/airpods/t/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
    discountPercentage: 11.02,
    brand: "Apple",
    category: "laptops",
    stock: 30,
    shortDescription: "Crisp audio in a compact, stylish design — built to move."
  },
  {
    id: 6,
    name: "AirPods Max",
    price: 559.00,
    currency: "USD",
    inStock: true,
    rating: 5,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1604022365000",
    brand: "Fog",
    category: "fragrances",
    stock: 61,
    shortDescription: "Luxury scent meets bold personality in this lasting fragrance."
  },
  {
    id: 7,
    name: "Bose BT Earphones",
    price: 289.00,
    currency: "USD",
    inStock: true,
    rating: 4,
    image: "https://th.bing.com/th/id/R.d075ff124f4a00108f90e5d8a68ae60b?rik=uNUhRVnrewMYcg&pid=ImgRaw&r=0",
    brand: "HP",
    category: "laptops",
    stock: 89,
    shortDescription: "Clear sound and strong connection for everyday productivity."
  },
  {
    id: 8,
    name: "VIVEFOX Headphones",
    price: 39.00,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    image: "https://tse1.mm.bing.net/th/id/OIP.FS2k0phpzicLE8FozQlhDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    brand: "Infinix",
    category: "laptops",
    stock: 96,
    shortDescription: "Affordable sound solution for work, play, and everything in between."
  }
];

