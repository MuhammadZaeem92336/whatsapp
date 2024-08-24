import image from "next/image";

export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-orange-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-full md:rounded-none rounded-full mx-auto" src="/professor.webp" alt="" width="512" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “The Professor, Real name Sergio, was born in San Sebastian
         and mostly grew up in hospitals due to being a sick child. He leads the gang,
          and is the one who carefully plans and organises the
           heist in the Royal Mint and the Bank of Spain and always get success.
            He is sophisticated but nerdy.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-red-500 dark:text-sky-400">
        PROFESSOR SERGIO
      </div>
      <div className="text-slate-900 dark:text-slate-500">
        MONEY HEIST , LEADER
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}