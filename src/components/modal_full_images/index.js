import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import style from './modal_full_images.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Image from '~/components/image';
import { useRef, useState } from 'react';
import { useCloseWhenClickOutside } from '~/custom_hook';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';


const cx = classNames.bind(style);

function ModalFullImages({ data, open, onClose }) {

    const wrapperRef = useRef(null);

    const [sliderFor, setSliderFor] = useState(null);
    const [sliderNav, setSliderNav] = useState(null);

    const [imgIndex, setImgIndex] = useState(0);
    useCloseWhenClickOutside(wrapperRef, onClose);

    const next = () => {
        sliderNav.slickNext();
        if (imgIndex < data.length - 1) {
            setImgIndex(imgIndex + 1);
        } else {
            setImgIndex(0);
        }
    };
    const previous = () => {
        sliderNav.slickPrev();
        setImgIndex(imgIndex - 1);
        if (imgIndex === 0) {
            setImgIndex(data.length - 1);
        }
    };

    const settingsForCover = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: sliderNav,
        focusOnSelect: true
    }
    const settingsForThumbs = {
        focusOnSelect: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        centerMode: true,
        // variableWidth: true,
        asNavFor: sliderFor,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    };

    if (!open) return null;

    return createPortal(
        <>
            <div className={cx("over-layout")}></div>
            <div className={cx("wrapper")} ref={wrapperRef}>
                <div className={cx("header")}>
                    <button onClick={onClose}>close</button>
                </div>
                <div className={cx("body")}>
                    <button className="button-previous" onClick={previous}>
                        <ArrowLeftIcon />
                    </button>
                    <div className={cx("cover")}>
                        <Slider
                            asNavFor={sliderNav}
                            ref={(slide1) => setSliderFor(slide1)}
                            {...settingsForCover}
                            className="slide-cover"
                        >
                            {data.map((img, index) => (
                                <img
                                    src={img}
                                    alt="thumb"
                                    key={index}
                                />
                            ))}
                        </Slider>
                    </div>
                    <button className="button-next" onClick={next}>
                        <ArrowRightIcon />
                    </button>
                    <div className={cx("number-length")}>
                        {`${imgIndex + 1} / ${data.length}`}
                    </div>
                    <div className={cx("thumbs")}>
                        <Slider
                            asNavFor={sliderFor}
                            ref={(slide2) => setSliderNav(slide2)}
                            {...settingsForThumbs}
                            className="slide-thumbs"
                        >
                            {data.map((img, index) => (
                                <img
                                    src={img}
                                    alt="thumb"
                                    key={index}
                                // onClick={() => setImgIndex(index)}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div >
        </>,
        document.getElementById("portal-full-images")
    )
}

export default ModalFullImages;