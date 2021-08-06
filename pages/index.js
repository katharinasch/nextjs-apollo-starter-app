import Image from 'next/image'
import { Navbar } from '../stories/Navbar'
import tacoStory from "../public/taco-story.jpg"
import { Button } from '../stories/Button'


export default function Home() {
  return (
    <div>
      < Navbar />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="flex xl:flex-row lg:flex-row md: flex-col-reverse">


          <div className="sm:text-center lg:text-left pl-5">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              
              <span className="block text-green-700 xl:inline-block max-w-screen-sm">A taco a day keeps the doctor away</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Believe it or not, nobody actually knows for sure who first invented the taco.
            We do know, however, that the first tacos were served up at some point in the 18th century.
            The name “taco” actually has quite a colorful history, as it’s believed “taco”
            first referred to dynamite used in mines; the gunpowder in this dynamite was
            wrapped tightly in paper, much like a modern-day taco’s ingredients
            are wrapped in a tortilla. Most people agree that the term was
            probably adapted as a reference to the food by the Aztecs,
            back when they ruled what is now Mexico.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button 
                  primary="true"
                  href='/quiz'
                  label="Hop-hop to taco quiz!"
                />
              <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button 
                  label="Give your love to tacos"

                />
              </div>
            </div>
          </div>
          <div >
          <Image 
            src={tacoStory}
            alt="Picture of the author"
            width={640}
            height={773}/>
          </div>
        </div>

      </main>
    </div>
  )
}
