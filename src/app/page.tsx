import Nav from '../components/Nav/page'
import HomeHead from '../components/homeHead/page'
import HomePosts from '../components/HomePosts/page'
import Join from '../components/Join/page'
export default function Home() {
  return (
    <div className="home w-full h-100">
      <Nav />
      <HomeHead/>
      <HomePosts/>
      <Join/>
    </div>
  )
}
