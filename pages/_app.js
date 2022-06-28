import { ThemeProvider } from 'next-themes'
import { SnackbarProvider } from 'notistack'
import { MainLayout } from '../components/layouts/MainLayout'
import { Navbar } from '../components/Navbar'

import { Store, UserContext } from '../context/Context'
import '../styles/output.css'

function MyApp({ Component, pageProps }) {
  return (
    
    // <ThemeProvider attribute='class'>
          
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
      }}>
        <Store>
        <div className='md:pb-28 pb-20'>

          <Navbar />
        </div>
          <MainLayout title={'Aerolab Challenge - Home'} pageDescription={'Leonardo Monzón'}>
            <Component {...pageProps} />
          </MainLayout>

        </Store>
      </SnackbarProvider>
    // </ThemeProvider>
    
    )
}

export default MyApp
