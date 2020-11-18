import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Anton",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      countInStock: 10,
      name: "Iphone 12",
      description: "Black, 128 Gb",
      price: 700,
      image:
        "https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-black-select-2020_3.jpg",
    },
    {
      countInStock: 10,
      name: "Iphone 12",
      description: "Blue, 128 Gb",
      price: 700,
      image:
        "https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-blue-select-2020_3.jpg",
    },
    {
      countInStock: 10,
      name: "Iphone 12",
      description: "Green, 128 Gb",
      price: 700,
      image:
        "https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-green-select-2020_3.jpg",
    },
    {
      countInStock: 10,
      name: "Iphone 12",
      description: "White, 128 Gb",
      price: 700,
      image:
        "https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-white-select-2020_3.jpg",
    },
    {
      countInStock: 10,
      name: "Iphone 11",
      description: "Black, 128 Gb",
      price: 600,
      image:
        "https://i.allo.ua/media/catalog/product/cache/3/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/4/8/48559a6ce9a4251b3bd0f4a6fde96a9e_2.jpg",
    },
    {
      countInStock: 10,
      name: "Iphone 11",
      description: "Green, 128 Gb",
      price: 600,
      image:
        "https://i.allo.ua/media/catalog/product/cache/3/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/0/9/09b50ab1617f7d174fda7e370c9f374f__2_1.jpg",
    },
  ],
};
export default data;
