import Testimonials from "../component/Testimonials";
import Hero from "./Hero";
import Featured from "../component/Featured"
import reviews from "../data";
import Banner2 from "../component/Banner2";
import feature from "../data2"
import Footer from "./Footer";
import "./Home.css"
function Home() {
  return (
    <div>
      <Hero/>
     {
       feature.map((content)=>{
        return( content.id%2===1?(<Featured content={content} />):(<Banner2 content={content} />)
       )
       })
      
     }
      
      <div className="home_height py-3 flex flex-col w-[100vw] max-h-fit justify-center items-center bg-gray-700">
      <div className="text-center">
       <h1 className="text-4xl font-bold">Our Testimonials</h1>
       <div className="bg-violet-800 h-[4px] w-1/5 mt-1 mx-auto"></div>
       <Testimonials reviews ={reviews}/>
      </div>

    </div>
     <Footer/>
    </div>
  );
}

export default Home;
