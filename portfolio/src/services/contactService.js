import { postForm } from "../api/httpClient";

const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/ricardo.dev.of@gmail.com";

export async function sendContactForm(formData) {
  return postForm(CONTACT_ENDPOINT, formData);
}
