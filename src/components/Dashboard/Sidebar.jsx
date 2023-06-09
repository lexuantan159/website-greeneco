import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faDoorOpen, faHouse, faShirt, faShop, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authProvider';

const Sidebar = () => {
    const router = useLocation();
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext) 
    const sidebar = [
        { name: 'Tổng quan', icon: faHouse, to: '/dashboard' },
        { name: 'Sản phẩm', icon: faShirt, to: '/dashboard/list-product' },
        { name: 'Tài khoản', icon: faUsers, to: '/dashboard/list-user' },
        { name: 'Đơn hàng', icon: faBagShopping, to: '/dashboard/list-order' },
    ];
    const handleLogOut = () => {
        setAuth({})
        localStorage.removeItem('auth');
        navigate('/login')
    }
    return (
        <aside className="fixed top-0 left-0 bottom-0 z-20 py-6 px-10 w-64 border-r-2 border-gray-200 bg-gradient-to-r to-green-300 from-primaryColor rounded-r-xl">
            <div className="pt-3 w-24 hidden lg:flex lg:justify-center lg:items-center">
                <img
                    className="h-[36px] w-[36px] rounded-[50%] border-4 border-[#ccc]"
                    src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1912/tuktukdesign191200146/134984546-profile-icon-vector-male-user-person-avatar-with-gear-cogwheel-for-settings-and-configuration-in.jpg?ver=6"
                    alt="ImageUser"
                />
                <h1 className=" text-[#252525] text-xl font-bold px-3">ADMIN</h1>
            </div>
            <div className='flex flex-col pt-16 justify-between min-h-[630px]'>
                <ul className="flex flex-col gap-y-6">
                    {sidebar.map((item, index) => (
                        <li key={index}>
                            <FontAwesomeIcon
                                icon={item.icon}
                                className={`${router.pathname === item.to && 'text-blue-gray-900 font-extrabold'}`}
                            />
                            <a
                                href={item.to}
                                className={`pl-3 text-blue-gray-900 hover:text-black ${router.pathname === item.to &&
                                    'text-blue-gray-900 font-extrabold'}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-y-6">
                    <li>
                        <FontAwesomeIcon icon={faShop} />
                        <Link to="/" className="pl-3  text-blue-gray-900 hover:text-black">
                            Cửa hàng
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircleUser} />
                        <Link to="/userinformation" className="pl-3  text-blue-gray-900 hover:text-black">
                                Thông tin cá nhân
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDoorOpen} />
                        <button className="pl-3 text-blue-gray-900 hover:text-black" onClick={handleLogOut}>Đăng xuất</button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
