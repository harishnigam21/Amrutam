import { useEffect, useRef, useState } from "react";
import { MdAdd } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// The external libraries for Excel generation and file saving.
const scriptTags = [
  "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js",
];
export function Incredientlist() {
  const [ing, setIng] = useState([
    {
      name: "Citrak",
      scname: "Plumbago zeylancia",
      skname: "चित्रक",
      description:
        "Nestled in the serene foothills of the Himalayas, our Ayurveda Healing Retreat offers a perfect blend of ancient traditions and modern wellness practices. Guests will experience personalized Ayurvedic treatments, guided meditation sessions, and expert-led yoga classes.",
      status: "Active",
      imageurl: "C:\\fakepath\\Screenshot 2025-07-31 203008.png",
      whyToUse: [
        {
          id: 0,
          value:
            " Chitrak is valued because it it helps lower blood sugar, boosts digestion, and reduces anxiety.",
        },
        {
          id: 2,
          value: " It is most used in Ayurvedic medicines for indigestion",
        },
        {
          id: 3,
          value:
            " It also protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.",
        },
      ],
      prakritiImpact: {
        vata: "Prana Vata",
        vataReason: "Suppressed Urges",
        kapha: "Kledaka Kapha",
        kaphaReason: "Lack of physical activity",
        pitta: "Ranjaka Pitta",
        pittaReason: "Red meat",
      },
      benefits: [
        {
          id: 0,
          value:
            " Calms The Nervous System And Reduces Anxiety. Reduces Cholesterol And Supports Weight Loss.",
        },
        {
          id: 1,
          value:
            " Manages Diabetes By Lowering Blood Sugar Levels. Beneficial in Hemorrhoids Of Vata Origin.",
        },
      ],
      properties: {
        rasa: "Katu (Pungent)",
        veerya: "Ushna (Hot)",
        guna: " Laghu (Light), Ruksha (Dry), Tiksna (Sharp)",
        vipaka: "Katu (Pungent)",
      },
      formulation: [
        {
          id: 0,
          value: " Chitrak Haritaki",
        },
        {
          id: 1,
          value: " Chitrakadi Vati",
        },
        {
          id: 2,
          value: " Kalyanagulam",
        },
        {
          id: 3,
          value: " Chitrakodi Chuma",
        },
      ],
      therapyUses: [
        {
          id: 0,
          value: " Agnimandya",
        },
        {
          id: 1,
          value: " Grahani Rog",
        },
        {
          id: 2,
          value: " Udara Shula",
        },
        {
          id: 3,
          value: " Gudasotha",
        },
      ],
      plant: {
        detail: [
          {
            id: 0,
            part: "Root",
            description:
              "Digestion, Skin conditions, manage blood sugar level.",
          },
          {
            id: 1,
            part: "Root Bark",
            description: "Manage obesity, metabolism and assit in weight loss.",
          },
          {
            id: 2,
            part: "Leaf",
            description: "Used externally for skin conditions and wounds.",
          },
        ],
        combinedWith: "Pipplai, Haritakai, Guggulu, Punarnava, Amla, Giloy",
        location:
          "It is native to tropical and subtropical regions worldwide, including India and Srilanka.",
      },
    },
  ]);
  const [sorting, setSorting] = useState(false);
  const [search, setSearch] = useState("");
  const [change, setChange] = useState(0);
  const [manipulate, setManipulate] = useState(0);
  const [page, setPage] = useState(1);
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(4);
  const errorRef = useRef(null);
  const installment = 5;
  //move forward
  const forward = () => {
    const breakpoint = Math.floor(ing.length / installment) * 5;
    if (final === breakpoint - 1) {
      setInitial(final + 1);
      setFinal(ing.length - 1);
      setPage(Math.ceil(ing.length / installment));
    } else if (final !== ing.length - 1) {
      setInitial(final + 1);
      setFinal(initial + installment - 1);
      setPage(page + 1);
    }
  };
  //move Backward
  const backward = () => {
    const breakpoint = ing.length % installment;
    if (final === breakpoint - 1) {
      setInitial(0);
      setFinal(installment - 1);
      setPage(1);
    } else if (initial !== 0) {
      setFinal(initial - 1);
      setInitial(final - installment - 1);
      setPage(page - 1);
    }
  };

  //asc sort functionality w.r.t name
  const Asort_ing = () => {
    const newOne = ing;
    for (let i = 0; i < newOne.length; i++) {
      for (let j = i + 1; j < newOne.length; j++) {
        if (newOne[i].name.charAt(0) > newOne[j].name.charAt(0)) {
          const temp = newOne[i];
          newOne[i] = newOne[j];
          newOne[j] = temp;
        }
      }
    }
    setIng(newOne);
    setSorting(false);
    setChange((pre) => pre + 1);
  };
  //asc desc functionality w.r.t name
  const Dsort_ing = () => {
    const newOne = ing;
    for (let i = 0; i < newOne.length; i++) {
      for (let j = i + 1; j < newOne.length; j++) {
        if (newOne[i].name.charAt(0) < newOne[j].name.charAt(0)) {
          const temp = newOne[i];
          newOne[i] = newOne[j];
          newOne[j] = temp;
        }
      }
    }
    setIng(newOne);
    setSorting(true);
    setChange((pre) => pre + 1);
  };

  // A helper function to convert a string to an array buffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Int8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  // State to track if the external scripts have been loaded.
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // useEffect hook to dynamically load the scripts.
  useEffect(() => {
    let loadedCount = 0;
    const totalScripts = scriptTags.length;

    // This function checks if all scripts are loaded.
    const onScriptLoad = () => {
      loadedCount++;
      if (loadedCount === totalScripts) {
        // We also check if the global variables are available, just in case.
        if (window.XLSX && window.saveAs) {
          setScriptsLoaded(true);
        } else {
          console.error(
            "The required global libraries (XLSX, FileSaver) are not available."
          );
        }
      }
    };

    // Loop through the script URLs and create script tags.
    scriptTags.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = onScriptLoad;
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
      };
      document.body.appendChild(script);
    });

    // Cleanup function to remove the scripts when the component unmounts.
    return () => {
      scriptTags.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []); // The empty dependency array ensures this runs only once on mount.

  // Function to handle the download button click
  const handleDownload = () => {
    if (!scriptsLoaded || !window.XLSX || !window.saveAs) {
      console.error(
        "XLSX or FileSaver library is not loaded. Please wait a moment."
      );
      return;
    }

    try {
      const ws = window.XLSX.utils.json_to_sheet(ing);
      const wb = window.XLSX.utils.book_new();
      window.XLSX.utils.book_append_sheet(wb, ws, "Herbal Data");
      const wbout = window.XLSX.write(wb, {
        bookType: "xlsx",
        type: "binary",
      });

      const blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream",
      });
      window.saveAs(blob, "HerbalData.xlsx");
    } catch (error) {
      console.error("Error generating or downloading the Excel file:", error);
    }
  };
  const onDelete = async (id) => {
    errorRef.current.style.display = "block";
    errorRef.current.style.color = "red";
    errorRef.current.textContent = "deleting ...";
    const url = `${process.env.REACT_APP_BACKEND_HOST}/ingredients`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const received = await response.json();
    if (response.ok) {
      setManipulate((pre) => pre + 1);
      errorRef.current.style.color = "green";
      errorRef.current.textContent = received.message;
      setTimeout(() => {
        errorRef.current.style.display = "none";
      }, 3000);
    } else {
      errorRef.current.style.color = "red";
      errorRef.current.textContent = received.message;
    }
  };
  const onEdit = async (id) => {
    errorRef.current.style.display = "block";
    errorRef.current.style.color = "blue";
    errorRef.current.textContent = "editIng ...";
    const editIng = JSON.parse(ing.filter((item) => item.id === id)[0].details);
    sessionStorage.setItem("newIng", JSON.stringify(editIng));
    sessionStorage.setItem("modify", JSON.stringify({ id: id, status: "yes" }));
    setTimeout(() => {
      errorRef.current.style.display = "none";
      window.location.replace("/add_ingredients");
    }, 2000);
  };
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/ingredients`;
    const fetchIng = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const received = await response.json();
      if (response.ok) {
        setIng(received.data);
        if (received.data.length > 0) {
          errorRef.current.style.color = "green";
          errorRef.current.textContent = received.message;
          setTimeout(() => {
            errorRef.current.style.display = "none";
          }, 3000);
        } else {
          errorRef.current.style.color = "red";
          errorRef.current.textContent = "no Ingredient found !";
        }
      } else {
        errorRef.current.style.color = "red";
        errorRef.current.textContent = received.message;
      }
    };
    fetchIng();
  }, [manipulate]);

  return (
    <section className="flex flex-col w-full self-center md:w-[75%] p-5 box-border border-2 rounded-2xl gap-6 shadow-lg bg-gray-200 my-10">
      <article className="flex box-border flex-wrap gap-4">
        <article className="left flex grow gap-2 items-center">
          <h1>ingredients List</h1>
          <div className="relative flex items-center">
            <input
              className="p-2 rounded-xl border-2 text-center w-[50vmin]"
              placeholder="Search Here"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute pl-4">
              <FaSearch className="icon text-2xl" />
            </div>
          </div>
          <div className="p-2 rounded-2xl border-2">
            <Link to={"/add_ingredients"}>
              <MdAdd className="icon text-2xl" />
            </Link>
          </div>
        </article>
        <article className="right flex gap-2">
          <div className="p-2 rounded-2xl border-2">
            <FaDownload
              className={`icon text-2xl ${
                scriptsLoaded
                  ? "bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleDownload}
              disabled={!scriptsLoaded}
            />
          </div>
          <div className="p-2 rounded-2xl border-2">
            <BiSortAlt2
              className="icon text-2xl"
              onClick={() => (sorting ? Asort_ing() : Dsort_ing())}
            />
          </div>
        </article>
      </article>
      <article className="flex flex-col gap-2">
        <article className="ingtable gap-4 border-b-2">
          <strong className="text-xl font-mono">Name</strong>
          <strong className="text-xl font-mono font-semibold text-center">
            Description
          </strong>
          <strong className="text-xl font-mono text-right">Status</strong>
          <strong className="text-xl font-mono text-right">Manipulate</strong>
        </article>
        {ing
          .filter((inthere) => {
            const item = JSON.parse(inthere.details || "{}");
            return search.length > 0
              ? item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.description.toLowerCase().includes(search.toLowerCase())
              : inthere.id;
          })
          .slice(initial, final + 1)
          .map((inthere, index) => {
            const item = JSON.parse(inthere.details || "{}");
            return (
              <article key={`ing/${index}`} className="ingtable gap-4">
                <p>{item.name}</p>
                <p className="font-semibold text-center">
                  {item.description.slice(0, 50)}...
                </p>
                <p
                  className={`${
                    item.status === "Active" ? "text-green-400" : "text-red-400"
                  } font-bold text-right`}
                >
                  {item.status}
                </p>
                <section className="flex gap-2 items-center justify-end pr-3">
                  <FaEdit
                    className="icon text-2xl text-blue-500"
                    onClick={() => onEdit(inthere.id)}
                  />
                  <MdDelete
                    className="icon text-2xl text-red-500"
                    onClick={() => onDelete(inthere.id)}
                  />
                </section>
              </article>
            );
          })}
      </article>
      <article className="flex justify-center">
        <div className="flex gap-2 items-center">
          <FaArrowLeft className="icon text-2xl" onClick={() => backward()} />
          <p>Page : {page}</p>
          <FaArrowRight className="icon text-2xl" onClick={() => forward()} />
        </div>
      </article>
      <strong className="text-center" ref={errorRef}></strong>
    </section>
  );
}
