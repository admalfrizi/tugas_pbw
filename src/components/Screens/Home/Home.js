import React from 'react';
import "./Home.css"

const Home = () =>  {
    return (
        <div className="HomeContainer">
            <div className="BannerHome">
                <div className="Isi">
                    <div className="BannerTitle">
                        <h1>Kembangkan Bisnismu Dengan Sistem Integrasi Masa Depan</h1>
                        <p>Sistem aplikasi dan juga website yang akan mempermudah anda
                            dalam urusan bisnis dan di lengkapi dengan sistem yang berbasis
                            masa depan untuk mengembangkan bisnis anda lebih luas</p>
                    </div>
                    <div className="BannerImg">
                        <img src="assets/website.svg" alt="website" />
                    </div>
                </div>
            </div>
            <div className="EmailSubmission">
                <h1>Silahkan Cantumkan Email Untuk <br/> Diskusi Tentang Project</h1>
                <div className='InputEmail'>
                    <input type="text" id="email" placeholder='Email Disini'/>
                    <button className='Kirimkan'>Kirimkan</button>
                </div>
            </div>
            <div className="WhoUs">
                <div className="WhoUsInfo">
                    <h2 className="WhoUsTitle">Siapa Kami ?</h2>
                    <p>Kuproykoding.com adalah jasa pembuatan website dan aplikasi
                        yang memudahkan pengembangan bisnis serta sistem integrasi
                        berbasis masa depan yang akan membantu pengembangan bisnis
                        anda hingga ke internasional</p>
                    <button className='Find_us'>
                       Cari Tahu
                    </button>
                </div>
                <div className="ImgWhoUs">
                    <img src="assets/who_us_ic.svg" alt="who us"/>
                </div>
            </div>
            <div className="Services">
                <div className="ServiceTitle">
                    <h1>Layanan Kami</h1>
                    <p>Kami menyediakan jasa untuk pembuatan website dan aplikasi berbasis mobile seperti : </p>
                </div>
                <div className="ServicesIcons">
                    <div className='profile_corp'>
                        <img src='assets/profile_corp_ic.svg' alt='profile_corp' />
                        <p>Profil Perusahaan</p>
                    </div>
                    <div className='online_shop'>
                        <img src='assets/e-commerce_online.svg' alt='online_shop' />
                        <p>Toko Online</p>
                    </div>
                    <div className='web_personal'>
                        <img src='assets/personal_web_ic.svg' alt='web_personal'/>
                        <p>Web Pribadi</p>
                    </div>
                    <div className='etc'>
                        <img src='assets/etc_ic.svg' alt='etc' />
                        <p>Lain - Lain</p>
                    </div>
                </div>
            </div>
            <div className='Contact'>
                <div className='ContactTitle'>
                    <h1>Kontak Kami</h1>
                </div>
                <div className='ContactIsi'>
                    <div className='Whatsapp'>
                        <img src="assets/wa_ic.svg" alt=''/>
                        <h1>+62865002221232</h1>
                    </div>
                    <div className='Instagram'>
                        <img src="assets/instagram_ic.svg" alt=''/>
                        <h1>@kuproykoding</h1>
                    </div>
                    <div className='Email'>
                        <img src="assets/email_ic.svg" alt=''/>
                        <h1>kuproykoding@gmail.com</h1>
                    </div>
                </div>
            </div>
            <div className='Footer'>
                <div className='FooterIsi'>
                    <img src='assets/title_word.svg' alt='title'/>
                    <p>Copyright - 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Home