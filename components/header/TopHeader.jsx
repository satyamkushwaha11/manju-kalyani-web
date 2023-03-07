import React from 'react'

const TopHeader = () => {
    return (
        <div className=' top_heading_container'>
            <div>
                <span className='top_heading_option'>
                    English
                </span>
                <span>|</span>
                <span className='top_heading_option'>
                    हिंदी
                </span>
            </div>
            {/* <span>|</span> */}
            <div>
                <span className=' top_heading_option_greet'>
                    {/* राधे - राधे */}
                    <img className='py-1' src="https://i.pinimg.com/originals/88/78/41/887841a74528859f87f6319983489229.png" alt=""  width={100} height={40}/>
                </span>
            </div>
            <div>
                <span className='ps-4 top_heading_option'>
                    A+
                </span>
                <span>|</span>
                <span className='top_heading_option'>
                    A-
                </span>
            </div>

        </div>
    )
}

export default TopHeader