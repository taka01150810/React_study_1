// 共通にしたい箇所を新たにコンポーネント作成する
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (<>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/information">Information</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
    {/* 各コンポーネントが表示される場所 */}
    <Outlet />
  </>)
}


export default Layout