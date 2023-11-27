interface Product {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

type CreateProduct = Pick<Product, "name" | "price">;
type UpdateProduct = Partial<CreateProduct>;
type UpdateResult = Product | {message: string}
type DeleteResult = { message: string };

interface CRUDOperations {
  createProduct(product: CreateProduct): Product;
  getProducts(): Product[];
  getOneProduct(id: number): Product | undefined;
  updateProduct(id: number, data: UpdateProduct): UpdateResult;
  deleteProduct(id: number): DeleteResult;
}

export { Product, CRUDOperations };
