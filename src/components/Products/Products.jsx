import React, { useState, useEffect } from "react";
import Slider from "../slider/DefaultSlider";
import { getProducts } from "../../services/services";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [smartPhones, setSmartPhones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation("global");

  const fetchProducts = async () => {
    try {
      const saleProductsResponse = await getProducts({ onlySales: true });
      if (saleProductsResponse.data.products) {
        setSaleProducts(saleProductsResponse.data.products);
      }

      const smartPhones = await getProducts({
        categoryName: "სმარტფონები",
      });
      if (smartPhones.data.products) {
        setSmartPhones(smartPhones.data.products);
      }

      const laptops = await getProducts({
        categoryName: "ლეპტოპები",
      });
      if (laptops.data.products) {
        setLaptops(laptops.data.products);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Slider title={t("sliders.onlySales")} products={saleProducts} />
          <Slider title={t("sliders.smartphones")} products={smartPhones} />
          <Slider title={t("sliders.laptops")} products={laptops} />
        </>
      )}
    </div>
  );
};

export default Products;
