import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/(Position)/position-list/')({
  component: () => <div>Hello /_admin/(Position)/position-list/!</div>
})