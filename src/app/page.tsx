

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <p>matches</p>
        </div>
        <div className="flex flex-row gap-4">
          <p>standings</p>
          <p>news article</p>
        </div>

      </main>
    </div>
  );
}
