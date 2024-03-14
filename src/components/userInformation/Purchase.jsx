import { useEffect, useState } from "react";
import { getPurchases } from "../../services/services";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeSwitcher";

export default function Purchase() {
  const [purchases, setPurchases] = useState([]);
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

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
      <p
        className={`font-bold text-[20px] ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {" "}
        {t("profilePage.orders.title")}
      </p>
      <div className="border-b-2 w-full border-light-grey"></div>
      <div className="flex items-center gap-6 flex-wrap justify-center">
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="bg-light-grey px-4 py-4 border rounded-md"
          >
            <p>
              <span className="font-bold">
                {t("profilePage.orders.total.price")}:
              </span>{" "}
              <span className="text-lime-600"> {purchase.totalPrice}₾</span>
            </p>
            <p>
              <span className="font-bold">
                {t("profilePage.orders.total.items")}:
              </span>{" "}
              <span className="text-secondary"> {purchase.totalItems}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
