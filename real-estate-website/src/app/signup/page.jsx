export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg p-10 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded px-4 py-2 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-4 py-2 outline-none"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white rounded py-2 mt-4"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
