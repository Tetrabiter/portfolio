import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="w-full py-16 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Связаться со мной</h2>
      <form className="flex flex-col gap-4">
        <Input placeholder="Ваш Email" />
        <Textarea placeholder="Сообщение" />
        <Button className="text-white" type="submit">Отправить</Button>
      </form>
    </section>
  )
}
