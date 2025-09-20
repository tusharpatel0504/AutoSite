import { useRef, useEffect } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}

export const LazyVideo: React.FC<LazyVideoProps> = ({ src, ...props }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            },
            {
                threshold: 0.5, // Start playing when 50% of the video is visible
            },
        );

        const currentVideoRef = videoRef.current;
        if (currentVideoRef) {
            observer.observe(currentVideoRef);
        }

        return () => {
            if (currentVideoRef) {
                observer.unobserve(currentVideoRef);
            }
        };
    }, []);

    return <video ref={videoRef} src={src} {...props} />;
};