import React from "react";
import "./wishlist.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useCartContext } from "../../Context";

export const Wishlist = () => {
  const { wishList, cartList } = useCartContext();
  const wishListWithFlag = (() => {
    const productsIdInCart = cartList.map((item) => item.id);
    return wishList.map((product) =>
      productsIdInCart.includes(product.id)
        ? { ...product, inCart: true }
        : product
    );
  })();
  return (
    <>
      <section className="route-container column w12 align-start justify-start">
        <h1 className="title-text w12">WishList</h1>
        <ul className="dis-grid product-container wishlist-item margin-t-16 ">
          {wishListWithFlag.map((product) => (
            <ProductCard product={product} inWishList={true}></ProductCard>
          ))}
        </ul>
      </section>
    </>
  );
};
