import { useEffect, useState, useRef } from "react";

interface CounterProps {
    end: number;
    duration?: number;
    className?: string;
    suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({
    end,
    duration = 2000,
    className,
    suffix = "",
}) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = Math.floor(progress * end);

            setCount(currentVal);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animateCount);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {count}
            {suffix}
        </span>
    );
};