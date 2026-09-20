import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CourseItem, CourseTier } from "../data/courses";

const STORAGE_KEY = "popi-courses-v2";
const TIERS: CourseTier[] = ["fond-de-tiroir", "ferme", "supermarche"];

interface ListState {
  checked: Set<string>;
  /** Sous-liste choisie par la personne, uniquement pour les lignes déplacées (les autres gardent la valeur par défaut). */
  tiers: Record<string, CourseTier>;
}

/** État mémorisé sur l'appareil, ou null si la personne n'a encore rien modifié. */
function readStored(items: CourseItem[]): ListState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw) as { checked?: unknown; tiers?: unknown };
    const known = new Map(items.map((item) => [item.id, item]));

    const checked = new Set<string>(
      Array.isArray(parsed.checked) ? parsed.checked.filter((id): id is string => typeof id === "string" && known.has(id)) : [],
    );

    const tiers: Record<string, CourseTier> = {};
    if (parsed.tiers && typeof parsed.tiers === "object") {
      for (const [id, tier] of Object.entries(parsed.tiers as Record<string, unknown>)) {
        const item = known.get(id);
        if (item && TIERS.includes(tier as CourseTier) && tier !== item.tier) tiers[id] = tier as CourseTier;
      }
    }
    return { checked, tiers };
  } catch {
    // Stockage indisponible (navigation privée, données bloquées) : la liste marche quand même, sans mémoire.
    return null;
  }
}

/**
 * Liste de courses : cases cochées + sous-liste de chaque ligne, mémorisées sur l'appareil
 * (pas de compte, pas de serveur).
 *
 * Départ : seules les lignes marquées `cocheParDefaut` (basiques évidents du fond de tiroir) sont
 * cochées ("je l'ai déjà"), le reste est décoché. Tant que la personne
 * n'a rien modifié, rien n'est enregistré : les changements futurs de src/data/courses.ts
 * s'appliquent donc à tout le monde.
 */
export function useShoppingList(items: CourseItem[]) {
  const defaults = useMemo<ListState>(
    () => ({ checked: new Set(items.filter((item) => item.cocheParDefaut).map((item) => item.id)), tiers: {} }),
    [items],
  );
  const [state, setState] = useState<ListState>(() => readStored(items) ?? defaults);
  const touched = useRef(false);

  useEffect(() => {
    if (!touched.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ checked: [...state.checked], tiers: state.tiers }));
    } catch {
      // Ignoré : voir readStored.
    }
  }, [state]);

  const tierOf = useCallback((item: CourseItem): CourseTier => state.tiers[item.id] ?? item.tier, [state.tiers]);

  const toggle = useCallback((id: string) => {
    touched.current = true;
    setState((prev) => {
      const checked = new Set(prev.checked);
      if (checked.has(id)) checked.delete(id);
      else checked.add(id);
      return { ...prev, checked };
    });
  }, []);

  /**
   * Déplace une ligne vers une autre sous-liste. Le fond de tiroir, c'est "ce que j'ai déjà" :
   * une ligne qui en sort devient à acheter (décochée), une ligne qui y entre est cochée.
   */
  const move = useCallback((item: CourseItem, target: CourseTier) => {
    touched.current = true;
    setState((prev) => {
      const from = prev.tiers[item.id] ?? item.tier;
      if (from === target) return prev;

      const tiers = { ...prev.tiers };
      if (target === item.tier) delete tiers[item.id];
      else tiers[item.id] = target;

      const checked = new Set(prev.checked);
      if (target === "fond-de-tiroir") checked.add(item.id);
      else if (from === "fond-de-tiroir") checked.delete(item.id);

      return { checked, tiers };
    });
  }, []);

  /** Revient à l'état de départ : listes d'origine, fond de tiroir coché, le reste décoché. */
  const reset = useCallback(() => {
    touched.current = true;
    setState(defaults);
  }, [defaults]);

  const isDefault =
    Object.keys(state.tiers).length === 0 &&
    state.checked.size === defaults.checked.size &&
    [...defaults.checked].every((id) => state.checked.has(id));

  return { checked: state.checked, tierOf, toggle, move, reset, isDefault };
}
