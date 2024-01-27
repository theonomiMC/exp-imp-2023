import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "Home GTrade",
  description:
    "Explore the dynamic trade landscape of Georgia. Discover key insights and trends shaping the country's trade activities. Georgia's Export - Import 2023",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
