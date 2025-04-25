import { cn } from "@/lib/utils";
import { GitBranch, Laptop, Server, Sparkles } from "lucide-react";

const EXPERTISE_AREAS = [
  {
    title: "Maîtrise du Frontend",
    icon: Laptop,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    description:
      "Création de belles interfaces utilisateures responsives, et accessibles",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Développement Backend",
    icon: Server,
    skills: ["Node.js", "APIs", "Base de données"],
    description: "Construction de systèmes robustes et évolutifs server-side",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Pratiques Modernes",
    icon: Sparkles,
    skills: ["Performance", "Sécurité", "Tests"],
    description: "Adoption des meilleures pratiques pour un code de qualité",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Open Source",
    icon: GitBranch,
    skills: ["Collaboration", "Git", "Documentation"],
    description:
      "Contributions à des projets open source et partage de connaissances",
    color: "from-green-500 to-emerald-500",
  },
];

export default function ExpertiseShowcase() {
  return (
    <section id="expertise">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Expertise</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {EXPERTISE_AREAS.map((area) => (
            <div
              key={area.title}
              className="group rounded-lg border bg-card hover:bg-accent/50"
            >
              <div className="p-4">
                <div className="flex gap-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
                      "bg-gradient-to-br",
                      area.color
                    )}
                  >
                    <area.icon className="h-5 w-5 text-white" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-medium leading-none tracking-tight">
                      {area.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-mute-foreground">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-md border bg-background/80 px-1.5 py-0.5 text-xs font-medium text-foreground/70"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
