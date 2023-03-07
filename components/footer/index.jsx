import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer_container'>
                <div className='w-75 d-flex flex-wrap justify-content-between'>
                    <div className='footer-item'>
                        <h4>Contact</h4>
                        <ul>
                            <li>+91-9129300032</li>
                            <li>Vill. kannuaj,hardoi <br />201201,UP</li>
                            <li>Email : manu@gmail.com</li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <h4>Gallery</h4>
                        <ul>
                            <li>Videos</li>
                            <li>Photos</li>
                            <li>Songs</li>
                        </ul>
                    </div>



                </div>


            </div>
            <div className=' py-2 footer_end d-flex-center flex-column'>
                <div >
                    @all right
                </div>
                <div className='text-secondary py-1' style={{fontSize:'12px'}}>
                    Made By Satyam kushwaha
                </div>

            </div>
        </>
    )
}

export default Footer