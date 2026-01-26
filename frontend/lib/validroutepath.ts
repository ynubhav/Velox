export function isValidRoutePath(path: string): boolean {
  // must start with /
  if (!path.startsWith("/")) return false;

  // root
  if (path === "/") return true;

  // no spaces
  if (path.includes(" ")) return false;

  // no trailing slash (except root)
  if (path.endsWith("/")) return false;

  // no empty segments
  if (path.includes("//")) return false;

  const segments = path.split("/").slice(1);

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    // wildcard
    if (segment === "*") {
      // wildcard must be last segment
      return i === segments.length - 1;
    }

    // dynamic param
    if (segment.startsWith(":")) {
      const param = segment.slice(1);

      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(param)) {
        return false;
      }
      continue;
    }

    // static segment
    if (!/^[a-z0-9_-]+$/.test(segment)) {
      return false;
    }
  }

  return true;
}
