import { Menu } from '../../components'


export const PageBanner = ({title, children, banner}) => {
    const pageBanner={
      backgroundImage : `url(${banner})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    }
    const pageBannerBackground = {
      width:'100%',
      height:'100%',
      background: 'rgb(152,152,152)',
      background: 'linear-gradient(90deg, rgba(152,152,152,0) 0%, rgba(255,255,255,0) 38%, rgba(7,46,0,0.999019676229867) 92%)',
      padding: '3rem 0', 
    }
    const pageTitleBanner={
      textAlign: 'justify',
      alignItems: 'end',
      color:'var(--white-primary)',
      display:'flex',
      flexDirection: 'column',
      gap:'1.5rem',
      justifyContent: 'center',
      width:'30%',
      height:'100%',
      marginLeft:'60%',
      padding:'3rem',
      lineHeight:'2rem',
    }
    return (
      <>
        <section
          style={pageBanner}
        >
          <div
            
            style={pageBannerBackground}
          >
            <div
              style={pageTitleBanner}
            >
              <h1>{title}</h1>
              {children}
            </div>
          </div>
        </section>
        <Menu />
      </>
    );
};