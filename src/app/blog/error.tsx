"use client";

export default function error({ error }: { error: Error }) {
    return (
        <>
            <h1>Opsss...</h1>
            <h1>{error.message}</h1>
        </>
    );
}
