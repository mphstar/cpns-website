import Pagination from "@/components/organisms/Pagination";
import AdminPage from "@/components/templates/AdminPage";
import TemplateHandlingData from "@/components/templates/TemplateHandlingData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Delete, DeleteIcon, Edit, Plus, Search, Trash } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <AdminPage
      title={"Paket Soal"}
      breadcrumb={
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Menu</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem className="text-utama">
              <BreadcrumbLink asChild>
                <Link href="/admin/paket">Paket Soal</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }
    >
      <div className="flex flex-col h-full pb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-row w-full md:w-fit items-center gap-3 bg-white border-[2px] border-borderUtama rounded-[5px] px-3 py-2">
            <Search size={16} />
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Search"
              name=""
              id=""
            />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-utama hover:bg-utama/90 flex gap-3 w-full md:w-fit">
                  <Plus size={18} />
                  Tambah
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex flex-col min-h-[500px] md:min-h-[600px] px-6 py-12 overflow-x-auto bg-white border-[2px] border-borderUtama rounded-[5px] w-full mt-8">
          <TemplateHandlingData isEmpty={false} isLoading={false} isError={false}>
            <table className="border-separate border-spacing-y-4 ">
              <thead>
                <tr>
                  <th className="pr-4">No</th>
                  <th className="text-start pr-4">Nama Paket</th>
                  <th className="text-start pr-4">Jumlah Soal</th>
                  <th className="text-start pr-4">Durasi</th>
                  <th className="">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }, (_, i) => (
                  <tr key={i} className="bg-[#F7F6FE]">
                    <td className="py-3 text-center">1</td>
                    <td className="py-3">Paket Soal 1</td>
                    <td className="py-3">30</td>
                    <td className="py-3">120 Menit</td>
                    <td className="py-3 text-center">
                        <div className="flex flex-row gap-0 w-full justify-center">
                            <div className="p-2 hover:bg-gray-200 rounded-sm duration-300 ease-in-out">
                                <Edit className="stroke-utama" />
                            </div>
                            <div className="p-2 hover:bg-gray-200 rounded-sm duration-300 ease-in-out">
                                <Trash className="stroke-[#A30D11]" />
                            </div>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TemplateHandlingData>
        </div>
        <Pagination total={50} showItem={14} page={2} limit={5} />
      </div>
    </AdminPage>
  );
};

export default page;
