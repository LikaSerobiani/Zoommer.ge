import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/services";
import Button from "../components/Button/Index";

export default function ProductPage() {
  const { cardId } = useParams();
  const [cardData, setCardData] = useState(null);
  const [error, setError] = useState();

  const fetchData = async (cardId) => {
    try {
      const response = await getProduct(cardId);
      setCardData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    }
  };
  useEffect(() => {
    fetchData(cardId);
  }, [cardId]);

  return (
    <div>
      {cardData ? (
        <div className="container-xl m-auto flex w-[900px] h-[440px] justify-around items-center cursor-pointer rounded-2xl bg-white relative max-[768px]:w-[700px] max-[480px]:h-[600px] max-[480px]:w-[400px] max-[480px]:flex max-[480px]:flex-col">
          {/* Card image */}
          <div>
            <img
              src={cardData.image}
              alt={cardData.title}
              className="h-auto bg-gray-300 w-[250px] max-[480px]:w-[130px]"
            />
          </div>
          {/* Information */}
          <div className="w-[400px] max-[480px]:w-[300px]  ">
            <div className="info flex gap-3 flex-col max-[480px]:flex max-[480px]:gap-0">
              <h2 className="text-xl font-bold">{cardData.title}</h2>
              <p className="text-success font-bold">Price: ${cardData.price}</p>
              <p className="text-gray-500">{cardData.description}</p>
            </div>
          </div>
          <div>
            <Button children="დამატება" />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
