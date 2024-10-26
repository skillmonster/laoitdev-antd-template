import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/project/')({
  component: () => <div>Hello /_admin/project/!</div>
})