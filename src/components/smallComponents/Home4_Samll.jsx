import React from 'react'
import Heart from '../img/heart-icon.png'
import EyeIcon from '../img/eye-icon.png'
import FullStar from '../img/full-star.png'
import EmptyStar from '../img/empty-star.png'

const Home4_Samll = ({style,img,title, prc1, disPrc,discount}) => {
  return (

            <div >

                <div className='h-fit w-[270px] mx-2 '>

                    <div className="h-[70%] w-full bg-gray-200 rounded-sm">
                        <div className='bg-red-600 w-14 h-8 rounded-sm text-center text-white pt-1 relative top-3 left-3 cursor-pointer hover:w-15 hover:bg-red-700'>{discount}</div>
                        <div className='h-[150px]'>
                            <img className={style} src={img} />
                        </div>
                        <div className='flex flex-col items-center transform scale-100 relative left-24 bottom-44'>
                            <img className='cursor-pointer' src={Heart} />
                            <img className='cursor-pointer' src={EyeIcon} />
                        </div>
                        <button className='text-white h-9 bg-black w-full cursor-pointer hover:font-bold'>Add to Cart</button>
                    </div>

                    <div className="bg-white w-full h-[30%] px-2">
                        <h3 className="text-[18px] font-bold leading-[24px] mb-1">{title}</h3>
                        <div className='text-red-600'>${disPrc}<span className='line-through text-gray-600 mx-4 my-2'>${prc1}</span></div>
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

export default Home4_Samll
