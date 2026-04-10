const rawPosts = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);

  if (!match) {
    return {
      data: {},
      content: fileContent,
    };
  }

  const frontmatterBlock = match[1];
  const content = match[2];

  const data = {};

  frontmatterBlock.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"(.*)"$/, "$1");

    data[key] = value;
  });

  return { data, content };
}

function markdownToHtml(markdown) {
  return markdown
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/\n\n/gim, "</p><p>")
    .replace(/\n/gim, "<br />");
}

function createExcerpt(content, maxLength = 150) {
  const cleanText = content
    .replace(/^#.*$/gim, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/\n/g, " ")
    .trim();

  if (cleanText.length <= maxLength) return cleanText;
  return cleanText.slice(0, maxLength).trim() + "...";
}

function extractSlug(path) {
  const parts = path.split("/");
  const fileName = parts[parts.length - 1];
  return fileName.replace(".md", "");
}

export function getAllPosts() {
  const posts = Object.entries(rawPosts).map(([path, fileContent]) => {
    const { data, content } = parseFrontmatter(fileContent);
    const slug = data.slug || extractSlug(path);

    return {
      slug,
      title: data.title || "Bez naslova",
      date: data.date || "",
      image: data.image || "",
      excerpt: data.excerpt || createExcerpt(content),
      content,
      htmlContent: `<p>${markdownToHtml(content)}</p>`,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}