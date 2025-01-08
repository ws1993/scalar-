import type { createApiClient } from '@/libs'
import { type InjectionKey, inject } from 'vue'

/**
 * The layout of the client
 */
export type ClientLayout = 'modal' | 'web' | 'desktop'
export const LAYOUT_SYMBOL = Symbol() as InjectionKey<ClientLayout>

/**
 * Get the current client layout
 *
 * @see {@link createApiClient}
 */
export const useLayout = () => ({
  layout: inject(LAYOUT_SYMBOL, 'desktop'),
})
