import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center text-center">
      {/* 
        ВАЖНО: Здесь используется фоновое изображение. 
        Убедитесь, что в папке public есть файл bg.png, 
        либо замените src на ссылку или другой файл.
      */}
      <Image
        src="/bg.png" 
        alt="Mountains and forests with two cabins"
        fill
        className="object-cover -z-10"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
      <div className="z-10 bg-black/30 p-10 rounded-xl">
        <h1 className="text-6xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}