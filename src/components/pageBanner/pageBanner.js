import { css } from '@emotion/css'
import { Menu } from '../../components'


export const PageBanner = ({
  title,
  children,
  banner,
  bannerResponsive,
  textLeft
}) => {
    const pageBanner=css`
      background:url(${banner});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 100vh;
      width: 100%;
      @media (min-width:240px) and (max-width:500px){
        background: url(${bannerResponsive}) no-repeat;
        background-size: cover;
      }
    `
    const pageBannerBackground=css`
      width:100%;
      height:100%;
      background: rgb(152,152,152);
      background: ${
        !textLeft ? 'linear-gradient(90deg, rgba(254,254,254,0) 0%, rgba(255,255,255,0) 38%, rgba(7,46,0,0.999019676229867) 92%)'
        :
        'linear-gradient(90deg, rgba(3,37,0,0.9878151944371498) 0%, rgba(6,79,0,0.7161065109637605) 29%, rgba(0,212,255,0) 100%)'
      };
      padding: 3rem 0;
    `
    const pageTitleBanner=css`
      text-align: justify;
      align-items: end;
      color:var(--white-primary);
      display:flex;
      flex-direction: column;
      gap:2rem;
      justify-content: center;
      width:30%;
      height:100%;
      margin-left: ${!textLeft ? '60%' : '10%'};
      padding:3rem;
      line-height:2rem;
      text-align:center;
      @media (min-width:240px) and (max-width:880px){
        width:100%;
        align-items:center;
        margin:0;
        padding:1rem;
      }
      @media (min-width:1200px) and (max-width:1400px){
        width:50%;
        align-items:center;
        margin-left:40%;
        padding:1rem;
      }
    `
    const pageBannerText=css`
      text-align:justify;
      overflow-x: hidden;
      overflow-y: scroll;
      
      @media (min-width:240px) and (max-width:1400px){
        padding:1rem;
        background:var(--banner-responsive);
        display:none;
      }
      `
    return (
      <>
        <section
          className={pageBanner}
        >
          <div
            
            className={pageBannerBackground}
          >
            <div
              className={pageTitleBanner}
            >
              <h1>{title}</h1>
              <p className={pageBannerText}>
                {children}
              </p>
            </div>
          </div>
        </section>
        <Menu />
      </>
    );
};