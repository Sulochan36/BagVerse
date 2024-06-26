import { useState } from 'react';
import LoginPopup from '../components/LoginPopup';
import Nav from '../components/Nav';


import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality,
} from "../sections/index";
//I am trying to commit changes
const Home = () => {

    // const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {/* {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>} */}

            <main className='relative'>
                {/* <Nav setShowLogin={setShowLogin} /> */}
                <section className='xl:padding-l wide:padding-r padding-b'>
                    <Hero />
                </section>
                <section className='padding'>
                    <PopularProducts />
                </section>
                <section className='padding'>
                    <SuperQuality />
                </section>
                <section className='padding-x py-10'>
                    <Services />
                </section>
                <section className='padding'>
                    <SpecialOffer />
                </section>
                <section className='bg-pale-blue padding'>
                    <CustomerReviews />
                </section>
                <section className='padding-x sm:py-32 py-16 w-full'>
                    <Subscribe />
                </section>
                


            </main>
        </>




    );
};

export default Home;