import { PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Header />
      <div class="pt-12">
        <Component />
      </div>
      <Footer />
    </>
  );
}
