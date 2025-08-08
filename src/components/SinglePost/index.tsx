import { findPostBySlugCached } from "@/lib/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type SinglePostProps = {
  slug: string
}

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug)
  const postLink = `/post/${post.slug}`;

  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
          priority
        />

        <PostHeading url={postLink} as="h2">
          {post.title}
        </PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="text-xl text-slate-600 italic mb-4">
        {post.excerpt}
      </p>

      <div>
        {post.content}
      </div>
    </article>
  );
}
