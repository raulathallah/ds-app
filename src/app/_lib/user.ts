import { User } from "@/type";

export default function user() {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("user") as string);
  } else {
    return {};
  }
}
