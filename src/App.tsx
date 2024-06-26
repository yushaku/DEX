import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { Comming } from './components/pages/Comming'
import { Dashboard } from './components/pages/Dashboard'
import { Nfts } from './components/pages/Nft'
import { CollectionNFTs } from './components/pages/Nft/NftCollection'
import { DetailNFT } from './components/pages/Nft/NftDetail'
import { NotMatch } from './components/pages/Notmatch'
import { ShopPage } from './components/pages/Shop'
import { Swap } from './components/pages/Swap'
import { Home } from './components/pages/home'
import { routes } from './utils'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.trade} element={<Swap />} />

          <Route path={routes.nfts} element={<Nfts />} />
          <Route path={`${routes.nfts}/:id`} element={<CollectionNFTs />} />
          <Route path={`${routes.nfts}/:id/:cip`} element={<DetailNFT />} />

          <Route path={routes.history} element={<Comming />} />
          <Route path={routes.vaults} element={<Comming />} />
          <Route path={routes.bridge} element={<Comming />} />
          <Route path={routes.shop} element={<ShopPage />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
