import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  // Загружаем данные из Supabase
  const cabins = await getCabins();
  
  // Выводим в консоль терминала для проверки, пришли ли данные
  console.log("Данные из БД:", cabins);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites.
      </p>

      {/* Если данных нет, выводим сообщение, если есть - показываем карточки */}
      {!cabins || cabins.length === 0 ? (
        <p className="text-primary-200">No cabins found. Please add data to Supabase.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin: any) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}