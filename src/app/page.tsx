import { PostFeatured } from "@/components/PostFeatuared"
import { PostsList } from "@/components/PostsList"
import { SpinLoader } from "@/components/SpinLoader"

import { Suspense } from "react"
export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  )
}
