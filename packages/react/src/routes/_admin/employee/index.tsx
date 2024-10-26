import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/employee/')({
  component: () => <div>Hello /_admin/employee/!</div>
})