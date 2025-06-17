import { Ionicons } from '@expo/vector-icons'

type IconProps = {
  name: keyof typeof Ionicons.glyphMap
  size?: number
  color?: string
}

export const Icon = ({ name, color = 'black', size = 24 }: IconProps) => {
  return <Ionicons name={name} size={size} color={color} />
}
