import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Mes Projets
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Découvrez mes derniers projets
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              J'ai travaillé sur une grande variété de projets, des sites Web
              simples aux applications Web complexes. Voici quelques-uns de mes
              favoris.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map(
            (
              {
                title,
                href,
                dates,
                description,
                technologies,
                links,
                image,
                video,
              },
              id
            ) => (
              <ProjectCard key={title}>
                <ProjectCard.Media
                  href={href}
                  title={title}
                  image={image}
                  video={video}
                />
                <ProjectCard.Header
                  title={title}
                  dates={dates}
                  description={description}
                  href={href}
                />
                <ProjectCard.Tags tags={technologies} />
                <ProjectCard.Links links={links} />
              </ProjectCard>
            )
          )}
        </div>
      </div>
    </section>
  );
}
