import Card from "@/components/ui/Card";
import CategoryOptions from "@/components/ui/CategoryOptions";

export default function Home() {
  return (
    <>
      <main className="relative">
        <section className=" top-0 left-0 flex justify-center">
          <div className="hidden lg:block w-[350px] h-[90vh] lg:sticky top-[7vh] left-0 border-r">
            <CategoryOptions />
          </div>

          <div className="w-full">
            <div className="flex bg-white lg:sticky top-[7vh] justify-between items-center p-2 lg:py-1 ">
              <p>
                LIGHTNING CABLE
                <span className="mx-3 bg-black text-white p-1 rounded-[5px] font-serif">
                  4
                </span>
              </p>
              <div>
                <button>See All</button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4  gap-6 m-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
