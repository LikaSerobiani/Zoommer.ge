/* eslint-disable no-unused-vars */
import React from "react";

export default function PaymentMethods() {
  return (
    <div className="my-[30px]">
      <div className="container">
        <div className="border-b-[2px] border-light-grey pb-[30px] mb-[30px]">
          <h1 className="font-bold text-[16px] text-black leading-6">
            გადახდის მეთოდები
          </h1>
        </div>
        <div className="flex flex-col gap-[30px]">
          {/* heading */}
          <h1 className="font-bold text-[30px]">გადახდის მეთოდები</h1>
          {/* description */}
          <div className="flex gap-y-[15px] flex-col w-[70%]">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold">
                ზუმერის ქსელში პროდუქციის შეძენისას შეგიძლიათ ისარგებლოთ
                გადახდის შემდეგი მეთოდებით:
              </h1>
              <div className="flex flex-col gap-5">
                <span>გადახდა ნაღდი ანგარიშსწორებით;</span>
                <span>გადახდა საბანკო ტერმინალით;</span>
                <span>გადახდა საბანკო გადარიცხვით;</span>
                <span>გადახდა ზუმერის სასაჩუქრე ბარათით;</span>
                <span>საბანკო განვადება;</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="font-bold">
                ზუმერის საიტზე ონლაინ შეძენსას შეგიძლიათ ისარგებლოთ გადახდის
                შემდეგი მეთოდებით:
              </h1>
              <div className="flex flex-col gap-5">
                <span>გადახდა ონლაინ Visa / MasterCard - ბარათით;</span>
                <span>საბანკო გადარიცხვით</span>
                <span>გადახდა ზუმერის სასაჩუქრე ბარათით;</span>
                <span>ონლაინ განვადება;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
