import Image from "next/image";
import PhotoList from "@/app/PhotoList";
import Navbar from "@/app/Navbar";

export default function Home() {
  return (
      <div>

        <div className="bg-gray-100 min-h-screen">
          <Navbar/>
          <div className="container mx-auto p-4">
            <PhotoList/>
          </div>
        </div>
      </div>
  );
}
