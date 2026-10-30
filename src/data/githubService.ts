export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GithubProfile {
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  avatar_url: string;
  html_url: string;
}

export interface GithubContribution {
  date: string;
  count: number;
  level: number;
}

export interface GithubContributions {
  total: number;
  contributions: GithubContribution[];
}

const FALLBACK_REPOS: GithubRepo[] = [
  {
    name: 'wealthtrack',
    description: 'Offline-first personal finance tracker with Next.js, React, TypeScript, Tailwind CSS, IndexedDB and PWA.',
    html_url: 'https://github.com/ankitojha16/wealthtrack',
    stargazers_count: 3,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2025-02-15T12:00:00Z'
  },
  {
    name: 'wealthlens',
    description: 'Financial insights, market research and company analysis platform with Next.js, TypeScript and Supabase.',
    html_url: 'https://github.com/ankitojha16/wealthlens',
    stargazers_count: 2,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2025-02-10T09:30:00Z'
  },
  {
    name: 'wealthcompas',
    description: 'Comprehensive personal wealth management architecture covering income, expenses, and financial goals.',
    html_url: 'https://github.com/ankitojha16/wealthcompas',
    stargazers_count: 1,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2025-01-28T14:20:00Z'
  },
  {
    name: 'SmartReminder',
    description: 'Smart task and productivity reminder application with scheduled alerts and priority management.',
    html_url: 'https://github.com/ankitojha16/SmartReminder',
    stargazers_count: 1,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-12-19T18:10:00Z'
  }
];

export async function fetchGithubContributions(): Promise<GithubContributions> {
  const response = await fetch('https://github-contributions-api.jogruber.de/v4/ankitojha16?y=last', {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`GitHub contributions request failed (${response.status})`);
  }

  const result: unknown = await response.json();
  if (
    typeof result !== 'object' ||
    result === null ||
    !('total' in result) ||
    typeof result.total !== 'object' ||
    result.total === null ||
    !('lastYear' in result.total) ||
    typeof result.total.lastYear !== 'number' ||
    !('contributions' in result) ||
    !Array.isArray(result.contributions)
  ) {
    throw new Error('GitHub contributions response had an unexpected format');
  }

  const contributions = result.contributions.filter(
    (contribution): contribution is GithubContribution =>
      typeof contribution === 'object' &&
      contribution !== null &&
      'date' in contribution &&
      typeof contribution.date === 'string' &&
      'count' in contribution &&
      typeof contribution.count === 'number' &&
      'level' in contribution &&
      typeof contribution.level === 'number'
  );

  if (contributions.length === 0) {
    throw new Error('GitHub contributions response contained no valid daily data');
  }

  return {
    total: result.total.lastYear,
    contributions
  };
}

export async function fetchGithubData(): Promise<{
  profile: GithubProfile;
  repos: GithubRepo[];
  isLive: boolean;
}> {
  try {
    const profileRes = await fetch('https://api.github.com/users/ankitojha16', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    const reposRes = await fetch('https://api.github.com/users/ankitojha16/repos?sort=updated&per_page=6', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });

    if (profileRes.ok && reposRes.ok) {
      const profile = await profileRes.json();
      const repos = await reposRes.json();
      return {
        profile: {
          public_repos: profile.public_repos ?? 5,
          followers: profile.followers ?? 2,
          following: profile.following ?? 5,
          bio: profile.bio ?? 'Full-Stack Developer | BCA Student @ Graphic Era University',
          avatar_url: profile.avatar_url ?? 'https://github.com/ankitojha16.png',
          html_url: profile.html_url ?? 'https://github.com/ankitojha16'
        },
        repos: Array.isArray(repos) && repos.length > 0 ? repos : FALLBACK_REPOS,
        isLive: true
      };
    }
  } catch (err) {
    // Graceful fallback if offline or rate limited
    console.warn('Using cached GitHub portfolio data:', err);
  }

  return {
    profile: {
      public_repos: 5,
      followers: 4,
      following: 8,
      bio: 'Full-Stack Developer | BCA Student @ Graphic Era Deemed to be University',
      avatar_url: 'https://github.com/ankitojha16.png',
      html_url: 'https://github.com/ankitojha16'
    },
    repos: FALLBACK_REPOS,
    isLive: false
  };
}
