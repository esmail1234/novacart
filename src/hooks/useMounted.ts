import { useState, useEffect } from "react";

/**
 * A hook to detect if the component has mounted on the client.
 * Useful for preventing hydration mismatches when using data from localStorage/Zustand.
 */
export function useMounted() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    return mounted;
}
