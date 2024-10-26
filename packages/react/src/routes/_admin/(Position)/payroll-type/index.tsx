import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/(Position)/payroll-type/')({
  component: () => <div>Hello /_admin/(Position)/payroll-type/!</div>
})