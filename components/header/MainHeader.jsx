import React from 'react'

const MainHeader = () => {
    return (
        <div className='main_heading_container'>
            <div className='w-100 d-flex justify-content-between'>
                <div className='main-heading-logo'>
                    <img src="https://seeklogo.com/images/S/shree-radhey-flex-printer-rmp-logo-420C248EDD-seeklogo.com.png" alt="" width={100} />
                </div>
                <div>
                    <div className='d-flex-center h-100'>
                        <ul className='d-flex main_header_options'>
                            <li className='px-3'>होम </li >
                            <li className='px-3'>आगामी कार्यक्रम</li >
                            <li className='px-3'>वीडियो</li >
                            <li className='px-3'>संपर्क करें</li >
                            <li className='px-3'>हमारे बारे में</li >
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainHeader