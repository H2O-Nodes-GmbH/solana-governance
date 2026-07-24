"use client"

import { ExternalLink } from "lucide-react"

const articles = [
  {
    title: "Solana is Rebuilding its Social Contract.",
    author: "Othman Gbadamassi",
    url: "https://medium.com/@occresearch6/solana-is-rebuilding-its-social-contract-governance-field-report-001-17fa4973579c",
    publication: "Medium",
    date: "Dec 18, 2025",
  },
]

export function Blog() {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Blog</h2>
          <p className="text-muted-foreground">Articles and insights on Solana governance</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    <span className="mr-2">📝</span>
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    by {article.author} · {article.publication} · {article.date}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
