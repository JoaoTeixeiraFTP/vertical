import { useEffect, useState } from 'react';
import Orders from './OrdersTableItem.jsx';

import Image01 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/icon-01.svg';
import Image02 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/icon-02.svg';
import Image03 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/icon-03.svg';

function OrdersTable({ selectedItems }) {
    const orders = [
        {
            id: '0',
            image: Image01,
            order: '#123567',
            date: '22/01/2024',
            customer: 'Patricia Semklo',
            total: '$129.00',
            status: 'Refunded',
            items: '1',
            location: '🇨🇳 Shanghai, CN',
            type: 'Subscription',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '1',
            image: Image01,
            order: '#779912',
            date: '22/01/2024',
            customer: 'Dominik Lamakani',
            total: '$89.00',
            status: 'Approved',
            items: '2',
            location: '🇲🇽 Mexico City, MX',
            type: 'Subscription',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '2',
            image: Image02,
            order: '#889924',
            date: '22/01/2024',
            customer: 'Ivan Mesaros',
            total: '$89.00',
            status: 'Approved',
            items: '2',
            location: '🇮🇹 Milan, IT',
            type: 'One-time',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '3',
            image: Image01,
            order: '#897726',
            date: '22/01/2024',
            customer: 'Maria Martinez',
            total: '$59.00',
            status: 'Pending',
            items: '1',
            location: '🇮🇹 Bologna, IT',
            type: 'One-time',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '4',
            image: Image03,
            order: '#123567',
            date: '22/01/2024',
            customer: 'Vicky Jung',
            total: '$39.00',
            status: 'Refunded',
            items: '1',
            location: '🇬🇧 London, UK',
            type: 'Subscription',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '5',
            image: Image01,
            order: '#896644',
            date: '21/01/2024',
            customer: 'Tisho Yanchev',
            total: '$59.00',
            status: 'Approved',
            items: '1',
            location: '🇫🇷 Paris, FR',
            type: 'One-time',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '6',
            image: Image03,
            order: '#136988',
            date: '21/01/2024',
            customer: 'James Cameron',
            total: '$89.00',
            status: 'Approved',
            items: '1',
            location: '🇫🇷 Marseille, FR',
            type: 'Subscription',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '7',
            image: Image03,
            order: '#442206',
            date: '21/01/2024',
            customer: 'Haruki Masuno',
            total: '$129.00',
            status: 'Approved',
            items: '2',
            location: '🇺🇸 New York, USA',
            type: 'Subscription',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '8',
            image: Image02,
            order: '#764321',
            date: '21/01/2024',
            customer: 'Joe Huang',
            total: '$89.00',
            status: 'Pending',
            items: '2',
            location: '🇨🇳 Shanghai, CN',
            type: 'One-time',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '9',
            image: Image01,
            order: '#908764',
            date: '21/01/2024',
            customer: 'Carolyn McNeail',
            total: '$59.00',
            status: 'Refunded',
            items: '1',
            location: '🇬🇧 Sheffield, UK',
            type: 'Subscription',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];

    const [selectAll, setSelectAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(orders);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setIsCheck(list.map((li) => li.id));
        if (selectAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setSelectAll(false);
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== id));
        }
    };

    useEffect(() => {
        selectedItems(isCheck);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCheck]);

    return (
        <div className="relative rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <header className="px-5 py-4">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    All Orders <span className="font-medium text-gray-400 dark:text-gray-500">442</span>
                </h2>
            </header>
            <div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto divide-y divide-gray-100 dark:divide-gray-700/60 dark:text-gray-300">
                        {/* Table header */}
                        <thead className="border-t border-gray-100 bg-gray-50 text-xs uppercase text-gray-500 dark:border-gray-700/60 dark:bg-gray-900/20 dark:text-gray-400">
                            <tr>
                                <th className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="flex items-center">
                                        <label className="inline-flex">
                                            <span className="sr-only">Select all</span>
                                            <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                        </label>
                                    </div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Order</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Date</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Customer</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Total</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Status</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="font-semibold">Items</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Location</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Payment type</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <span className="sr-only">Menu</span>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        {list.map((order) => {
                            return (
                                <Orders
                                    key={order.id}
                                    id={order.id}
                                    image={order.image}
                                    order={order.order}
                                    date={order.date}
                                    customer={order.customer}
                                    total={order.total}
                                    status={order.status}
                                    items={order.items}
                                    location={order.location}
                                    type={order.type}
                                    description={order.description}
                                    handleClick={handleClick}
                                    isChecked={isCheck.includes(order.id)}
                                />
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrdersTable;
