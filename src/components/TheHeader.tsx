import Link from "next/link";
import Image from "next/image";

const TheHeader = () => {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Image
                src="/header.svg"
                width={50}
                height={50}
                alt="Picture of the author"
            />

            <Link href="/about">About</Link>
            <div className="shadow_orange"></div>
            <div className="shadow_red"></div>
        </header>
    );
};

export default TheHeader;
