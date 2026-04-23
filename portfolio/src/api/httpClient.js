const API_BASE_URL = "";

function buildUrl(path) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${API_BASE_URL}${path}`;
}

export async function postForm(path, formData) {
  return fetch(buildUrl(path), {
    method: "POST",
    body: formData,
  });
}
