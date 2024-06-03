'use client'

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
        <body>
        <main className={'h-screen w-screen flex justify-center items-center'}>
            <div>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </div>
        </main>
        </body>
        </html>
    )
}