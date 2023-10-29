'use client'

import Image from 'next/image';
// @ts-ignore
import useSound from 'use-sound';

export default function Team() {
    const [play] = useSound('/designer.mp3');
    return (
        <div className="team page">
            <h1 className="home__title about__layout_title">
                -<br />
                <span className="bordo_letter">T</span>eam
            </h1>
            <div className="team__card">
                <div className="team__programmer">
                    <div className='team__people_block'>
                    <Image
                        width={350}
                        height={350}
                        src="/pumpkin.svg"
                        alt="Picture of the author"
                    />
                    <p>Programmer</p>
                    </div>
                </div>
                <div className="team__designer">
                    <div className='team__people_block'>
                    <Image
                        className='team__img_pointer'
                        onClick={play}
                        width={350}
                        height={350}
                        src="/ghost.svg"
                        alt="Picture of the author"
                    />
                    <p>Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
