import { Product, CRUDOperations } from "./interfaces";

class ProductList implements CRUDOperations {
  private productList: Product[] = [];
  id: number = 1;

  createProduct(product: { name: string; price: number }): Product {

    const newProduct: Product = {
      id: this.id,
      name: product.name,
      price: product.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.productList.push(newProduct);
    this.id++;

    return newProduct;
  }

  getProducts(): Product[] {
    return this.productList;
  }

  getOneProduct(id: number): Product | undefined {
    const productFound = this.productList.find((product) => product.id === id);
    return productFound;
  }

  updateProduct(
    id: number,
    data: Partial<{ name: string; price: number }>,
  ): Product | string {

    const productFound = this.productList.find((product) => product.id === id);

    const productIdx = this.productList.findIndex(
      (product) => product === productFound,
    );

    let updatedData: Product;

    if (!productFound) {
      return "Product not found.";
    }

    updatedData = {
      ...productFound,
      ...data,
      updatedAt: new Date(),
    };

    this.productList.splice(productIdx, 1, updatedData);

    return updatedData;
  }

  deleteProduct ( id: number ): { message: string; } {
    const productFound = this.productList.find((product) => product.id === id);
    const productIdx = this.productList.findIndex(
      (product) => product === productFound,
    );
    this.productList.splice(productIdx, 1)
    return { message: "Product sucessfully deleted." };
  }
}

export const productList = new ProductList();
