import React from 'react'
import Home2_ScrollBar from './Home2_ScrollBar'
import JS1 from '../img/j-scroll1.png'
import JS2 from '../img/j-scroll2.png'
import JS3 from '../img/j-scroll3.png'
import JS4 from '../img/j-scroll4.png'
const Home2 = () => {
  return (
    <div>
      <br /><br /><br />
      <div className="w-full overflow-x-auto">
        <div className="flex flex-nowrap gap-6 mx-10">
          <Home2_ScrollBar discount="-40%" title={"HAVIT HV-G92 Gamepad"} prc1="160" disPrc='120' img={JS1} style={'transform scale-100  relative top-7 left-10 '} />
          <Home2_ScrollBar discount="-20%" title={"AK-900 Wired Keyboard"} prc1="100" disPrc='800' img={JS2} style={' transform scale-120 relative top-15 left-10 '} />
          <Home2_ScrollBar discount="-50%" title={"IPS LCD Gaming Monitor"} prc1="1000" disPrc='500' img={JS3} style={' transform scale-100 relative top-10 left-10 '} />
          <Home2_ScrollBar discount="-33.3%" title={"S-Series Comfort Chair"} prc1="300" disPrc='200' img={JS4} style={' transform scale-100 relative left-17 '} />
          <Home2_ScrollBar discount="-40%" title={"HAVIT HV-G92 Gamepad"} prc1="160" disPrc='120' img={JS1} style={'transform scale-100  relative top-7 left-10 '} />
          <Home2_ScrollBar discount="-20%" title={"AK-900 Wired Keyboard"} prc1="100" disPrc='800' img={JS2} style={' transform scale-120 relative top-15 left-10 '} />
          <Home2_ScrollBar discount="-50%" title={"IPS LCD Gaming Monitor"} prc1="1000" disPrc='500' img={JS3} style={' transform scale-100 relative top-10 left-10 '} />
          <Home2_ScrollBar discount="-33.3%" title={"S-Series Comfort Chair"} prc1="300" disPrc='200' img={JS4} style={' transform scale-100 relative left-17 '} />
        </div>
      </div>

      <div className='flex items-center justify-center my-15'>
        <button className='bg-red-600 px-5 py-2 text-white font-bold cursor-pointer hover:text-red-600  hover:bg-white hover:border border-red-600 rounded-sm'>View All Product</button>
      </div>
      <hr />
    </div>
  )
}

export default Home2
