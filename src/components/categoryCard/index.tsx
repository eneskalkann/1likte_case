import Link from "next/link";
import Icon from "../Icon";
import { Category } from "@/utils/types";

const CategoryCard = ({ category }: Category) => {
  return (
    <Link
      href="/"
      className="border border-[#D9D9D9] transition-colors hover:border-[#1C1C1E] rounded-[10px] p-5 flex flex-col items-start h-full"
    >
      <Icon
        icon={category?.icon}
        className="text-[#1C1C1E] w-[24px] h-[24px] md:w-[28px] md:h-[28px] relative"
      />
      <div className="flex flex-col gap-[5px] py-[10px]">
        <h2 className="text-[#1C1C1E] font-medium text-lg leading-5  md:text-[16px] md:leading-6">
          {category?.title}
        </h2>
        <p className="text-[#414141] font-normal text-lg leading-5 md:text-[16px] md:leading-6 whitespace-pre-line">
          {category?.description}
        </p>
      </div>
      <span className="text-[#9a9a9a] font-normal text-[13px] leading-4 mb-6">
        {category?.detail}
      </span>
    </Link>
  );
};

export default CategoryCard;
