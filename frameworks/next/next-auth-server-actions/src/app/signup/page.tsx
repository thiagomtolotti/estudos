import { redirect } from "next/navigation";

export default function Signup() {
  async function signup(formData: FormData) {
    "use server";

    // Get data off form
    const email = formData.get("email");
    const password = formData.get("password");

    //Send data to our api route
    const res = await fetch(`${process.env.ROOT_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    console.log(json);

    // Redirect to login if succesS
    if (res.ok) {
      redirect("/login");
    }
  }

  return (
    <div>
      <h1>SignUp</h1>{" "}
      <form action={signup}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
