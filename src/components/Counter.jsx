import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

export default function Counter({ to, suffix = "", duration = 2 }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (!inView) return

        const controls = animate(0, to, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => setValue(Math.round(latest)),
        })

        return () => controls.stop() // CLEAN UP
    }, [inView, to, duration])

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    )
}
