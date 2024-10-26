import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/leave/')({
  component: () => <div>Hello /_admin/leave/!</div>
})