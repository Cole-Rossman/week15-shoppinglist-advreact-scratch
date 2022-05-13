import { useList } from "../../context/ListProvider"

export default function Header() {
  const { items } = useList()
  return (
    <div>Number of grocery items left: {items.length}</div>
  )
}
