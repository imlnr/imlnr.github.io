import React, { useEffect, useRef, useState } from "react";

interface ImageCarouselProps {
    images: string[];
    interval?: number; // ms
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 2500 }) => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if (images.length <= 1) return;
        timeoutRef.current = window.setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, images.length, interval]);

    if (!images.length) return null;

    return (
        <div className="image-carousel" style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '220px' }}>
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`Project screenshot ${idx + 1}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        // objectFit: 'cover',
                        opacity: idx === current ? 1 : 0,
                        transition: 'opacity 0.7s ease',
                    }}
                />
            ))}
            <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: idx === current ? '#333' : '#ccc',
                            display: 'inline-block',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel; 