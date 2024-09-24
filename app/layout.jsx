import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/index';

export const metadata = {
  title: 'Cisco',
  description: 'Cisco Fire Security Communication',
}

const RootLayout = ({ children }) => {
    return (
      <html lang='en'>
          <body>
          <Navbar />

      <SideBar />
                        
                          {children}

                      <Footer />

          </body>
      </html>
    )
  }
  

export default RootLayout;
