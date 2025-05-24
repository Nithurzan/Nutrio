export const FadeUp = (delay = 0, duration = 0.7) => ({
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration,
            delay,
            ease: [0.4, 0, 0.2, 1],
        },
    },
});

export const FadeLeft = (delay = 0, duration = 0.7) => ({
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration,
            delay,
            ease: [0.4, 0, 0.2, 1],
        },
    },
});

export const FadeRight = (delay = 0, duration = 0.7) => ({
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration,
            delay,
            ease: [0.4, 0, 0.2, 1],
        },
    },
});

// Optional: For parent containers to stagger children
export const StaggerContainer = (stagger = 0.15, delayChildren = 0) => ({
    visible: {
        transition: {
            staggerChildren: stagger,
            delayChildren,
        },
    },
});