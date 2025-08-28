import React from 'react'
import Heart from '../img/heart-icon.png'
import EyeIcon from '../img/eye-icon.png'
import FullStar from '../img/full-star.png'
import EmptyStar from '../img/empty-star.png'

const Home6_Small = ({style,img,title, disPrc,discount}) => {
    return (
        <div className='h-[322px] w-[270px] mx-1.5 relative'>

            <div className="h-[80%] w-full bg-gray-200">
                <div className='h-[150px]'>
                    <img className={style} src={img} />
                </div>
                <div className='flex flex-col items-center transform scale-100 relative left-24 bottom-35'>
                    <img className='cursor-pointer my-1' src={Heart} />
                    <img className='cursor-pointer my-1' src={EyeIcon} />
                </div>
                <button className='text-white h-9 bg-black w-full cursor-pointer hover:font-bold'>Add to Cart</button>
            </div>

            <div className="bg-white w-full h-[20%] px-2 relative bottom-2">
                <h3 className="text-[16px] font-bold leading-[24px] mb-1 pt-2">{title}</h3>
                
                <div className='flex items-center'>
                    <span className='text-red-600 mr-4 mt-1'>${disPrc}</span>
                <div className='flex mt-1 items-center'>
                    <img className='mr-1 transform scale-100' src={FullStar} />
                    <img className='mr-1 transform scale-100' src={FullStar} />
                    <img className='mr-1 transform scale-100' src={FullStar} />
                    <img className='mr-1 transform scale-100' src={FullStar} />
                    <img className='mr-1 transform scale-100' src={EmptyStar} />
                    <div>(75)</div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Home6_Small
