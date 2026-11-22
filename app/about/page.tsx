import Navigation from "../_components/Navigation";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div>
      <Navigation />
      <main className="p-4">
        <h1 className="text-3xl mb-4">About Us</h1>
        <p>Welcome to The Wild Oasis.</p>
      </main>
    </div>
  );
}