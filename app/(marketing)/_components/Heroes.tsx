import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:3-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            className="object-contain dark:hidden"
            alt="Documents"
            fill
          />
          <Image
            src="/documents-dark.png"
            className="object-contain hidden dark:block"
            alt="Documents"
            fill
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/reading.png"
            className="object-contain dark:hidden"
            alt="reading"
            fill
          />
          <Image
            src="/reading-dark.png"
            className="object-contain hidden dark:block"
            alt="reading"
            fill
          />
        </div>
      </div>
    </div>
  );
};
