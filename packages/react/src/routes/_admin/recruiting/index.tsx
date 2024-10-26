import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/recruiting/')({
  component: () => <div>Hello /_admin/recruiting/!</div>
})