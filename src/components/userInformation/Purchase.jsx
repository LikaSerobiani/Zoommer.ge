import { useEffect, useState } from "react";
import { getPurchases } from "../../services/services";

export default function Purchase() {
  const [purchases, setPurchases] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getPurchases();
      setPurchases(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h2 className=" text-lg font-bold">მიმდინარე შეკვეთები</h2>
      <div className="border-b-2 w-full border-secondary"></div>
      <div className="flex gap-10 flex-wrap">
        {purchases.map((purchase) => (
          <div key={purchase.id}>
            <p>
              <span className="font-bold">სულ გადახდილია:</span>{" "}
              <span className="text-lime-600"> {purchase.totalPrice} ₾</span>
            </p>
            <p>
              <span className="font-bold">ნივთების რაოდენობა:</span>{" "}
              <span className="text-secondary"> {purchase.totalItems}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
