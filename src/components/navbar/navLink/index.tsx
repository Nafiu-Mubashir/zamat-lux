import Link from "next/link";
import { useRouter } from "next/router";

export function NavLink({
  href,
  children,
  // classNames,
}: {
  href: string;
  children: string | React.ReactNode;
  // classNames: string;
}) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <div
        className={`hover:text-zamat-main font-medium block py-2 px-3 text-white md:p-0 cursor-pointer ${
          isActive ? "text-zamat-main" : ""
        }`}>
        {children}
      </div>
    </Link>
  );
}
