import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | Next App",
};

export default function About() {
    return (
        <div className="about page">
            <div className="about__contacts">
                <Link className="about__contacts_link" href="/about/contacts">
                    <Image
                        className="about__contacts_img"
                        width={500}
                        height={500}
                        src="/book.png"
                        alt="Picture of the author"
                    />
                    <p className="about__contacts_p">Contacts</p>
                </Link>
            </div>

            <div className="about__team">
                <Link className="about__team_link" href="/about/team">
                    <Image
                        className="about__team_img"
                        width={500}
                        height={500}
                        src="/ghost.png"
                        alt="Picture of the author"
                    />
                    <p className="about__team_p">Team</p>
                </Link>
            </div>
        </div>
    );
}
