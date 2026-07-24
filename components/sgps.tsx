import { ExternalLink, GitPullRequest, GitMerge, CircleDot } from "lucide-react"

type PullRequest = {
  number: number
  title: string
  html_url: string
  state: string
  merged_at: string | null
  created_at: string
  user: {
    login: string
  } | null
}

const REPO_PULLS_URL = "https://github.com/solana-foundation/solana-governance-proposals/pulls"

async function getPullRequests(): Promise<PullRequest[] | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/solana-foundation/solana-governance-proposals/pulls?state=all&per_page=30&sort=created&direction=desc",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        // Revalidate daily to stay within GitHub's unauthenticated rate limits
        next: { revalidate: 86400 },
      },
    )

    if (!res.ok) {
      console.log("[v0] GitHub API request failed:", res.status)
      return null
    }

    return (await res.json()) as PullRequest[]
  } catch (error) {
    console.log("[v0] Error fetching SGPs:", error)
    return null
  }
}

function getStatus(pr: PullRequest): { label: string; icon: typeof GitMerge; className: string } {
  if (pr.merged_at) {
    return { label: "Merged", icon: GitMerge, className: "text-secondary" }
  }
  if (pr.state === "closed") {
    return { label: "Closed", icon: CircleDot, className: "text-muted-foreground" }
  }
  return { label: "Open", icon: GitPullRequest, className: "text-primary" }
}

export async function SGPs() {
  const pullRequests = await getPullRequests()

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="mr-2">🗳️</span>
            Solana Governance Proposals
          </h2>
          <p className="text-muted-foreground text-pretty">
            Track active Solana Governance Proposals (SGPs) as they are drafted, reviewed, and discussed on GitHub
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {pullRequests && pullRequests.length > 0 ? (
            <div className="space-y-3">
              <ul className="space-y-3">
                {pullRequests.map((pr) => {
                  const status = getStatus(pr)
                  const StatusIcon = status.icon
                  return (
                    <li key={pr.number}>
                      <a
                        href={pr.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <StatusIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${status.className}`} />
                            <div className="min-w-0">
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-pretty">
                                {pr.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {"#"}
                                {pr.number}
                                {pr.user ? ` · by ${pr.user.login}` : ""} · {status.label}
                              </p>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
              <a
                href={REPO_PULLS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View all SGPs on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <a
              href={REPO_PULLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <GitPullRequest className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      View all SGPs on GitHub
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      solana-foundation/solana-governance-proposals · Open pull requests
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
