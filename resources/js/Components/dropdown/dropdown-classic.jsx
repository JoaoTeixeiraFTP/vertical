import { useEffect, useRef, useState } from 'react';
import Transition from '../../utils/Transition.jsx';

function DropdownClassic() {
    const options = [
        {
            id: 0,
            period: 'Today',
        },
        {
            id: 1,
            period: 'Last 7 Days',
        },
        {
            id: 2,
            period: 'Last Month',
        },
        {
            id: 3,
            period: 'Last 12 Months',
        },
        {
            id: 4,
            period: 'All Time',
        },
    ];

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(2);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="relative inline-flex">
            <button
                ref={trigger}
                className="btn min-w-44 justify-between border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-800 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-100"
                aria-label="Select date range"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                <span className="flex items-center">
                    <span>{options[selected].period}</span>
                </span>
                <svg className="ml-1 shrink-0 fill-current text-gray-400 dark:text-gray-500" width="11" height="7" viewBox="0 0 11 7">
                    <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                </svg>
            </button>
            <Transition
                show={dropdownOpen}
                tag="div"
                className="absolute left-0 top-full z-10 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white py-1.5 shadow-lg dark:border-gray-700/60 dark:bg-gray-800"
                enter="transition ease-out duration-100 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <div
                    ref={dropdown}
                    className="text-sm font-medium text-gray-600 dark:text-gray-300"
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                >
                    {options.map((option) => {
                        return (
                            <button
                                key={option.id}
                                tabIndex="0"
                                className={`flex w-full cursor-pointer items-center px-3 py-1 hover:bg-gray-50 hover:dark:bg-gray-700/20 ${option.id === selected && 'text-violet-500'}`}
                                onClick={() => {
                                    setSelected(option.id);
                                    setDropdownOpen(false);
                                }}
                            >
                                <svg
                                    className={`mr-2 shrink-0 fill-current text-violet-500 ${option.id !== selected && 'invisible'}`}
                                    width="12"
                                    height="9"
                                    viewBox="0 0 12 9"
                                >
                                    <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                                </svg>
                                <span>{option.period}</span>
                            </button>
                        );
                    })}
                </div>
            </Transition>
        </div>
    );
}

export default DropdownClassic;
