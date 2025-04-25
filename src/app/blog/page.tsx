import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles techniques sur le développement Web, l'ingénierie logicielle et les informations technologiques.",
  keywords: [
    "Web Development",
    "Software Engineering",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Technical Blog",
    "Programming Tutorials",
    "Development Tips",
    "Coding Best Practices",
  ],
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = getBlogPosts();

  // Tri des posts par date de publication (du plus récent au plus ancien)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <section className="max-w-2xl mx-auto p-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Mon Blog
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Building in Public
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Bienvenue dans mon jardin digital - où je partage toutes mes
            aventures dans le développement. Considérez cela comme un journal de
            bord de mes découvertes.
          </p>
        </div>
      </div>

      <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <div className="py-4 relative ml-10">
              <div className="absolute -left-16 top-2 flex items-center justify-center bg-background rounded-full">
                <Avatar className="border size-12 m-auto flex items-center justify-center">
                  <AvatarImage
                    src={`/svgs/${post.metadata.image}.svg`}
                    alt={post.metadata.title}
                    className="object-cover w-6 h-6"
                  />
                  <AvatarFallback className="text-xs">
                    {post.metadata.title[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-1 flex-col justify-start gap-1 group">
                  <time className="text-xs text-muted-foreground">
                    {formatDate(post.metadata.publishedAt)}
                  </time>
                  <h2 className="font-semibold leading-none group-hover:text-primary transition-colors">
                    {post.metadata.title}
                  </h2>
                  <span className="prose dark:prose-invert text-sm text-muted-foreground">
                    {post.metadata.summary}
                  </span>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
