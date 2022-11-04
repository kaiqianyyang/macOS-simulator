import './index.scss';
import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import Icon from '../../lib/Icon';

dayjs.locale('en'); // set language of dayjs to english

const Header: React.FC = () => {
    const timeFormat = 'MMM D, YYYY h:mm A'; // e.g. Mar 31, 2022 3:21 PM
    const [time, setTime] = useState(dayjs().format(timeFormat));
    const [showInput, setShowInput] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('Kaiqian Yang');

    useEffect(() => {
        // update every 60 * 1000 ms
        const updateTime = setInterval(() => {
            const newTime = dayjs().format(timeFormat);
            setTime(newTime);
        }, 60 * 1000);
        // clear the set interval we created
        return (): void => window.clearInterval(updateTime);
        // scalable
    }); // side effects: subscription, update, setTimer
    return (
        <header className="Header">
            <div className="HeaderLeft">
                <div>
                    <Icon type="icon-apple" style={{ fontSize: 16 }} />
                </div>
                <div>
                    {showInput ? (
                        <input
                            autoFocus
                            value={inputValue}
                            onChange={(e): void => setInputValue(e.target.value)}
                            onBlur={(): void => setShowInput(false)}
                        />
                    ) : (
                        <span
                            className="text"
                            onClick={(): void => setShowInput(true)}
                        >
                            {inputValue}
                        </span>
                    )}
                </div>
                <div>File</div>
                <div>Edit</div>
                <div>View</div>
                <div>Go</div>
                <div>Window</div>
                <div>Help</div>
            </div>
            <div className="HeaderRight">
                <a
                    href="https://aesthetic-otter-633296.netlify.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Icon type="icon-ren" style={{ fontSize: 22 }} />
                </a>
                <a
                    href="https://github.com/kaiqianyyang"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Icon type="icon-github" style={{ fontSize: 22 }} />
                </a>
                <div>{time}</div>
            </div>
        </header>
    );
};

export default Header;
