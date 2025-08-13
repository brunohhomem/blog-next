"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  // TODO: checar login do usuário

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    if (!post) {
      return {
        error: "Erro desconhecido",
      };
    }

    // TODO: mover este método para o repositório
    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

    // TODO: revalidateTag ou revalidatePath
    revalidateTag("posts");
    revalidateTag(`post-${post.slug}`);

    return {
      error: "",
    };
  }
}
