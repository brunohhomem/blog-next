import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-16 text-center">
      <p>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href="/" className="group font-bold">
          The <span className="group-hover:text-blue-500 transition duration-300">Blog</span>
        </Link>
      </p>
    </footer>
  );
}
