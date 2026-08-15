"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True only once the client has taken over from SSR. Gate any conditional
 * that depends on browser-only state (e.g. prefers-reduced-motion) behind
 * this so the first client render matches the server-rendered HTML exactly.
 * Built on useSyncExternalStore rather than a mount-flag effect — this is
 * the pattern React itself recommends for reading client-only state without
 * a synchronous setState-in-effect.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
