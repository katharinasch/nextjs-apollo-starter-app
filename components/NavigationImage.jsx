import tacoPicture from "../public/taco.svg"
import Image from 'next/image'


export const NavigationImage = () => {
    return (
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Image 
                    src={tacoPicture}
                    alt="Picture of the author"
                    width={50}
                    height={50}/>
                </div>
            </div>
        </div>
    )
}