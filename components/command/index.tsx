import cn from "classnames";
import { Command } from "cmdk";
import {
  ArrowLeft,
  Command as CommandIcon,
  Document,
  GitHub,
  Home,
  LinkedIn,
  Mail,
  Sparkles,
  Travel,
} from "components/icons";
import { HTMLAttributes, ReactNode, useEffect, useMemo, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { useTheme } from "next-themes";
import router from "next/router";
import { tinykeys } from "tinykeys";

import styles from "./command.module.scss";

enum PageGroup {
  Themes = "themes",
}

const pagesKeymap: { [key: string]: () => void } = {
  // Pages
  h: () => router.push("/"),
  w: () => router.push("/world"),
  // Navigation
  backspace: () => router.back(),
  // External
  "c v": () => window.open("https://lou-tigroudja.com/CV.pdf"),
  "g i": () => window.open("https://github.com/AbsolumFrAG"),
  "l i": () =>
    window.open("https://www.linkedin.com/in/lou-tigroudja-a02b011aa/"),
  "s s": () => window.open("https://status.lou-tigroudja.com"),
  "g g": () => window.open("mailto:lou.tigroudja07@gmail.com?subject=Bonjour"),
};

const ThemeItems = ({ closeDialog }: { closeDialog: () => void }) => {
  const { theme: activeTheme, themes, setTheme } = useTheme();

  return (
    <>
      {themes.map((theme) => {
        if (theme === activeTheme) return null;
        return (
          <Command.Item
            value={theme}
            key={`theme-${theme}`}
            onSelect={() => {
              setTheme(theme);
              closeDialog();
            }}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Command.Item>
        );
      })}
    </>
  );
};

const Item = ({
  value,
  keybind,
  onSelect,
  children,
  ...props
}: {
  value: string;
  keybind?: string;
  onSelect?: () => void;
  children: ReactNode;
  props?: HTMLAttributes<HTMLDivElement>;
}) => {
  const cb = () => {
    if (onSelect) {
      onSelect();
    }
    if (keybind && pagesKeymap[keybind]) {
      pagesKeymap[keybind]();
    }
  };

  return (
    <Command.Item key={value} onSelect={cb} {...props}>
      {children}

      {keybind && (
        <div cmdk-shortcuts="">
          {keybind.split(" ").map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
};

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState<string[]>([]);
  const page = pages[pages.length - 1];

  const keymap = useMemo(() => {
    return {
      t: () => {
        setSearch("");
        setPages([PageGroup.Themes]);
        // timeout to prevent key in input
        setTimeout(() => setOpen(true), 100);
      },
      ...pagesKeymap,
    };
  }, [setSearch, setPages, setOpen]);

  // Register the keybinds globally
  useEffect(() => {
    if (open) return;
    const unsubs = [tinykeys(window, keymap)];
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  }, [open, keymap]);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Popover.Root modal open={open} onOpenChange={setOpen}>
      <Popover.Trigger className={styles.commandIcon}>
        <CommandIcon />
      </Popover.Trigger>
      <div
        className={cn(styles.screen, {
          [styles.show]: open,
        })}
      >
        <Popover.Content className={styles.command}>
          <Command
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !search) {
                e.preventDefault();
                setPages((pages) => pages.slice(0, -1));
              }
              if (e.key === "Escape" && !page) {
                e.preventDefault();
                setOpen(false);
              }
            }}
          >
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder={
                page === PageGroup.Themes
                  ? "Sélectionner un thème..."
                  : "Taper une commande ou une recherche..."
              }
            />
            <Command.List>
              {!page && (
                <>
                  <Command.Group heading="Pages">
                    <Item value="Monde" keybind="w">
                      <Travel viewBox="0 0 44 44" />
                      Monde
                    </Item>
                    <Item value="CV" keybind="c v">
                      <Document />
                      CV
                    </Item>
                  </Command.Group>
                  <Command.Group heading="Navigation">
                    <Item
                      value="Menu"
                      keybind="⌘+k"
                      onSelect={() => setOpen(false)}
                    >
                      <CommandIcon />
                      Menu
                    </Item>
                    <Item value="Retour" keybind="backspace">
                      <ArrowLeft />
                      Retour
                    </Item>

                    <Item value="Accueil" keybind="h">
                      <Home />
                      Accueil
                    </Item>
                    <Item
                      value="Thèmes"
                      keybind="t"
                      onSelect={() => {
                        setSearch("");
                        setPages([PageGroup.Themes]);
                      }}
                    >
                      <Sparkles />
                      Thèmes
                    </Item>
                  </Command.Group>
                  <Command.Group heading="External">
                    <Item value="GitHub" keybind="g i">
                      <GitHub />
                      GitHub
                    </Item>
                    <Item value="LinkedIn" keybind="l i">
                      <LinkedIn />
                      LinkedIn
                    </Item>
                    <Item value="Statut" keybind="s s">
                      Statut
                    </Item>
                    <Item value="Email" keybind="g g">
                      <Mail />
                      Email
                    </Item>
                  </Command.Group>
                </>
              )}

              {page === PageGroup.Themes && (
                <ThemeItems
                  closeDialog={() => {
                    setPages((pages) => pages.slice(0, -1));
                    setSearch("");
                    setOpen(false);
                  }}
                />
              )}
            </Command.List>
          </Command>
        </Popover.Content>
      </div>
    </Popover.Root>
  );
};

export default CommandMenu;
