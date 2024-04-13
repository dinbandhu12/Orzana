import Image from 'next/image'
import Link from 'next/link'

const logo = () => {
  return (
    <Link href={'/'}>
        <Image
            src="/images/orzana-logo.png"
            alt="Orzana Logo"
            width={80}
            height={80}
            className='mr-6'        
        />
            
    </Link>
  )
}

export default logo