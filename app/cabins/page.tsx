import Navigation from "../_components/Navigation";
import Counter from "../_components/Counter";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <Navigation />
      <main className="p-4">
        <h1 className="text-3xl mb-4">Cabins</h1>
        {/* Передаем количество пользователей в клиентский компонент */}
        <Counter userCount={users.length} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {users.map((user: any) => (
            <div key={user.id} className="p-4 border border-primary-700 rounded">
              <h2 className="text-xl font-bold text-accent-400">{user.name}</h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}