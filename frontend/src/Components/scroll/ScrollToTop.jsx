import {useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './styleScroll.css'

import { classNames } from '../../utils/classNames';

export const ScrolltoTop = () => {
    const [isVisable, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    return (
        <div className='fixed bottom-2 right-2'>
            <button type='button' onClick={scrollToTop} className={classNames(
                isVisable ? 'opacitu-100 btn' : 'opacity-0 btn',
                'inline-flex btn items-center p-3 rounded-full shadows-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring.offset-2 focus:ring-pink-500'
            )}>
                <KeyboardArrowUpIcon  className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    )
};