import Image from "next/image";
import Link from "next/link"; // Substitui a tag <a> nativa para navegação sem recarregar a página
import Button from "@/components/ui/Button";

// A importação estática resolve o erro de width/height automaticamente
import logo from "../../public/logo.svg"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-8">
      
      {/* Bloco Superior: Logo e Textos */}
      <div className="flex flex-col items-center text-center max-w-[320px] gap-2">
        <Image src={logo} alt="Logo Design Day" priority />
        <h1 className="font-bold text-2xl mt-4 text-zinc-800">Bem vindo</h1>
        <p className="font-medium text-sm text-zinc-500">
          Veja aqui as novidades do mundo de design e fique por dentro de tudo que acontece
        </p>
      </div>

      {/* Bloco Inferior: Ações */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[252px]">
        {/* O botão herdou a propriedade href e virou um Link internamente */}
        <Button href="/login" texto="Sou novo" />
        
        <Link href="/login" className="text-sm font-bold text-zinc-800 hover:text-cyan-500 transition-colors">
          Já tenho conta
        </Link>
      </div>

    </main>
  );
}