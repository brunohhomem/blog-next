"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { asyncDelay } from "@/lib/async-delay";
import { postRepository } from "@/repositories/post";
import { logColor } from "@/utils/log-color";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  // TODO: checar login do usuário

  // TODO: remover linhas abaixo
  await asyncDelay(2000);
  logColor("" + id);

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
