import { useContext, useState } from "react";
import { CreateProduct } from "../copmonents/CreateProduct";
import ErrorMessage from "../copmonents/ErrorMessage";
import Loader from "../copmonents/Loader";
import { Modal } from "../copmonents/Modal";
import { Product } from "../copmonents/Product";
import { products } from "../data/products";
import { useProducts } from "../hooks/products";
import { IPVersion } from "net";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

export function ProductPage() {
  const { loading, error, products, addProduct } = useProducts();
  // const [modal, setModal] = useState(true);
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    // setModal(false);
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}

      {modal && (
        // <Modal title="Create new product" onClose={() => setModal(false)}>
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        // onClick={() => setModal(true)}
        onClick={open}
      >
        +
      </button>
    </div>
  );
}
