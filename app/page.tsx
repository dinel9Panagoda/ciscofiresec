import Banner from './components/Banner/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
// import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Insta from './components/Insta/index';
import OurServices from './components/Aboutus/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Articles />
      <OurServices />
      <Dedicated />
      <Digital />
      <Wework />
      {/* <Ourteam /> */}
      {/* <Featured /> */}
      {/* <Manage /> */}
      <FAQ />
      <Beliefs />

      {/* <Testimonials /> */}
      <footer />
      {/* <Insta /> */}
    </main>
  )
}
