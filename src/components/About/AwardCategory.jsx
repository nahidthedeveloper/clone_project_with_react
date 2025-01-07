export function AwardCategory({title, count, awards}) {
    return (
        <div className="w-full md:w-[50%]">
            <div className="overflow-hidden">
                <h1 className="text-gray-400 pt-[3vw]">
                    ({count.toString().padStart(2, '0')}) {title}
                </h1>
            </div>
            <div className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                {awards.map((award, index) => (
                    <div key={`${award.type}-${index}`} className="grid grid-cols-2">
                        <div className="col-span-1 overflow-hidden">
                            <h1>{award.type}</h1>
                        </div>
                        <div className="col-span-1 overflow-hidden">
                            <h1>{award.project}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}