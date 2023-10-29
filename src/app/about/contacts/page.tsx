"use client";

import Link from 'next/link';
import Image from 'next/image';
// @ts-ignore
import useSound from 'use-sound';

export default function Contacts() {
    const [play] = useSound('/pumpkin.mp3');
    return (
        <div className="contacts page">
            <h1 className="home__title about__layout_title">
                -<br />
                Con<span className="bordo_letter">tac</span>ts
            </h1>
            <div className="contacts__links">
                <div className="contacts__link">
                    <h2>Belkova Maria - <span className='yellow_letter'>designer</span></h2>
                    <p>Dribble: <Link href="https://vk.com" target='_blank'><span className='contacts__link_span'>click</span></Link></p>
                    <p>Telegram: <Link href="https://vk.com" target='_blank'><span className='contacts__link_span'>click</span></Link></p>
                    <p>Email: <span className='contacts__link_span'>mary@gmail.com</span></p>
                </div>
                <div className="contacts__link">
                    <h2>Pavloging - <span className='yellow_letter'>programmer</span></h2>
                    <p>Github: <Link href="https://github.com/pavloging" target='_blank'><span className='contacts__link_span'>click</span></Link></p>
                    <p>Telegram: <Link href="https://vk.com" target='_blank'><span className='contacts__link_span'>click</span></Link></p>
                    <p>Linkedin: <Link href="https://www.linkedin.com/in/pavlogingg/" target='_blank'><span className='contacts__link_span'>click</span></Link></p>
                    <p>Email: <span className='contacts__link_span'>pavlogingg@gmail.com</span></p>
                </div>
            </div>
            <div className='contacts__bottom_block'>
            <Image
                onClick={play}
                className="contacts__bottom_img"
                width={346}
                height={316}
                src="/pumpkin.png"
                alt="Picture of the author"
                />
            </div>
        </div>
    );
}
