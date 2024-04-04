import CardDashboard from "@/components/atoms/CardDashboard";
import AdminPage from "@/components/templates/AdminPage";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Package, User } from "lucide-react";
import Link from "next/link";
const page = () => {
  return (
    <AdminPage
      title={"Dashboard"}
      breadcrumb={
        <Breadcrumb>
          <BreadcrumbList>
            {}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Menu</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem className="text-utama">
              <BreadcrumbLink asChild>
                <Link href="/admin">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }
    >
      <div className="flex flex-col h-full pb-6">
        <div className="grid w-full grid-cols-2 h-fit gap-4">
          <CardDashboard
            icons={<Package size={32} color="white" />}
            title={"Paket Soal"}
            value={24}
            className={"bg-[#F94343]"}
          />
          <CardDashboard
            icons={<User size={32} color="white" />}
            title={"Total User"}
            value={11}
            className={"bg-[#759CFF]"}
          />
        </div>
        <div className="flex flex-col min-h-[500px] md:min-h-[600px] px-6 py-4 bg-white border-[2px] border-borderUtama rounded-[5px] w-full mt-8">
          <h1 className="text-xl text-utama font-bold">
            Paket Soal Teerpopuler
          </h1>
        </div>
      </div>
    </AdminPage>
  );
};

export default page;
