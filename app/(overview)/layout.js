import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "DTL",
  description: "Georgia's Export - Import 2023",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
