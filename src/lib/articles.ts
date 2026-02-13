import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const articlesDirectory = path.join(process.cwd(), 'src/data/growth-drops');

export interface ArticleFrontmatter {
  title: string;
  description: string;
  youtube_url: string;
  published: string;
  reading_time: string;
  tags: string[];
  thumbnail: string;
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

/** Simple YAML frontmatter parser — avoids gray-matter's esprima dep that breaks Next 14 dev mode */
function parseFrontmatter(fileContents: string): { data: Record<string, any>; content: string } {
  const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: fileContents };
  }

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  for (const line of yamlBlock.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let value: any = line.slice(colonIdx + 1).trim();

    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse YAML arrays like ["tag1", "tag2"]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s: string) => {
          s = s.trim();
          if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
            s = s.slice(1, -1);
          }
          return s;
        })
        .filter((s: string) => s.length > 0);
    }

    data[key] = value;
  }

  return { data, content };
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory).filter(f => f.endsWith('.md'));

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = parseFrontmatter(fileContents);

    return {
      slug,
      ...(data as ArticleFrontmatter),
    };
  });

  return articles.sort((a, b) => {
    if (a.published < b.published) return 1;
    if (a.published > b.published) return -1;
    return 0;
  });
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = parseFrontmatter(fileContents);

  const htmlContent = marked(content) as string;

  return {
    slug,
    content: htmlContent,
    ...(data as ArticleFrontmatter),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}
