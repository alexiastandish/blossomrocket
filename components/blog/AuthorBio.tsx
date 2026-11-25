import Link from "next/link";
import type { Author } from "@/lib/types/blog";
import { FOUNDER } from "@/lib/constants/entities";

/** End-of-article author card. Uses the same name, role and bio as the About
 *  page and the founder Person schema, so every byline matches (writing styles
 *  checklist: author consistency). */
export function AuthorBio({ author }: { author: Author }) {
  const isFounder = author.name === FOUNDER.name;

  return (
    <aside
      className="mt-12 rounded-2xl border border-border-default bg-surface-page p-6 sm:p-8"
      aria-labelledby="author-bio-heading"
    >
      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-mid mb-3">
        About the author
      </p>
      <h2
        id="author-bio-heading"
        className="text-[20px] font-semibold tracking-[-0.01em] text-ink mb-1 font-display"
      >
        {author.url ? (
          <Link
            href={author.url}
            className="hover:text-link-hover transition-colors duration-200"
          >
            {author.name}
          </Link>
        ) : (
          author.name
        )}
      </h2>
      {author.role && (
        <p className="text-[14px] text-ink-mid mb-4">{author.role}</p>
      )}
      {isFounder && (
        <>
          <p className="text-[15px] leading-[1.7] text-ink-mid mb-5">
            {FOUNDER.shortBio}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-semibold">
            <Link
              href="/about"
              className="text-violet-dark hover:text-link-hover transition-colors duration-200"
            >
              About Blossom Rocket <span aria-hidden="true">→</span>
            </Link>
            <a
              href={FOUNDER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-dark hover:text-link-hover transition-colors duration-200"
            >
              Connect on LinkedIn <span aria-hidden="true">→</span>
            </a>
          </div>
        </>
      )}
    </aside>
  );
}
