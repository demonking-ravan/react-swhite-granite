export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    imgUrl: string;
  };
  content: string;
}

// Simple function to parse frontmatter and content from raw Markdown
const parseMarkdown = (raw: string): { frontmatter: Post['frontmatter']; content: string } => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = raw.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: { title: 'Untitled', date: 'Unknown', excerpt: '', imgUrl: '' }, content: raw };
  }

  const frontmatterText = match[1];
  const content = raw.replace(frontmatterRegex, '').trim();

  // Parse frontmatter (simple key-value pairs)
  const frontmatter: Record<string, string> = {};
  frontmatterText.split('\n').forEach((line) => {
    const [key, value] = line.split(':').map((part) => part.trim());
    if (key && value) {
      frontmatter[key] = value.replace(/^["']|["']$/g, ''); // Remove quotes if present
    }
  });

  return {
    frontmatter: {
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || 'Unknown',
      excerpt: frontmatter.excerpt || '',
      imgUrl: frontmatter.imgUrl || '',
    },
    content,
  };
};

const importAll = (r: Record<string, () => Promise<{ default: string }>>): Promise<Post[]> => {
  return Promise.all(
    Object.keys(r).map(async (key) => {
      const file = await r[key]();
      const { frontmatter, content } = parseMarkdown(file.default);
      return {
        slug: key.replace(/^.*[\\\/]/, '').replace('.md', ''),
        frontmatter,
        content,
      };
    })
  );
};

export const loadPosts = async (): Promise<Post[]> => {
  const markdownFiles = import.meta.glob('/src/data/blogs/*.md', { query: '?raw', eager: false }) as Record<
    string,
    () => Promise<{ default: string }>
  >;
  const posts = await importAll(markdownFiles);
  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};
