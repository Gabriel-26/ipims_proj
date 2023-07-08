import TopNavbar from "@/src/components/TopNavbar";
import LeftNavbar from "../components/LeftNavbar";
import EHRForm from "../components/EHRForm";
import Admin from "../components/Admin";

export default function Home() {
  return (
    <>
      <TopNavbar></TopNavbar>
      <LeftNavbar></LeftNavbar>
      <div className="bg-white flex-auto min-w-full min-h-full mt-4 ml-60 rounded-md ">
        <Admin></Admin>
      </div>
    </>
  );
}
