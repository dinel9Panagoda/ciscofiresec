import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const metadata = {
  title: 'Cisco',
  description: 'Cisco Fire Security Communication',
}

const RootLayout = ({ children }) => {
    return (
      <html lang='en'>
          <body>
          <Navbar />

                        
                          {children}

                      <Footer />

          </body>
      </html>
    )
  }
  

export default RootLayout;
