import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
    return (
        <div className="home">
            <div className="home__main">
                <Image
                    className="home__image_mouse"
                    width={30}
                    height={30}
                    src="/mouse.svg"
                    alt="Picture of the author"
                />
                <h1 className="home__title">
                    We<span className="bordo_letter">l</span>c
                    <span className="bordo_letter">o</span>m
                    <span className="bordo_letter">e</span>{" "}
                    <span className="home__title_index">
                        N<span className="bordo_letter">ex</span>t
                        <span className="bordo_letter"> 1</span>3
                        <span className="bordo_letter">.</span>5
                    </span>
                </h1>
            </div>
            <Marquee className="home__marquee">
                <span className="home__marquee_text">HURRY POTTER</span>
            </Marquee>
            <div className="home__update">
                <div className="home__update_title">
                    <span className="home__title">
                        N<span className="bordo_letter">ex</span>t
                        <span className="bordo_letter"> 1</span>3
                        <span className="bordo_letter">.</span>5
                    </span>
                    <span className="home__update_mini-title">
                        improves local dev performance and reliabilit
                    </span>
                </div>
                <div className="home__update_info">
                    <div className="home__update_info-text">
                        <p><span className="yellow_letter">22%</span> faster local server startup</p>
                        <p><span className="yellow_letter">29%</span> faster HMR (Fast Refresh)</p>
                        <p><span className="yellow_letter">40%</span> less memory usage</p>
                        <p>Optimized Package Imports</p>
                        <p>Next/image Improvements</p>
                        <p>And over <span className="yellow_letter">438</span> bugs patched!</p>
                    </div>
                    <div className="home__update_info-img">
                        <Image
                            className="home__image_spider"
                            width={30}
                            height={30}
                            src="/spider.svg"
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="home__update_link">
                    <p>Our website:{" "}
                    <Link href="https://nextjs.org/blog/next-13-5">click!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
