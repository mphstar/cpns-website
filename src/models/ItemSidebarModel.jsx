import { Blocks, Home, Library } from "lucide-react";

export const itemSidebar = [
  {
    group: "Menu",
    items: [
      {
        icons: <Home stroke="auto" />,
        title: "Dashboard",
        link: "/admin",
      },
      {
        icons: <Blocks stroke="auto" />,
        title: "Paket Soal",
        link: "/admin/paket",
      },
      {
        icons: <Library stroke="auto" />,
        title: "Materi",
        link: "/",
      },
    ],
  },
];
