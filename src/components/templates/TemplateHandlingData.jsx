import Image from "next/image";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const TemplateHandlingData = ({
  isError = true,
  isEmpty = true,
  isLoading = true,
  children,
}) => {
  if (isEmpty)
    return (
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <Image
          className="object-cover flex size-96"
          alt="No Data"
          src={"/assets/nodata.png"}
          width={500}
          height={500}
        />
        <p className="text-lg font-semibold">No Data</p>
      </div>
    );
  if (isError)
    return (
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <Image
          className="object-cover flex size-96"
          alt="No Data"
          src={"/assets/nodata.png"}
          width={500}
          height={500}
        />
        <p className="text-lg font-semibold">Gagal mendapatkan data</p>
      </div>
    );
  if (isLoading) return <div className="flex flex-col gap-3 w-full">
    <Skeleton className="w-full h-[40px] rounded-[10px]" />
    <Skeleton className="w-full h-[40px] rounded-[10px]" />
    <Skeleton className="w-full h-[40px] rounded-[10px]" />
    <Skeleton className="w-full h-[40px] rounded-[10px]" />
    <Skeleton className="w-full h-[40px] rounded-[10px]" />

  </div>;

  return children;
};

export default TemplateHandlingData;
