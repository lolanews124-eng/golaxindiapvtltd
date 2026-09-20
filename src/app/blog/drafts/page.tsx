import { draftBlogPosts } from "@/data/draftBlogPosts";
import { buildMetadata } from "@/lib/seo/metadata";
import BlogMarkdown from "@/components/blog/BlogMarkdown";

export const metadata = buildMetadata({
  title: "Draft blog posts (internal)",
  description:
    "Internal review page for unpublished Golax India blog drafts. Not indexed; do not link from public navigation until promoted to live blog.",
  canonicalUrl: "/blog/drafts",
  noindex: true,
});

export default function DraftBlogReviewPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10 sm:py-14 max-w-4xl">
        <header className="mb-10 border-b border-border pb-6">
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">
            Internal review · noindex
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Draft blog posts
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {draftBlogPosts.length} unpublished drafts. Expand each entry to
            preview full markdown. Promote to{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
              blogSlugs
            </code>{" "}
            only after editorial and legal review.
          </p>
        </header>

        <ul className="space-y-4">
          {draftBlogPosts.map((post) => (
            <li
              key={post.slug}
              className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <details className="group">
                <summary className="cursor-pointer list-none px-5 py-4 sm:px-6 sm:py-5 hover:bg-muted/40 transition-colors">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground pr-6">
                        {post.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground shrink-0">
                      <span className="rounded-full bg-muted px-2.5 py-1">
                        {post.category}
                      </span>
                      <span className="rounded-full bg-muted px-2.5 py-1">
                        {post.author}
                      </span>
                      <span className="rounded-full bg-muted px-2.5 py-1">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-primary font-medium">
                    <span className="group-open:hidden">
                      Show full draft content
                    </span>
                    <span className="hidden group-open:inline">
                      Hide content
                    </span>
                  </p>
                </summary>
                <div className="border-t border-border px-5 py-6 sm:px-8 sm:py-8 bg-muted/20">
                  <dl className="grid gap-2 text-sm mb-6 pb-6 border-b border-border/60">
                    <div>
                      <dt className="inline font-medium text-foreground">
                        Slug:{" "}
                      </dt>
                      <dd className="inline font-mono text-muted-foreground">
                        {post.slug}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-foreground">
                        SEO title:{" "}
                      </dt>
                      <dd className="inline text-muted-foreground">
                        {post.seoTitle}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-foreground">
                        Meta:{" "}
                      </dt>
                      <dd className="inline text-muted-foreground">
                        {post.metaDescription}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-foreground">
                        Keywords:{" "}
                      </dt>
                      <dd className="inline text-muted-foreground">
                        {post.keywords}
                      </dd>
                    </div>
                  </dl>
                  <BlogMarkdown content={post.content.trim()} />
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
