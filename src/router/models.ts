import type { RouteLocationRaw } from 'vue-router'

export const RouteNames = {
  Home: 'Home',
  Game: 'Game',
} as const
export type RouteName = typeof RouteNames[keyof typeof RouteNames]

export class RouteLocations {
  static toHome(): RouteLocationRaw {
    return {
      name: RouteNames.Home,
    }
  }
  static toGame(): RouteLocationRaw {
    return {
      name: RouteNames.Game,
    }
  }
}
