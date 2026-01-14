"use server";

export async function userRegister({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) {
  try {
    //console.log({ name, email, password },`${process.env.BACKEND_URL}/auth/register`);
    const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
      cache: "no-store", // IMPORTANT for auth
    });
    const data = await res.json();
    //console.log(data)
    if (!res.ok) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Register error:", error);
    return { success: false };
  }
}
