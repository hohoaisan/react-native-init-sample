import { View, Text } from 'react-native'

import ExpoSVGLogo from '@/assets/expo.svg'

export type ILogo = {
  label: string
}

export const Logo: React.FC<ILogo> = ({ label }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ExpoSVGLogo width={50} height={50} />
      <Text>{label}</Text>
    </View>
  )
}
