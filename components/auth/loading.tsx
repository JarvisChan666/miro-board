import Image from "next/image";

export function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="relative w-1/3 h-1/3">
        <Image
          src="/logo.svg"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          className="animate-pulse duration-700"
        />
      </div>
    </div>
  );
}
