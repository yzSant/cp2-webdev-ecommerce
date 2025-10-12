import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <p> Conteúdo principal</p>
      </main>
    </div>
  );
}
