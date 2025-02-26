import { writable } from "svelte/store";

export const activeRoute = writable(
    typeof window !== "undefined" ? window.location.pathname : "/"
);

if (typeof window !== "undefined") {
    window.addEventListener("popstate", () => {
        activeRoute.set(window.location.pathname);
    });
}
