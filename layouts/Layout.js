import Head from 'next/head'
import NavigationMenu from '@component/NavigationMenu'

const Layout = ({ title, description, children, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <NavigationMenu />
      <div>{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'AirSryder | Flying Home',
  keywords: 'Flight, Cheap and comfortable flights',
  description: 'The Art of Craft',
}

export default Layout
