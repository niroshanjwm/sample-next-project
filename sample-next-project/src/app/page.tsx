"use client";
import productsData from "@/data/products";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (
    productName: string,
    quantity: number,
    unitPrice: number
  ) => {
    const updatingProduct = products.find(
      (product) => product.name === productName
    );

    const exisitingProduct = cart.find(
      (product) => product.name === productName
    );

    if (!exisitingProduct) {
      setCart((oldCart) => [
        ...oldCart,
        { name: productName, quantity, unitPrice },
      ]);
    } else {
      const shouldUpdatedCartItem = cart.map((product, i) => {
        if (updatingProduct?.quantity === product.quantity) {
          return product;
        }

        if (product.name === productName) {
          return { ...product, quantity: product.quantity + quantity };
        }
        return product;
      });

      setCart(shouldUpdatedCartItem);
    }
  };
  return (
    <div className="p-5">
      <div className="product-container">
        {products.map((product: Product) => {
          return (
            <div key={product.name}>
              <div>{product.name}</div>
              <button
                className="border p-1"
                onClick={() =>
                  handleAddToCart(product.name, 1, product.unitPrice)
                }
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart-coontainer">
        <pre>{JSON.stringify(cart)}</pre>
      </div>
    </div>
  );
}
