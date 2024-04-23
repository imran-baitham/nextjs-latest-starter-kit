import dynamic from "next/dynamic";
const SpinLoader = dynamic(() => import("@/components/Spiner/Spiner"));

export default function Loading() {
  return <SpinLoader />;
}
