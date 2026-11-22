import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

// Если у вас есть типы, можно их использовать, но для простоты:
export default function CabinCard({ cabin }: { cabin: any }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    
<div className="flex border border-primary-800 h-[400px]">
      {/* 1. ИЗМЕНЕНИЕ: Обернули Image в div с relative для работы fill */}
      <div className="relative flex-1">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-4 pb-3 px-5 flex justify-between items-center border-b border-primary-800">
          <h3 className="text-accent-100 font-black text-2xl">
            Cabin {name}
          </h3>
          <div className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </div>
        </div>

        <div className="pt-3 flex justify-end items-center gap-2 bg-primary-950 border-b border-primary-800 px-5 pb-4">
          {discount > 0 ? (
            <>
              <p className="text-3xl font-[350]">
                ${regularPrice - discount}
                <span className="text-primary-600"> / night</span>
              </p>
              <p className="bg-primary-800 text-primary-200 px-2 py-1 text-sm rounded-sm line-through">
                ${regularPrice}
              </p>
            </>
          ) : (
            <p className="text-3xl font-[350]">
              ${regularPrice}
              <span className="text-primary-600"> / night</span>
            </p>
          )}
        </div>

        <div className="bg-primary-950 border-t border-t-0 border-primary-800 text-right px-5 py-3">
          {/* 2. ИЗМЕНЕНИЕ: Заменили <a> на <Link> из next/link */}
          <Link
            href={`/cabins/${id}`}
            className="border border-primary-800 py-2 px-4 inline-block hover:bg-accent-500 hover:text-primary-800 transition-all"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}