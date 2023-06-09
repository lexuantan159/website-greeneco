import { faInfoCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as adminServices from '../../services/adminServices';
import AuthContext from '../../context/authProvider';
import { OrdersContext } from '../../context/ordersProvider';
import { Spinner } from '@material-tailwind/react';
import moment from 'moment/moment';
import vnStr from 'vn-str';
import Swal from 'sweetalert2';

const OrderList = () => {
    document.title = 'Danh sách đơn hàng | Dashboard';
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState([]);
    const { auth } = useContext(AuthContext);
    const { ordersList, setOrdersList } = useContext(OrdersContext);
    const formattedNumber = (num) => {
        return num.toLocaleString('en-US').replace(/,/g, '.');
    };
    const handleChangeSearch = (e) => {
        const searchValue = vnStr.rmVnTones(e.target.value).toLowerCase();
        console.log(searchValue);
        const searchItem =
            searchValue !== ''
                ? ordersList.filter((item) => vnStr.rmVnTones(item.name.toLowerCase()).includes(searchValue))
                : ordersList;
        setOrders(searchItem);
    };
    useEffect(() => {
        console.log('1');
        const fetchOrder = async () => {
            const response = await adminServices.getOrders(auth.accessToken);
            if (response.statusCode === 200) {
                setOrders(response.orders);
                setOrdersList(response.orders);
                setLoading(false);
            }
        };
        fetchOrder();
    }, []);

    const handleDelete = (e) => {
        Swal.fire({
            title: 'Bạn có chắc không ?',
            text: 'Bạn sẽ không thể hoàn nguyên điều này !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Có, xóa nó đi !',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                deleteEvent();
            }
        });
        const deleteEvent = async () => {
            const orderId = e.target.closest('tr').getAttribute('data-id');
            const deleteOrder = await adminServices.deleteOrder(auth.accessToken, orderId);
            if (deleteOrder.statusCode === 200) {
                Swal.fire('Thành công !', 'Đơn hàng đã được xóa.', 'success').then((result) => {
                    result.isConfirmed && setOrders(ordersList.filter((order) => +order.id !== +orderId));
                    setLoading(false);
                });
            } else {
                Swal.fire('Lỗi !', 'Có lỗi khi xóa đơn hàng.', 'error');
            }
        };
    };
    return (
        <>
            <div></div>
            <main className="flex-1">
                <div className="sticky top-0 left-0 right-0 flex items-center justify-between py-5 px-10 border-2 border-gray-200 rounded-b-2xl bg-white">
                    <div>
                        <h1 className="text-xl font-bold leading-relaxed text-gray-800">Danh sách đơn hàng</h1>
                        <p className="text-sm font-sm text-gray-500">Danh sách cách đơn hàng đã đặt trên hệ thống</p>
                    </div>
                    <div className="flex items-center p-2 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 opacity-30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="bg-gray-100 outline-none"
                                type="text"
                                placeholder="Nhập tên người đặt..."
                                onChange={handleChangeSearch}
                            />
                        </div>
                    </div>
                </div>
                {loading ? (
                    <Spinner className="h-12 w-12 mt-60 mx-auto" />
                ) : (
                    <table className="w-[90%] m-auto">
                        <thead>
                            <tr className="text-sm font-medium text-gray-700 border-b-4 border-gray-200">
                                <td className="py-4 px-4 text-lg font-bold text-primaryColor text-center">ID</td>
                                <td className="py-4 px-4 text-lg font-bold text-primaryColor text-center">Họ và tên</td>
                                <td className="py-4 text-lg font-bold text-primaryColor text-center">Địa chỉ</td>
                                <td className="py-4 px-2 text-lg font-bold text-primaryColor text-center">Tổng tiền</td>
                                <td className="py-4 px-4 text-lg font-bold text-primaryColor text-center">Ngày đặt</td>
                                <td className="py-4 px-2 text-lg font-bold text-primaryColor text-center">
                                    Trạng thái
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 &&
                                orders.map((order) => (
                                    <tr
                                        key={order.id}
                                        data-id={order.id}
                                        className="border-2 border-gray-200 text-center"
                                    >
                                        <td className="py-4 px-4 text-center text-blue-gray-900 font-extrabold">
                                            {order.id}
                                        </td>
                                        <td className={'py-1 px-2 text-center'}>{order.name}</td>
                                        <td className="w-[350px] py-6 truncate inline-block text-center">
                                            {order.address}
                                        </td>
                                        <td className="ml-6 py-4 px-4 text-center">
                                            <span>{formattedNumber(order.totalAmount + 25000)} đ</span>
                                        </td>
                                        <td className="py-1 text-center">
                                            {moment(order.createdAt).format('DD/MM/YYYY')}
                                        </td>
                                        <td
                                            className={`py-4 px-4 text-center text-base font-bold ${
                                                order.status === 'Đã đặt' ? 'text-primaryColor' : 'text-red-700'
                                            }`}
                                        >
                                            {order.status}
                                        </td>
                                        <td className="py-1 px-5 text-center">
                                            <Link
                                                to={`/dashboard/list-order/${order.id}`}
                                                className="px-2 text-primaryColor hover:text-light-blue-900"
                                                title="Chi tiết"
                                            >
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                            </Link>
                                            <button
                                                className="px-2 text-primaryColor hover:text-deep-orange-900"
                                                onClick={handleDelete}
                                            >
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </main>
        </>
    );
};

export default OrderList