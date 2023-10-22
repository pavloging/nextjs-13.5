import Link from "next/link";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1 className="home__title about__layout_title">
                A<span className="bordo_letter">b</span>o<span className="bordo_letter">u</span>t <span className="bordo_letter">U</span>s
            </h1>
            {children}
        </div>
    );
}
