import Image from "next/image";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404: Page Not Found</h1>
        <p>Data Disappeared into the Abyss</p>
      </div>

      <Image src="/images/404.png" width={200} height={200} />
    </div>
  );
};

export default NotFound;
