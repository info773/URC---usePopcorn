export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export function Main({ children }) {
  return <main className="main">{children}</main>;
}
