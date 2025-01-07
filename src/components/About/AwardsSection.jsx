import {awardsData} from '../../data/awards';
import {AwardCategory} from './AwardCategory';

export function AwardsSection() {
    return (
        <section className="text-[5.2vw] md:text-[2.2vw] mb-[10vw] relative text-white">
            <div className="md:flex gap-[5vw] md:absolute left-0">
                <div
                    className="mt-[3vw] md:mt-0 md:-rotate-90 md:-translate-y-5 text-[2vw] leading-[3vw] md:leading-[1vw] md:text-[0.8vw]">
                    <h6>AWARDS+</h6>
                    <h6>RECOGNITION</h6>
                </div>
                <div className="hidden md:block">
                    <svg
                        className="w-[7vw] h-[7vw] md:w-[3.3vw] md:h-[3.3vw]"
                        viewBox="0 0 26 37"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22 32H4c-1.6 0-2.8-1.3-2.8-2.8V0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeMiterlimit={10}
                            strokeDasharray="none"
                        />
                        <path d="M25.8 32l-7.6-4.4v8.8z" fill="currentColor" opacity={1}/>
                    </svg>
                </div>
            </div>

            <div className="mt-[12vw] md:mt-[8vw] md:ml-[23vw]">
                {awardsData.map((category, index) => (
                    <div key={category.title}>
                        <AwardCategory {...category} />
                        {index < awardsData.length - 1 && <hr className="border-light"/>}
                    </div>
                ))}
            </div>
        </section>
    );
}