export function Button({ children, type = 'button', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} type={type} className="bg-blue-500 text-white px-4 py-2 rounded-md">
      {children}
    </button>
  );
}
