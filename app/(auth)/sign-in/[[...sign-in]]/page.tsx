import { SignIn } from "@clerk/nextjs";

function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <SignIn />
    </main>
  );
}

export default LoginPage;
