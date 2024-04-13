import Image from 'next/image'

const SixthSection = () => {
  return (
    <div className=''>
        <div className='py-20 space-y-20 items-center justify-center flex flex-col bg-[#E5E4E2]'>
            <div className='text-4xl md:w-2/5 text-center px-10'>
                Robust features to achieve any business objective as your team scales.
            </div>

            <div className='space-y-10 md:space-x-40 md:flex md:space-y-0'>

                <div className=''>
                    <div className='flex-col flex w-96 space-y-4'>
                        <Image 
                            src={'/images/icons/gears.png'}
                            width={300}
                            height={300}
                            alt='icon-1'
                            className="w-20 h-20"
                        />

                    <div className='text-2xl font-semibold'> Automation & Integration of Tools </div>
                        <div className='ml-6 space-y-4 text-xl'>
                            <div> • Connect teams and automate work to improve productivity. </div>
                            <div> • Integrate with your favorite tools to streamline work. </div>
                            <div> • Automate repetitive tasks to save time and reduce errors. </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='flex-col flex w-96 space-y-4'>
                        <Image 
                            src={'/images/icons/puzzle.png'}
                            width={300}
                            height={300}
                            alt='icon-1'
                            className="w-20 h-20"
                        />

                    <div className='text-2xl font-semibold'> Automate processes </div>
                        <div className='ml-6 space-y-4 text-xl'>
                            <div> • Systemize intakes with Workflow Builder and Forms </div>
                            <div> • Reduce manual work with custom Rules like assigning tasks and updating statuses </div>
                            <div> • Automate work in one place with 200+ integrations </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='flex-col flex w-96 space-y-4'>
                        <Image 
                            src={'/images/icons/refresh-2.png'}
                            width={300}
                            height={300}
                            alt='icon-1'
                            className="w-20 h-20"
                        />

                    <div className='text-2xl font-semibold'> Get real-time insights </div>
                        <div className='ml-6 space-y-4 text-xl'>
                            <div> • Monitor progress across teams, without manual work </div>
                            <div> • Build personalized visualizations with Custom Fields and Charts </div>
                            <div> • Save time on creating reports with a robust Charts template library </div>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className='space-y-10 md:space-x-40 md:flex md:space-y-0'>

                <div className=''>
                    <div className='flex-col flex w-96 space-y-4'>
                        <Image 
                            src={'/images/icons/lock.png'}
                            width={300}
                            height={300}
                            alt='icon-1'
                            className="w-20 h-20"
                        />

                    <div className='text-2xl font-semibold'> Manage permissions and settings </div>
                        <div className='ml-6 space-y-4 text-xl'>
                            <div> • Control permissions, privacy settings, security requirements and more from a centralized admin console </div>
                            <div> • Reduce manual work with custom Rules like assigning tasks and updating statuses </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='flex-col flex w-96 space-y-4'>
                        <Image 
                            src={'/images/icons/contacts.png'}
                            width={300}
                            height={300}
                            alt='icon-1'
                            className="w-20 h-20"
                        />

                    <div className='text-2xl font-semibold'> Protect sensitive data </div>
                        <div className='ml-6 space-y-4 text-xl'>
                            <div> • Connect teams and automate work to improve productivity. </div>
                            <div> • Manage resourcing for teams with messaging, comments, and unique views </div>
                            <div> • Automate repetitive tasks to save time and reduce errors. </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='flex-col flex w-96 space-y-4'>
                        <Image 
                            src={'/images/icons/menu.png'}
                            width={300}
                            height={300}
                            alt='icon-1'
                            className="w-20 h-20"
                        />

                    <div className='text-2xl font-semibold'> Set goals and drive alignment </div>
                        <div className='ml-6 space-y-4 text-xl'>
                            <div> • Save time on creating reports with a robust Charts template library </div>
                            <div> • Track all of your teams projects in a single view with Portfolios </div>
                            <div> • Align your organization and inspire ownership with Goals </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
        
    </div>
  )
}

export default SixthSection