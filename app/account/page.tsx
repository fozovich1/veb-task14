import Navigation from "../_components/Navigation";

export const metadata = {
  title: "Your Account",
};

export default function Page() {
  return (
    <div>
      <Navigation />
      <main className="p-4">
        <h1 className="text-3xl mb-4">Your Account</h1>
      </main>
    </div>
  );
}