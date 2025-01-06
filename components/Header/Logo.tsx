import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="transition ease-in-out duration-500 hover:scale-110 hover:translate-x-2 hover:rotate-12"
    >
      <p className="text-3xl font-bold">
        SC
        <span className="text-target">.</span>
      </p>
    </Link>
  );
};
