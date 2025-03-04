import { computed } from "vue";
import type { WritableAtom } from "nanostores";
import { useStore } from "@nanostores/vue";

export function useComputedStore(atom: WritableAtom) {
  const store = useStore(atom);
  return computed({
    get: () => store.value,
    set: (value) => atom.set(value),
  });
}
