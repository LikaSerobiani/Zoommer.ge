/* eslint-disable no-unused-vars */
import React from "react";

export default function CorporateSales() {
  return (
    <div className="my-[30px]">
      <div className="container">
        <div className="border-b-[2px] border-light-grey pb-[30px] mb-[30px]">
          <h1 className="font-bold text-[16px] text-black leading-6">
            კორპორატიული გაყიდვები
          </h1>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          {/* heading */}
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-[35px]">
              კორპორატიული კლიენტებისათვის
            </h1>
            <p className="text-secondary">პირადი მენეჯერის მომსახურება</p>
          </div>
          {/* description */}
          <div className="flex gap-y-[15px] flex-col w-[70%]">
            <span>
              ზუმერის კორპორატიულ კლიენტებს პირადი გაყიდვების მენეჯერები
              ემსახურებიან.
            </span>
            <span>
              კორპორატიულ კლიენტებს შესაძლებლობა აქვთ გადახდის მოქნილი გრაფიკითა
              და სპეციალური ფასებით ისარგებლონ.
            </span>
            <span>
              თუ ბრძანდებით კომპანიის წარმომადგენელი და კომპანიისთვის საჭირო
              ტექნიკის შეძენას ზუმერში გეგმავთ, მოგვწერეთ შეკვეთა მეილზე:
              corporatesales@zoommer.ge; გაყიდვების მენეჯერი დაგიკავშირდებათ და
              გაგაცნობთ საჭირო პროცედურებს. კორპორატიული კლიენტები სარგებლობენ
              ადგილზე მიტანის სერვისით.
            </span>
            <span>
              შეკვეთის მიტანა იმავე დღეს - თუ მომხმარებელი შეუკვეთავს 15:00
              საათამდე, შეკვეთა ჩაბარდება იმავე დღეს, სხვა შემთხვევაში -
              მომდევნო სამუშაო დღეს; შეკვეთის მიტანა რეგიონებში - მაქსიმუმ 3-6
              სამუშაო დღეში; შეკვეთის ჩაბარების ხანგრძლივობა დამოკიდებულია
              რეგიონზე. სწრაფი მიწოდებით სამწუხაროდ ვერ მოგემსახურებით შემდეგ
              მისამართებზე: ლილო, ფონიჭალა, ორხევი, აეროპორტი, ავჭალა, წავკისი,
              ოქროყანა, წყნეთი
            </span>
            <p className="font-bold">
              გმადლობთ, რომ სარგებლობთ ჩვენი მომსახურებით!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
