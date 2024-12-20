"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { loadingStore } from "@/_store/loading.store";
import { ToastUtil } from "@/_shared/utils/toast.util";
import { Button } from "@/_core/components/fragments/button";
import AppFormInput from "@/_shared/components/form/form-input";
import { FormContainer } from "@/_core/components/fragments/form";
import { Separator } from "@/_core/components/fragments/separator";
import AppFormTextarea from "@/_shared/components/form/form-textarea";
import AppFormInputPhone from "@/_shared/components/form/form-input-phone";

const formSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  email: z.string().min(1, "Campo obrigatório"),
  phoneNumber: z.string().min(1, "Campo obrigatório"),
  description: z.string().min(1, "Campo obrigatório"),
});

interface IFormData extends z.infer<typeof formSchema> {}

export default function ContactForm() {
  const t = useTranslations();
  const _loadingStore = loadingStore((state) => state);

  const form = useForm<IFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
    },
  });

  function onSubmit(values: IFormData) {
    console.log("VALUE : ", values);
  }

  return (
    <FormContainer {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-3xl p-5 px-8 shadow-md bg-background lg:scale-90"
      >
        <h4 className="font-semibold">Entre em contato</h4>

        <small className="text-foreground/60">
          Preencha o formulário abaixo e descreva sua solicitação. Nossa equipe
          retornará em breve!
        </small>

        <Separator className="my-4" />

        <AppFormInput
          required
          name="name"
          label="Nome"
          control={form.control}
        />

        <section className="my-2 w-full grid gap-4 grid-cols-1">
          <AppFormInput
            required
            type="email"
            name="email"
            label="e-mail"
            control={form.control}
          />

          <AppFormInputPhone
            required
            name="phoneNumber"
            control={form.control}
            label="Número de celular"
          />
        </section>

        <AppFormTextarea
          required
          name="description"
          control={form.control}
          label="Descrição"
        />

        <Button disabled={!form.formState.isValid} className="w-full mt-8">
          Enviar
        </Button>
      </form>
    </FormContainer>
  );
}
