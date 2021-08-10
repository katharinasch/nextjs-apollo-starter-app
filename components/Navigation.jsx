import { useRouter } from 'next/dist/client/router'
import { Navlink } from '../stories/Navlink'

const navigation = [
  { name: 'Home', url: '/'},
  { name: 'Quiz', url:'/quiz'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navigation = () => {
    const router = useRouter();
    return (
        <div className="flex space-x-4 justify-self-center">
            {navigation.map((item) => (
                <Navlink 
                    key={item.name}
                    href={item.url}
                    text={item.name}
                    active={router.asPath === item.url}
                /> 
            ))}
        </div>
    )
}