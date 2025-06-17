import { FlashList } from '@shopify/flash-list'
import type { FlashListProps } from '@shopify/flash-list'

type ListProps<T> = FlashListProps<T>
const DEFAULT_ESTIMATED_ITEM_SIZE = 100

export const List = <T,>(props: ListProps<T>) => (
  <FlashList
    {...props}
    estimatedItemSize={props.estimatedItemSize ?? DEFAULT_ESTIMATED_ITEM_SIZE}
  />
)
