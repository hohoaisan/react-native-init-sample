import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import { EScreenName } from '@/models/enums'

/**
 * NavigationProps
 * @example
 * const navigation = useNavigation<NavigationProps>() access overall app's navigation types
 * const navigation = useNavigation<NavigationProps<EScreenName.HOME>>()
 */

export type NavigationProps<T extends EScreenName | void = void> = T extends EScreenName
  ? NativeStackNavigationProp<AppStackParams, T>
  : NativeStackNavigationProp<AppStackParams>

/**
 * RouteProps
 * @example
 * const route = useRoute<RouteProps>(); access overall app's navigation types
 * const route = useRoute<RouteProps<EScreenName.HOME>>()
 * We can access route.params object that its type matches in route.params
 * like route.params.product
 */
export type RouteProps<T extends EScreenName | void = void> = T extends EScreenName
  ? RouteProp<AppStackParams, T>
  : RouteProp<AppStackParams>

export type AppStackParams = {
  [EScreenName.HOME_SCREEN]: undefined
}
