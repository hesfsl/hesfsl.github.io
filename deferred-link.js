// JWT token from https://jwt.io/
async function cta() {
  const pseudoToken =
    "company:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  await navigator.clipboard.writeText(pseudoToken);
  window.location.href =
    "https://apps.apple.com/br/app/f1-tv/id1315007279?l=en";
}
