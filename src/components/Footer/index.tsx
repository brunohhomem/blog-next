import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-16 text-center">
      <p>
        <span className="italic">Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href="/" className="group font-extrabold">
          The <span className="group-hover:text-blue-500 transition duration-300">Blog</span>
        </Link>
      </p>
    </footer>
  );
}
