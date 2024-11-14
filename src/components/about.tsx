import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

export default function About() {
  return (
    <section id="about">
      <h2 className="text-xl font-bold">A propos</h2>
      <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        {DATA.summary}
      </Markdown>
    </section>
  );
}
