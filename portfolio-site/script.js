const $ = (s) => document.querySelector(s),
  root = document.documentElement;
$("#yr").textContent = new Date().getFullYear();
try {
  const t = localStorage.getItem("theme");
  if (t) root.dataset.theme = t;
} catch (e) {}
$("#theme").onclick = () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme:dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch (e) {}
};
$("#copy").onclick = async (e) => {
  try {
    await navigator.clipboard.writeText("oluwaseguntemitope2004@gmail.com");
    e.target.textContent = "Copied ✓";
  } catch {
    e.target.textContent = "oluwaseguntemitope2004@gmail.com";
  }
  setTimeout(() => (e.target.textContent = "Copy email"), 2000);
};
