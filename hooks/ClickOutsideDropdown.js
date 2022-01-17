import { useEffect } from "react";

export function useClickOutsideDropdown(
  ref,
  open = false,
  onClickHandler = () => {}
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        open &&
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.parentElement.classList.contains("dropdown-menu") &&
        !event.target.classList.contains("dropdown-menu")
      ) {
        onClickHandler();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open]);
}
