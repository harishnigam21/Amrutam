import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

// The external libraries for Excel generation and file saving.
const scriptTags = [
  "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js",
];
export function Incredientlist() {
  const [ing, setIng] = useState([
    {
      id: 1,
      name: "Khus Khus",
      description:
        "Khus khus, commonly known as poppy seeds, is a versatile ingredient and traditional herb celebrated for its wide-ranging benefits. Historically used as a natural remedy, these tiny seeds are well-regarded for their sedative properties, which can be particularly helpful in aiding insomnia and promoting a state of calm. They contain compounds that have a soothing effect on the nervous system, making them a popular choice for nighttime remedies. Beyond their calming effects, poppy seeds are also traditionally linked to enhancing fertility, with some cultures believing they can improve reproductive health. Nutritionally, khus khus is a powerhouse, packed with essential minerals like calcium, magnesium, and zinc, and they are a good source of healthy fats and dietary fiber. In the culinary world, they are a staple, used to add a nutty flavor and a thickening texture to various dishes, from savory curries and gravies to baked goods like cakes and bread.",
      status: "Active",
    },
  ]);
  const [sorting, setSorting] = useState(false);
  const [search, setSearch] = useState("");
  const [change, setChange] = useState(0);
  const [page, setPage] = useState(1);
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(4);

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
  // collect this array from db
  const ing_list = [
    {
      id: 1,
      name: "Khus Khus",
      description:
        "Khus khus, commonly known as poppy seeds, is a versatile ingredient and traditional herb celebrated for its wide-ranging benefits. Historically used as a natural remedy, these tiny seeds are well-regarded for their sedative properties, which can be particularly helpful in aiding insomnia and promoting a state of calm. They contain compounds that have a soothing effect on the nervous system, making them a popular choice for nighttime remedies. Beyond their calming effects, poppy seeds are also traditionally linked to enhancing fertility, with some cultures believing they can improve reproductive health. Nutritionally, khus khus is a powerhouse, packed with essential minerals like calcium, magnesium, and zinc, and they are a good source of healthy fats and dietary fiber. In the culinary world, they are a staple, used to add a nutty flavor and a thickening texture to various dishes, from savory curries and gravies to baked goods like cakes and bread.",
      status: "Active",
    },
    {
      id: 2,
      name: "Rakta Chandan",
      description:
        "Rakta Chandan, also known as Red Sandalwood, is a species of tree native to southern India. It is highly valued for its rich, deep red-colored heartwood. Unlike the more common white sandalwood, Rakta Chandan is not aromatic but is prized for its medicinal and cosmetic properties. In traditional Ayurvedic medicine, it is used as a potent ingredient to treat a variety of skin conditions like acne, blemishes, and pigmentation due to its anti-inflammatory, antioxidant, and antibacterial properties. The wood is also used as an astringent, a natural dye, and is believed to have benefits for managing blood sugar levels and improving circulation. The wood from this tree is also used in traditional woodworking and for making high-quality furniture.",
      status: "Active",
    },
    {
      id: 3,
      name: "Swarn Bhashm",
      description:
        "Swarn Bhasm, also known as Suvarna Bhasma or Gold Ash, is a traditional Ayurvedic preparation made from purified gold. The term 'Swarna' means gold, and 'Bhasma' refers to a calcined ash or powder. This medicine is highly regarded in Ayurveda for its potent therapeutic properties, with some sources claiming it can contain up to 98% pure gold in a nanoparticle form that is believed to be easily absorbed by the body.",
      status: "Active",
    },
    {
      id: 4,
      name: "Giloy",
      description:
        "Giloy (Tinospora cordifolia), also known as Guduchi or Amrita, is a climbing shrub native to India that is highly valued in Ayurvedic medicine. It is often referred to as the 'root of immortality' due to its powerful therapeutic properties. While all parts of the plant are used, the stem is considered to have the most potent medicinal compounds.",
      status: "Active",
    },
    {
      id: 5,
      name: "Bhringraj",
      description:
        "Bhringraj (Eclipta prostrata or Eclipta alba), also known as False Daisy or 'King of Hair', is a medicinal herb highly revered in Ayurveda for its profound impact on hair and overall well-being. It is a weed that grows in moist areas and is native to India and other parts of Asia. While all parts of the plant are used, the leaves are particularly valued for their therapeutic properties.",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Khus Khus",
      description:
        "Khus khus, commonly known as poppy seeds, is a versatile ingredient and traditional herb celebrated for its wide-ranging benefits. Historically used as a natural remedy, these tiny seeds are well-regarded for their sedative properties, which can be particularly helpful in aiding insomnia and promoting a state of calm. They contain compounds that have a soothing effect on the nervous system, making them a popular choice for nighttime remedies. Beyond their calming effects, poppy seeds are also traditionally linked to enhancing fertility, with some cultures believing they can improve reproductive health. Nutritionally, khus khus is a powerhouse, packed with essential minerals like calcium, magnesium, and zinc, and they are a good source of healthy fats and dietary fiber. In the culinary world, they are a staple, used to add a nutty flavor and a thickening texture to various dishes, from savory curries and gravies to baked goods like cakes and bread.",
      status: "Active",
    },
    {
      id: 7,
      name: "Rakta Chandan",
      description:
        "Rakta Chandan, also known as Red Sandalwood, is a species of tree native to southern India. It is highly valued for its rich, deep red-colored heartwood. Unlike the more common white sandalwood, Rakta Chandan is not aromatic but is prized for its medicinal and cosmetic properties. In traditional Ayurvedic medicine, it is used as a potent ingredient to treat a variety of skin conditions like acne, blemishes, and pigmentation due to its anti-inflammatory, antioxidant, and antibacterial properties. The wood is also used as an astringent, a natural dye, and is believed to have benefits for managing blood sugar levels and improving circulation. The wood from this tree is also used in traditional woodworking and for making high-quality furniture.",
      status: "Active",
    },
    {
      id: 8,
      name: "Swarn Bhashm",
      description:
        "Swarn Bhasm, also known as Suvarna Bhasma or Gold Ash, is a traditional Ayurvedic preparation made from purified gold. The term 'Swarna' means gold, and 'Bhasma' refers to a calcined ash or powder. This medicine is highly regarded in Ayurveda for its potent therapeutic properties, with some sources claiming it can contain up to 98% pure gold in a nanoparticle form that is believed to be easily absorbed by the body.",
      status: "Active",
    },
    {
      id: 9,
      name: "Giloy",
      description:
        "Giloy (Tinospora cordifolia), also known as Guduchi or Amrita, is a climbing shrub native to India that is highly valued in Ayurvedic medicine. It is often referred to as the 'root of immortality' due to its powerful therapeutic properties. While all parts of the plant are used, the stem is considered to have the most potent medicinal compounds.",
      status: "Active",
    },
    {
      id: 10,
      name: "Bhringraj",
      description:
        "Bhringraj (Eclipta prostrata or Eclipta alba), also known as False Daisy or 'King of Hair', is a medicinal herb highly revered in Ayurveda for its profound impact on hair and overall well-being. It is a weed that grows in moist areas and is native to India and other parts of Asia. While all parts of the plant are used, the leaves are particularly valued for their therapeutic properties.",
      status: "Inactive",
    },
    {
      id: 11,
      name: "Khus Khus",
      description:
        "Khus khus, commonly known as poppy seeds, is a versatile ingredient and traditional herb celebrated for its wide-ranging benefits. Historically used as a natural remedy, these tiny seeds are well-regarded for their sedative properties, which can be particularly helpful in aiding insomnia and promoting a state of calm. They contain compounds that have a soothing effect on the nervous system, making them a popular choice for nighttime remedies. Beyond their calming effects, poppy seeds are also traditionally linked to enhancing fertility, with some cultures believing they can improve reproductive health. Nutritionally, khus khus is a powerhouse, packed with essential minerals like calcium, magnesium, and zinc, and they are a good source of healthy fats and dietary fiber. In the culinary world, they are a staple, used to add a nutty flavor and a thickening texture to various dishes, from savory curries and gravies to baked goods like cakes and bread.",
      status: "Active",
    },
    {
      id: 12,
      name: "Rakta Chandan",
      description:
        "Rakta Chandan, also known as Red Sandalwood, is a species of tree native to southern India. It is highly valued for its rich, deep red-colored heartwood. Unlike the more common white sandalwood, Rakta Chandan is not aromatic but is prized for its medicinal and cosmetic properties. In traditional Ayurvedic medicine, it is used as a potent ingredient to treat a variety of skin conditions like acne, blemishes, and pigmentation due to its anti-inflammatory, antioxidant, and antibacterial properties. The wood is also used as an astringent, a natural dye, and is believed to have benefits for managing blood sugar levels and improving circulation. The wood from this tree is also used in traditional woodworking and for making high-quality furniture.",
      status: "Active",
    },
    {
      id: 13,
      name: "Swarn Bhashm",
      description:
        "Swarn Bhasm, also known as Suvarna Bhasma or Gold Ash, is a traditional Ayurvedic preparation made from purified gold. The term 'Swarna' means gold, and 'Bhasma' refers to a calcined ash or powder. This medicine is highly regarded in Ayurveda for its potent therapeutic properties, with some sources claiming it can contain up to 98% pure gold in a nanoparticle form that is believed to be easily absorbed by the body.",
      status: "Active",
    },
    {
      id: 14,
      name: "Giloy",
      description:
        "Giloy (Tinospora cordifolia), also known as Guduchi or Amrita, is a climbing shrub native to India that is highly valued in Ayurvedic medicine. It is often referred to as the 'root of immortality' due to its powerful therapeutic properties. While all parts of the plant are used, the stem is considered to have the most potent medicinal compounds.",
      status: "Active",
    },
    {
      id: 15,
      name: "Bhringraj",
      description:
        "Bhringraj (Eclipta prostrata or Eclipta alba), also known as False Daisy or 'King of Hair', is a medicinal herb highly revered in Ayurveda for its profound impact on hair and overall well-being. It is a weed that grows in moist areas and is native to India and other parts of Asia. While all parts of the plant are used, the leaves are particularly valued for their therapeutic properties.",
      status: "Inactive",
    },
    {
      id: 16,
      name: "Khus Khus",
      description:
        "Khus khus, commonly known as poppy seeds, is a versatile ingredient and traditional herb celebrated for its wide-ranging benefits. Historically used as a natural remedy, these tiny seeds are well-regarded for their sedative properties, which can be particularly helpful in aiding insomnia and promoting a state of calm. They contain compounds that have a soothing effect on the nervous system, making them a popular choice for nighttime remedies. Beyond their calming effects, poppy seeds are also traditionally linked to enhancing fertility, with some cultures believing they can improve reproductive health. Nutritionally, khus khus is a powerhouse, packed with essential minerals like calcium, magnesium, and zinc, and they are a good source of healthy fats and dietary fiber. In the culinary world, they are a staple, used to add a nutty flavor and a thickening texture to various dishes, from savory curries and gravies to baked goods like cakes and bread.",
      status: "Active",
    },
    {
      id: 17,
      name: "Rakta Chandan",
      description:
        "Rakta Chandan, also known as Red Sandalwood, is a species of tree native to southern India. It is highly valued for its rich, deep red-colored heartwood. Unlike the more common white sandalwood, Rakta Chandan is not aromatic but is prized for its medicinal and cosmetic properties. In traditional Ayurvedic medicine, it is used as a potent ingredient to treat a variety of skin conditions like acne, blemishes, and pigmentation due to its anti-inflammatory, antioxidant, and antibacterial properties. The wood is also used as an astringent, a natural dye, and is believed to have benefits for managing blood sugar levels and improving circulation. The wood from this tree is also used in traditional woodworking and for making high-quality furniture.",
      status: "Active",
    },
    {
      id: 18,
      name: "Swarn Bhashm",
      description:
        "Swarn Bhasm, also known as Suvarna Bhasma or Gold Ash, is a traditional Ayurvedic preparation made from purified gold. The term 'Swarna' means gold, and 'Bhasma' refers to a calcined ash or powder. This medicine is highly regarded in Ayurveda for its potent therapeutic properties, with some sources claiming it can contain up to 98% pure gold in a nanoparticle form that is believed to be easily absorbed by the body.",
      status: "Active",
    },
    {
      id: 19,
      name: "Giloy",
      description:
        "Giloy (Tinospora cordifolia), also known as Guduchi or Amrita, is a climbing shrub native to India that is highly valued in Ayurvedic medicine. It is often referred to as the 'root of immortality' due to its powerful therapeutic properties. While all parts of the plant are used, the stem is considered to have the most potent medicinal compounds.",
      status: "Active",
    },
    {
      id: 20,
      name: "Bhringraj",
      description:
        "Bhringraj (Eclipta prostrata or Eclipta alba), also known as False Daisy or 'King of Hair', is a medicinal herb highly revered in Ayurveda for its profound impact on hair and overall well-being. It is a weed that grows in moist areas and is native to India and other parts of Asia. While all parts of the plant are used, the leaves are particularly valued for their therapeutic properties.",
      status: "Inactive",
    },
    {
      id: 21,
      name: "Khus Khus",
      description:
        "Khus khus, commonly known as poppy seeds, is a versatile ingredient and traditional herb celebrated for its wide-ranging benefits. Historically used as a natural remedy, these tiny seeds are well-regarded for their sedative properties, which can be particularly helpful in aiding insomnia and promoting a state of calm. They contain compounds that have a soothing effect on the nervous system, making them a popular choice for nighttime remedies. Beyond their calming effects, poppy seeds are also traditionally linked to enhancing fertility, with some cultures believing they can improve reproductive health. Nutritionally, khus khus is a powerhouse, packed with essential minerals like calcium, magnesium, and zinc, and they are a good source of healthy fats and dietary fiber. In the culinary world, they are a staple, used to add a nutty flavor and a thickening texture to various dishes, from savory curries and gravies to baked goods like cakes and bread.",
      status: "Active",
    },
    {
      id: 22,
      name: "Rakta Chandan",
      description:
        "Rakta Chandan, also known as Red Sandalwood, is a species of tree native to southern India. It is highly valued for its rich, deep red-colored heartwood. Unlike the more common white sandalwood, Rakta Chandan is not aromatic but is prized for its medicinal and cosmetic properties. In traditional Ayurvedic medicine, it is used as a potent ingredient to treat a variety of skin conditions like acne, blemishes, and pigmentation due to its anti-inflammatory, antioxidant, and antibacterial properties. The wood is also used as an astringent, a natural dye, and is believed to have benefits for managing blood sugar levels and improving circulation. The wood from this tree is also used in traditional woodworking and for making high-quality furniture.",
      status: "Active",
    },
    {
      id: 23,
      name: "Swarn Bhashm",
      description:
        "Swarn Bhasm, also known as Suvarna Bhasma or Gold Ash, is a traditional Ayurvedic preparation made from purified gold. The term 'Swarna' means gold, and 'Bhasma' refers to a calcined ash or powder. This medicine is highly regarded in Ayurveda for its potent therapeutic properties, with some sources claiming it can contain up to 98% pure gold in a nanoparticle form that is believed to be easily absorbed by the body.",
      status: "Active",
    },
    {
      id: 24,
      name: "Giloy",
      description:
        "Giloy (Tinospora cordifolia), also known as Guduchi or Amrita, is a climbing shrub native to India that is highly valued in Ayurvedic medicine. It is often referred to as the 'root of immortality' due to its powerful therapeutic properties. While all parts of the plant are used, the stem is considered to have the most potent medicinal compounds.",
      status: "Active",
    },
    {
      id: 25,
      name: "Bhringraj",
      description:
        "Bhringraj (Eclipta prostrata or Eclipta alba), also known as False Daisy or 'King of Hair', is a medicinal herb highly revered in Ayurveda for its profound impact on hair and overall well-being. It is a weed that grows in moist areas and is native to India and other parts of Asia. While all parts of the plant are used, the leaves are particularly valued for their therapeutic properties.",
      status: "Inactive",
    },
  ];

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

  useEffect(() => {
    setIng(ing_list);
  }, []);

  return (
    <section className="flex flex-col w-full self-center md:w-[75%] p-5 box-border border-2 rounded-2xl gap-6 shadow-lg bg-lime-50 my-10">
      <article className="flex box-border flex-wrap gap-4">
        <article className="left flex grow gap-2 items-center">
          <strong>ingredients List</strong>
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
        </article>
        {ing
          .filter((item) =>
            search.length > 0
              ? item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase())
              : item.id
          )
          .slice(initial, final + 1)
          .map((item, index) => (
            <article key={`ing/${index}`} className="ingtable gap-4">
              <p>{item.id}{item.name}</p>
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
            </article>
          ))}
      </article>
      <article className="flex justify-center">
        <div className="flex gap-2 items-center">
          <FaArrowLeft className="icon text-2xl" onClick={() => backward()} />
          <p>Page : {page}</p>
          <FaArrowRight className="icon text-2xl" onClick={() => forward()} />
        </div>
      </article>
    </section>
  );
}
