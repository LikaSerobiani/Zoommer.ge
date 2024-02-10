/* eslint-disable no-unused-vars */
import React from "react";

export default function AboutUs() {
  return (
    <div className="my-[30px]">
      <div className="container">
        <div className="border-b-[2px] border-light-grey pb-[30px] mb-[30px]">
          <h1 className="font-bold text-[16px] text-black leading-6">
            ჩვენ შესახებ
          </h1>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          {/* heading */}
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-[35px]">ჩვენ შესახებ</h1>
            <p className="text-secondary font-bold">
              ზუმერის განვითარების 12 წლიანი ისტორია
            </p>
          </div>
          {/* description */}
          <div className="flex gap-y-[15px] flex-col w-[70%]">
            <span>
              ზუმერი 12 წელია ოპერირებს ციფრული ტექნიკის ბაზარზე, ამ წლების
              განმალობაში კომპანიამ წარმატებით დაიმკვიდრა ადგილი საცალო
              გაყიდვებში და სტაბილურად ინარჩუნებს ლიდერ პოზიციას. ზუმერი
              მომხმარებელს მსოფლიო ბრენდების პროდუქციას საუკეთესო ფასად
              სთავაზობს საქართველოში.
            </span>
            <span>
              კომპანიამ ციფრული ტექნიკის ბაზარზე 2009 წლის ოქტომბერში ერთი
              მაღაზიით შემოვიდა, დღესდღეობით კი 17 ფილიალს და 200-ზე მეტ
              თანამშრომელს აერთიანებს ქვეყნის მასშტაბით.
            </span>
            <span>
              ზუმერი სმარტფონების, ციფრული ფოტოაპარატების, ლეპტოპებისა და
              აუდიო-ვიდეო ტექნიკის ერთ-ერთი მსხვილი საცალო ქსელია და
              მომხმარებელს პროდუქციას ყველაზე დაბალ ფასად სთავაზობს
              საქართველოში.
            </span>
            <span>
              აღსანიშნავია, ის ფაქტი რომ კომპანია 100% ქართული ინვესტიციაა და 12
              წლის წინ, ახალგაზრდა ანტერპრენერების სტარტაპი იყო, რომელიც წლების
              მანძილზე მსხვილ საცალო ქსელად ჩამოყალიბდა.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
