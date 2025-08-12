"use client"

import { Button } from "@/components/Button"
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants"
import { ImageUpIcon } from "lucide-react"
import { useRef } from "react"
import { toast } from "react-toastify"

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleChooseFile() {
    if (!fileInputRef.current) return

    fileInputRef.current.click()
  }

  function handleChange() {
    if (!fileInputRef.current) return

    const fileInput = fileInputRef.current
    const file = fileInput?.files?.[0]

    if (!file) return

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024
      toast.error(`Imagem muito grande. Max.: ${readableMaxSize}kb.`)

      fileInput.value = ''
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    //TODO: Criar action de upload de imagem

    fileInput.value = ''
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="self-start"
        variant="ghost"
        type="button"
        onClick={handleChooseFile}>
        Enviar uma imagem
        <ImageUpIcon />
      </Button>
      <input
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleChange}
        ref={fileInputRef} />
    </div>
  )
}
