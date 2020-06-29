export const lines = (content: string) => (from: number, to: number)=>
  content
    .split(`\n`)
    .slice(from - 1, to)
    .join(`\n`);
