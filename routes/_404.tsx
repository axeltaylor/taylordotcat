import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 Error | taylordotcat</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold text-center">
            404: Nop it's not here
          </h1>
          <img src="/images/hax-space-not-found.jpg" alt="404" class="mt-3" />
          <p class="mt-3">
            Congratulations on your discovery! While you won't find what you
            were looking for, you've unwittingly entered the exclusive club of
            unintentional space explorers.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
