function lengthLastWord(s) {
  const a = s.trim().split(/\s+/);
  const b = a[a.length - 1];
  return b.length;
}
