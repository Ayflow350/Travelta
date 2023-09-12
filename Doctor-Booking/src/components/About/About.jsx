import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'> 
            <div className='relative w-3/4 lg:w-1/2 xl-w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt=''/>
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30px] md:right-[-7%] lg:right-[22%]'>
                  <img src={aboutCardImg} alt=''/>
                  </div>
                </div>
                {/* about content */}
                <div className='w-full lg:w-1/2 xl:w[670px] order-1 lg:order-2' >
                  <h2 className='heading'> Proud to be one of the nations best</h2>
                  <p className='text__para mt-[30px]'> 
                    For the past 30years our hospitals are recognised as one of the best in the whole of the texas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse voluptate alias nostrum natus quod, ullam expedita architecto nulla doloremque fugiat quam magni repellat vel minus reprehenderit maxime, quasi voluptates!
                  </p>

                  <p className='text__para mt-[30px]'> 
                    For the past 30years our hospitals are recognised as one of the best in the whole of the texas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse voluptate alias nostrum natus quod, ullam expedita architecto nulla doloremque fugiat quam magni repellat vel minus reprehenderit maxime, quasi voluptates!
                  </p>
                  <Link to='/'>
                    <button className='btn'> Learn more</button>
                  </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About