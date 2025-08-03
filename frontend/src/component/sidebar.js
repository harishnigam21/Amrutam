import { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../assets/component_assets/nav_list";
import { IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { TbArrowBarRight } from "react-icons/tb";

export function Sidebar() {
  const [shownav, setShownav] = useState(false);
  const hideshow = (id) => {
    const element = document.getElementById(`${id}`);
    if (element.querySelector("#submenu").style.display === "none") {
      element.querySelector("#rarr").style.transform = "rotate(90deg)";
      element.querySelector("#submenu").style.display = "flex";
    } else {
      element.querySelector("#rarr").style.transform = "rotate(0deg)";
      element.querySelector("#submenu").style.display = "none";
    }
  };
  return (
    <>
      {shownav ? (
        <nav className="flex flex-col bg-slate-200 h-screen fixed left-0 overflow-scroll noscrollbar transition-all z-30 shadow-[5px_0_10px_-5px_black] animate-[fromLeft_1s_ease]">
          <article className="flex m-2 justify-end">
            <ImCross
              className="icon text-red-600"
              onClick={() => setShownav(false)}
            />
          </article>
          {navList().map((item, index) => (
            <article
              key={`menu/${index}`}
              className="flex gap-2 p-2 items-center grow transition-all hover:scale-110 hover:underline underline-offset-2"
            >
              <item.icon className="text-2xl" />
              {item.sub_list ? (
                <article className="flex flex-col" id={`menu/${index}`}>
                  <div className="flex flex-nowrap items-center" to={item.path}>
                    {item.name}
                    <IoIosArrowForward
                      id="rarr"
                      className="icon transition-all"
                      onClick={() => hideshow(`menu/${index}`)}
                    />
                  </div>
                  <div
                    className="hidden flex-col transition-all animate-[fromTop_1s_ease]"
                    id="submenu"
                  >
                    {item.sub_list.map((item, index) => (
                      <article
                        key={`submenu/${index}`}
                        className="flex gap-2 p-2 items-center grow "
                      >
                        <item.icon className="text-2xl" />
                        <Link
                          className="flex flex-nowrap items-center"
                          to={item.path}
                        >
                          {item.name}
                        </Link>
                      </article>
                    ))}
                  </div>
                </article>
              ) : (
                <Link
                  className="flex flex-nowrap items-center"
                  id={`menu/${index}`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              )}
            </article>
          ))}
        </nav>
      ) : (
        <nav className="fixed left-0 py-5 rounded-b-lg bg-slate-300 z-10">
          <TbArrowBarRight
            className="icon text-3xl"
            onClick={() => setShownav(true)}
          />
        </nav>
      )}
    </>
  );
}
