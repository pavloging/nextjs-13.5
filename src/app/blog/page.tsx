import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw new Error("Unable to fetch posts!");
    return response.json();
}

export const metadata: Metadata = {
    title: "Blog | Next App",
};

export default async function Blog() {
    const posts = await getData();
    return (
        <div className="blog">
            <div className="blog__title_block">
                <Image
                className="blog__title_img"
                    width={450}
                    height={280}
                    src="/eyes.svg"
                    alt="Picture of the author"
                />
                <h1 className="home__title blog__title_text">
                    Bl<span className="bordo_letter">o</span>g
                </h1>
            </div>
            <div className="blog__posts">
                {posts.map((post: any) => (
                    <Link
                        className="blog__post_item"
                        key={post.id}
                        href={`/blog/${post.id}`}
                    >
                        <Image
                            width={20}
                            height={20}
                            src="/blog.svg"
                            alt="Picture of the author"
                        />
                        <p>{post.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
