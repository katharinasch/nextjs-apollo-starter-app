import { Disclosure } from '@headlessui/react'
import { Navigation } from "../components/Navigation"
import { Navlink } from "./Navlink"
import { NavigationImage } from "../components/NavigationImage"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const NavbarWithoutRouter = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <NavigationImage />
              <div className="flex space-x-4 justify-self-center">
                <Navlink active text='Home'/>
                <Navlink text='Quiz'/>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export const Navbar= () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <NavigationImage />
              <div className="flex space-x-4 justify-self-center">
                <Navigation />
              </div>
            </div>
          </div>
                
        </>
      )}
    </Disclosure>
  )
}