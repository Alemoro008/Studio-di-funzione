import type { Metadata } from "next";
import Calcolatore from "./components/Calcolatore";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() { return <Calcolatore />; }
