
import React, {useEffect,useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'
const mainNav = [
    {
        display :"Trang chủ",
        path: "/"
    },
    {
        display :"Sản Phẩm",
        path: "/catalog"
    },
    {
        display :"Phụ kiện",
        path: "/accessories"
    },
    {
        display :"Liên hệ",
        path: "/contact"
    }

]
export const Header = () => {
    //useLocation là một hàm trả về đối tượng vị trí có chứa thông tin về URL 
    const { pathname } = useLocation()
    // findIndex : ktra true/false dn luc tra ve gia tri true 
    const activeNav = mainNav.findIndex(e => e.path === pathname)
    //useRef hook là một function trả về một object với thuộc tính current được khởi tạo thông qua tham số truyền vào
    //Ref có thể được sử dụng để truy cập đến DOM node hoặc React element
    // khoi tao la null
    const headerRef = useRef(null)
    // useEffect hook la
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll",null)
        };
    }, []);

    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')

  return (
    <div className="header" ref={headerRef}>
        <div className="container">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                <div className="header__menu__left" ref={menuLeft}>
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-chevron-left'></i>
                    </div>
                    
                    {
                        // ham Map :tạo một mảng mới từ việc gọi một hàm cho mọi phần tử của mảng. 
                        // item :gia tri cua ptu hien tai    index : chi so cua ptu
                        mainNav.map((item,index)=>(
                            <div  key={index} 
                            className={`header__menu__item header__menu__left__item 
                            ${index === activeNav ? 'active' : ''}`}
                            onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className='header__menu__right'>
                    <div className="header__menu__item header__menu__right__item">
                        <i className="bx bx-search"></i>
                    </div>
                    <div className=" header__menu__item header__menu__right__item">
                        <Link to="/cart">
                        <i className='bx bx-shopping-bag'></i>
                        </Link>
                    </div>
                    <div className=" header__menu__item header__menu__right__item">
                        <i className='bx bx-user'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
