import React from "react";
import Head from "next/head";
import Navbar from "./../components/TopNavbar";
import AfterNav from "./../components/AfterNav";
// import PhotoGallery from "./../components/PhotoGallery";
// import HotelList from "./../components/HotelList";
// import { getHotelImages } from './../components/HotelGallery';

// import ImageGallery from "./../components/ImageGallery";
import RoomsSpaces from "./../components/RoomsSpaces";
import AboutThisProperty from "./../components/AboutThisProperty";
import PropertyManager from "./../components/PropertyManager";
import ImportantInfo from "./../components/ImportantInfo";
import FAQ from "./../components/FAQ";
import ReviewsRatings from "./../components/ReviewsRatings";
import AboutHost from "./../components/AboutHost";
// import 'boxicons/css/boxicons.min.css';

import MyComponent from "./../components/MyComponents";

// export async function getStaticProps() {
//   const images = await getHotelImages();
//   return {
//     props: {
//       images,
//     },
//   };
// }
export default  function Home() {
  // const images = await getHotelImages();
  // const fetchImages = async () => {
  //   // Simulate fetching image paths; replace with actual logic if needed
  //   return [
  //     './../public/hotelView/1731429947179-pexels-cagin-kargi-43382279-7969009.jpg',
  //     '/assets/hotelView/image2.jpg',
  //     '/assets/hotelView/image3.jpg',
  //     // Add more image paths as necessary
  //   ];
  // };
  // const images = await fetchImages();
  
  return (
    <>
      <Head>
        <title>Accomodation Vista</title>
        <meta
          name="description"
          content="A simple Next.js app with TypeScript and Tailwind CSS"
        />
        <link rel='stylesheet' href='https://unpkg.com/boxicons@latest/css/boxicons.min.css' />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
      </Head>

      {/* Main content can go here */}
      <main className="p-4">
        <MyComponent />
        <Navbar />
        <AfterNav />
        {/* <HotelGallery images={images} /> */}
       
        {/* <h1 className="text-2xl font-bold text-center my-8">Hotel Gallery</h1>
        <ImageGallery images={images} /> */}
        {/* <HotelList/> */}
        {/* <PhotoGallery/> */}
        <RoomsSpaces />
        <AboutThisProperty />
        <PropertyManager />
        <ImportantInfo />
        <FAQ />
        <ReviewsRatings/>
        <AboutHost/>
      </main>
    </>
  );
}


