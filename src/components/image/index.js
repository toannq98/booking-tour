import classNames from "classnames/bind";
import { forwardRef, useState } from 'react';

import style from './image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

const Image = forwardRef(({ src, alt, classNames, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    }

    return (
        <img
            className={cx("image-custom", classNames)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;