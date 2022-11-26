import "./App.css";
import Cars from "./components/Cars";

function App() {
  return (
    <div className="container-2xl px-5 py-10 mx-auto">
      <main className="sm:w-full sm:block flex justify-center lg:grid lg:grid-cols-5 gap-4 ">
        <section className="border-2 hidden lg:block border-slate-300 h-screen">
          this is sidebar
        </section>
        <section className="col-span-4 h-screen">
          <Cars />
        </section>
      </main>
    </div>
  );
}

export default App;
