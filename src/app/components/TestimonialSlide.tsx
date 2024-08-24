import { TestimonialSlideProps } from "@/utils/types/Types";
import Image from "next/image";

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  imageSrc,
  altText,
  testimonial,
  author,
}) => {
  return (
    <div className="mx-2 xl:w-[400px] h-[306px] bg-white rounded-3xl my-12">
      <div className="flex gap-2 px-12 pt-12">
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src={imageSrc}
            width={20}
            height={20}
            alt={altText}
          />
        ))}
      </div>
      <p className="text-black xl:text-lg mx-8 py-5">{testimonial}</p>
      <h1 className="text-black text-lg mx-8 font-extrabold">{author}</h1>
    </div>
  );
};

export default TestimonialSlide;
