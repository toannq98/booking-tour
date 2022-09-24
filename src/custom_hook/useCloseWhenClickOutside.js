import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useCloseWhenClickOutside(ref, onClose) {

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useCloseWhenClickOutside;