import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/department/')({
  component: () => <div>Hello /_admin/department/!</div>
})