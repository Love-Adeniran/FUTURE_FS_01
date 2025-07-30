import React, { useEffect, useState } from "react";

const Confetti = ({ count = 80 }) => {
    const [confetti, setConfetti] = useState([]);

    useEffect(() => {
        const colors = ["#f87171", "#34d399", "#60a5fa", "#facc15", "#a78bfa"];
        const confettiItems = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * -100}vh`,
            size: Math.random() * 6 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: `${Math.random() * 3 + 3}s`,
        }));
        setConfetti(confettiItems);
    }, [count]);

    return (
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            {confetti.map((c) => (
                <div
                    key={c.id}
                    className="absolute rounded-full opacity-80"
                    style={{
                        backgroundColor: c.color,
                        width: `${c.size}px`,
                        height: `${c.size}px`,
                        left: c.left,
                        top: c.top,
                        animation: `fall ${c.duration} linear infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export default Confetti;
