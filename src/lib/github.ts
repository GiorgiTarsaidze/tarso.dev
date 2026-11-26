export type RepoStats = { stars: number; forks: number; language: string | null };

// Memoised so the dev server does not hit GitHub's unauthenticated rate limit on every reload.
const cache = new Map<string, Promise<RepoStats | null>>();

/** Live repo stats at build time; null when GitHub can't be reached. */
export function repoStats(repo?: string): Promise<RepoStats | null> {
  if (!repo) return Promise.resolve(null);
  if (!cache.has(repo)) {
    cache.set(
      repo,
      fetch(`https://api.github.com/repos/${repo}`)
        .then(async (res) => {
          if (!res.ok) return null;
          const data = await res.json();
          return { stars: data.stargazers_count, forks: data.forks_count, language: data.language };
        })
        .catch(() => null),
    );
  }
  return cache.get(repo)!;
}
