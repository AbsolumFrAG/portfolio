import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Prendre Contact
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Vous voulez discuter ou travailler avec moi ?{" "}
            <Link
              href={DATA.contact.social.Email.url}
              className="text-blue-700 dark:text-blue-300 hover:underline font-medium"
            >
              {DATA.contact.social.Email.name}
            </Link>{" "}
            et je répondrai dès que possible.
          </p>
        </div>
      </div>
    </section>
  );
}
