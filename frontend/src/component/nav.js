import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
export function Nav({ user }) {
  return (
    <nav className="flex bg-slate-200 flex-row w-screen justify-between z-20 sticky top-0 p-2 shadow-[0_5px_10px_-5px_black]">
      <article>
        <Link className="left flex items-center gap-2" to={"/"}>
          <img
            src={logo}
            alt="logo of website"
            className="w-10 aspect-square"
          />
          <span className="text-[#3d854a]">AMRUTAM</span>
        </Link>
      </article>
      <article className="right flex items-center gap-2">
        {/* fetch Name from db */}
        <article className="flex flex-col text-[#3d854a] text-right">
          <p>
            {user.first_name} {user.last_name}
          </p>
          <small>{user.role}</small>
        </article>
        {/* fetch image from db */}
        {user.img ? (
          <img src={user.img} alt="profile" className="w-8 aspect-square" />
        ) : (
          <strong className="border-2 text-[#589363] border-[#589363] p-2 aspect-square rounded-full">
            {user.first_name[0] + user.last_name[0]}
          </strong>
        )}
      </article>
    </nav>
  );
}
