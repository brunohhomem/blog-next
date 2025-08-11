'use client'

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void
}

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <ErrorMessage
      pageTitle="Erro"
      contentTitle="Algo de errado não está certo, estamos resolvendo 🚧"
      content={
        <button onClick={() => reset()}>
          Tente outra vez
        </button>
      } />
  )
}
