/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
export function AddIncredient() {
  const hasInit = useRef(false);
  const [ing, setIng] = useState({
    name: "",
    scname: "",
    skname: "",
    description: "",
    status: "",
    imageurl: "",
    whyToUse: [],
    prakritiImpact: {
      vata: "",
      vataReason: "",
      kapha: "",
      kaphaReason: "",
      pitta: "",
      pittaReason: "",
    },
    benefits: [],
    properties: {
      rasa: "",
      veerya: "",
      guna: "",
      vipaka: "",
    },
    formulation: [],
    therapyUses: [],
    plant: { detail: [], combinedWith: "", location: "" },
  });
  const [more, setMore] = useState(false);
  const [clear, setClear] = useState(true);
  const [save, setSave] = useState(true);
  const [add, setAdd] = useState(false);
  const errorRef1 = useRef(null);
  const errorRef2 = useRef(null);
  const errorRef3 = useRef(null);
  const errorRef4 = useRef(null);
  const errorRef5 = useRef(null);
  const slider = ["general", "benefits", "properties", "other", "overview"];
  useEffect(() => {
    if (!hasInit.current) {
      if (ing.whyToUse.length === 0) {
        addUses();
        hasInit.current = true;
      }
      if (ing.benefits.length === 0) {
        addBenefit();
        hasInit.current = true;
      }
      if (ing.formulation.length === 0) {
        addFormula();
        hasInit.current = true;
      }
      if (ing.therapyUses.length === 0) {
        addTherapy();
        hasInit.current = true;
      }
      if (ing.plant.detail.length === 0) {
        addPlant();
        hasInit.current = true;
      }
    }
  }, []);

  const onSave = (e) => {
    e.preventDefault();
    if (
      ing.name.length > 2 &&
      ing.description.length > 2 &&
      ing.status.length > 0
    ) {
      errorRef1.current.style.display = "none";
      errorRef1.current.textContent = "";
      setSave(false);
      setClear(false);
      setAdd(true);
      sessionStorage.setItem("newIng", JSON.stringify(ing));
    } else {
      if (errorRef1.current) {
        errorRef1.current.style.display = "flex";
        errorRef1.current.textContent = `Missing ${
          ing.name.length > 2
            ? ing.description.length > 2
              ? ing.status.length > 0
                ? ""
                : "Status"
              : "Speciality Description"
            : "Speciality Name"
        } Field !`;
      }
    }
  };
  const onSave1 = (e) => {
    e.preventDefault();
    if (
      ing.name.length > 2 &&
      ing.scname.length > 2 &&
      ing.skname.length > 2 &&
      ing.description.length > 2
    ) {
      errorRef2.current.style.display = "none";
      errorRef2.current.textContent = "";
      setSave(false);
      setAdd(true);
      sessionStorage.setItem("newIng", JSON.stringify(ing));
    } else {
      if (errorRef2.current) {
        errorRef2.current.style.display = "flex";
        errorRef2.current.textContent = `Missing ${
          ing.name.length > 2
            ? ing.scname.length > 2
              ? ing.skname.length > 2
                ? ing.description.length > 2
                  ? ""
                  : "Description"
                : "Sanskrit Name"
              : "Scientific Name"
            : "Ingredient Name"
        } Field !`;
      }
    }
  };
  const onSave2 = (e) => {
    e.preventDefault();
    if (
      ing.prakritiImpact.vata.length > 2 &&
      ing.prakritiImpact.kapha.length > 2 &&
      ing.prakritiImpact.pitta.length > 2
    ) {
      errorRef3.current.style.display = "none";
      errorRef3.current.textContent = "";
      setSave(false);
      setAdd(true);
      sessionStorage.setItem("newIng", JSON.stringify(ing));
    } else {
      if (errorRef3.current) {
        errorRef3.current.style.display = "flex";
        errorRef3.current.textContent = `Missing ${
          ing.prakritiImpact.vata.length > 2
            ? ing.prakritiImpact.kapha.length > 2
              ? ing.prakritiImpact.pitta.length > 2
                ? ""
                : "Pitta"
              : "Kapha"
            : "Vata"
        } Field !`;
      }
    }
  };
  const onSave3 = (e) => {
    e.preventDefault();
    if (
      ing.properties.rasa.length > 2 &&
      ing.properties.veerya.length > 2 &&
      ing.properties.guna.length > 2 &&
      ing.properties.vipaka.length > 2
    ) {
      errorRef4.current.style.display = "none";
      errorRef4.current.textContent = "";
      setSave(false);
      setAdd(true);
      sessionStorage.setItem("newIng", JSON.stringify(ing));
    } else {
      if (errorRef4.current) {
        errorRef4.current.style.display = "flex";
        errorRef4.current.textContent = `Missing ${
          ing.properties.rasa.length > 2
            ? ing.properties.veerya.length > 2
              ? ing.properties.guna.length > 2
                ? ing.properties.vipaka.length > 2
                  ? ""
                  : "Vipaka"
                : "Guna"
              : "Veerya"
            : "Rasa"
        } Field !`;
      }
    }
  };
  const onSave4 = (e) => {
    e.preventDefault();
    if (
      ing.plant.detail.length > 0 &&
      ing.plant.detail[0].part.length > 2 &&
      ing.plant.detail[0].description.length > 2 &&
      ing.plant.combinedWith.length > 2 &&
      ing.plant.location.length > 2
    ) {
      errorRef5.current.style.display = "none";
      errorRef5.current.textContent = "";
      setSave(false);
      setAdd(true);
      sessionStorage.setItem("newIng", JSON.stringify(ing));
    } else {
      if (errorRef5.current) {
        errorRef5.current.style.display = "flex";
        errorRef5.current.textContent = `Missing ${
          ing.plant.detail.length > 0 &&
          ing.plant.detail[0].part.length > 2 &&
          ing.plant.detail[0].description.length > 2
            ? ing.plant.combinedWith.length > 2
              ? ing.plant.location.length > 2
                ? ""
                : "Location"
              : "Best Combined with"
            : "Part/Description"
        } Field !`;
      }
    }
  };
  const addUses = () => {
    const newItem = {
      id:
        ing.whyToUse.length > 0
          ? Math.max(...ing.whyToUse.map((item) => item.id)) + 1
          : 0,
      value: " ",
    };
    setIng((prop) => ({ ...prop, whyToUse: [...prop.whyToUse, newItem] }));
  };
  const addBenefit = () => {
    const newItem = {
      id:
        ing.benefits.length > 0
          ? Math.max(...ing.benefits.map((item) => item.id)) + 1
          : 0,
      value: " ",
    };
    setIng((prop) => ({ ...prop, benefits: [...prop.benefits, newItem] }));
  };
  const addPlant = () => {
    const newItem = {
      id:
        ing.plant.detail.length > 0
          ? Math.max(...ing.plant.detail.map((item) => item.id)) + 1
          : 0,
      part: " ",
      description: "",
    };
    setIng((prop) => ({
      ...prop,
      plant: { ...prop.plant, detail: [...prop.plant.detail, newItem] },
    }));
  };
  const addTherapy = () => {
    const newItem = {
      id:
        ing.therapyUses.length > 0
          ? Math.max(...ing.therapyUses.map((item) => item.id)) + 1
          : 0,
      value: " ",
    };
    setIng((prop) => ({
      ...prop,
      therapyUses: [...prop.therapyUses, newItem],
    }));
  };
  const addFormula = () => {
    const newItem = {
      id:
        ing.formulation.length > 0
          ? Math.max(...ing.formulation.map((item) => item.id)) + 1
          : 0,
      value: " ",
    };
    setIng((prop) => ({
      ...prop,
      formulation: [...prop.formulation, newItem],
    }));
  };
  // TODO don't forgot to remove "!" after creation
  return !more ? (
    <section className="flex flex-col w-screen md:w-[75vw] gap-4">
      <article className="relative flex flex-nowrap overflow-scroll noscrollbar justify-between w-full text-xs lg:text-xl md:w-[75%] my-4 self-center text-center whitespace-nowrap gap-2">
        <div className="first flex flex-col justify-center items-center">
          <strong className="bg-white p-2 aspect-square rounded-full border-2 border-black">
            01
          </strong>
          <strong className="w-[45px] sm:w-fit overflow-hidden transition-all">General Information</strong>
        </div>
        <div className="flex flex-col justify-center items-center">
          <strong className="bg-white p-2 aspect-square rounded-full border-2 border-black">
            02
          </strong>
          <strong>Benefits</strong>
        </div>
        <div className="flex flex-col justify-center items-center">
          <strong className="p-2 bg-white aspect-square rounded-full border-2 border-black">
            03
          </strong>
          <strong>Properties</strong>
        </div>
        <div className="flex flex-col justify-center items-center">
          <strong className="p-2 bg-white aspect-square rounded-full border-2 border-black">
            04
          </strong>
          <strong>Other</strong>
        </div>
        <div className="last flex flex-col justify-center items-center">
          <strong className="p-2 bg-white aspect-square rounded-full border-2 border-black">
            05
          </strong>
          <strong>Overview</strong>
        </div>
        <strong className="absolute border-2 border-black w-full z-[-1] top-4 lg:top-5"></strong>
      </article>

      {/* General Information */}
      <section id="general" className="flex flex-col gap-4">
        <section className="flex flex-col p-4 rounded-lg shadow-[0.1rem_0.1rem_0.5rem_black] gap-4">
          <h1>General Information</h1>
          <article className="flex flex-wrap md:flex-nowrap gap-3">
            <div className="flex flex-col grow">
              <label
                htmlFor="ingname"
                className="w-fit after:content-['*'] after:text-red-500 bg-white z-[2] ml-3"
              >
                Ingredient Name
              </label>
              <input
                id="ingname"
                name="ingname"
                className="p-2 border-2 rounded-md w-full mt-[-1.5ch] text-gray-500"
                value={ing.name}
                onChange={(e) =>
                  setIng((prop) => ({ ...prop, name: e.target.value }))
                }
                required
                autoFocus
              />
            </div>
            <div className="flex flex-col grow">
              <label
                htmlFor="ingscname"
                className="w-fit after:content-['*'] after:text-red-500 bg-white z-[2] ml-3"
              >
                Scientific Name
              </label>
              <input
                id="ingscname"
                name="ingscname"
                className="p-2 border-2 rounded-md w-full mt-[-1.5ch] text-gray-500"
                value={ing.scname}
                onChange={(e) =>
                  setIng((prop) => ({ ...prop, scname: e.target.value }))
                }
                required
              />
            </div>
            <div className="flex flex-col grow">
              <label
                htmlFor="ingskname"
                className="w-fit after:content-['*'] after:text-red-500 bg-white z-[2] ml-3"
              >
                Sanskrit Name
              </label>
              <input
                id="ingskname"
                name="ingskname"
                className="p-2 border-2 rounded-md w-full mt-[-1.5ch] text-gray-500"
                value={ing.skname}
                onChange={(e) =>
                  setIng((prop) => ({ ...prop, skname: e.target.value }))
                }
                required
              />
            </div>
          </article>
          <article className="flex">
            <div className="flex flex-col grow">
              <label
                htmlFor="ingdesc"
                className="w-fit after:content-['*'] after:text-red-500 bg-white z-[2] ml-3"
              >
                Ingredient Description
              </label>
              <input
                id="ingdesc"
                name="ingdesc"
                className="p-2 border-2 rounded-md w-full mt-[-1.5ch] text-gray-500"
                value={ing.description}
                onChange={(e) =>
                  setIng((prop) => ({ ...prop, description: e.target.value }))
                }
                required
              />
            </div>
          </article>
        </section>

        <article className="flex items-center justify-center gap-4">
          <button
            disabled={!save}
            type="button"
            className="bg-green-600 text-white py-2 px-8 rounded-lg"
            onClick={(e) => onSave1(e)}
          >
            Save
          </button>
          <button
            id="generalbtn"
            disabled={!add}
            type="button"
            className="bg-gray-600 text-white py-2 px-8 rounded-lg"
          >
            Next
          </button>
        </article>

        <strong ref={errorRef2} className="hidden self-center text-red-500">
          error section
        </strong>
      </section>
      {/* Benefits */}
      <section id="benefits" className="flex flex-col gap-4">
        <section className="flex flex-col p-4 rounded-lg shadow-[0.1rem_0.1rem_0.5rem_black] gap-6">
          <h1>Benefits</h1>
          <article className="flex flex-col gap-2">
            <h1>Why To Use</h1>
            {ing.whyToUse.map((item) => (
              <div
                key={`uses/${item.id}`}
                className="w-full flex justify-center items-center"
              >
                <input
                  className="grow p-2 border-2 rounded-md text-gray-500"
                  onChange={(e) => {
                    setIng((prop) => ({
                      ...prop,
                      whyToUse: prop.whyToUse.map((inthere) => {
                        if (inthere.id === item.id) {
                          return { ...inthere, value: e.target.value };
                        } else {
                          return inthere;
                        }
                      }),
                    }));
                  }}
                  value={item.value}
                />
                <RxCross2
                  className="icon mx-3 text-2xl text-gray-500"
                  onClick={(e) => {
                    e.target.style.animation =
                      "rotate 0.5s linear 0s infinite normal none";
                    setTimeout(() => {
                      setIng((prop) => ({
                        ...prop,
                        whyToUse: prop.whyToUse.filter(
                          (inthere) => inthere.id !== item.id
                        ),
                      }));
                    }, 2000);
                  }}
                />
              </div>
            ))}
            <strong
              className="w-fit cursor-pointer text-green-700"
              onClick={() => {
                addUses();
              }}
            >
              Add Another Items
            </strong>
          </article>
          <article className="flex flex-col gap-2">
            <h1>Prakriti Impact</h1>
            <article className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col grow">
                <label
                  htmlFor="vata"
                  className="after:content-['*'] after:text-red-500 bg-white w-fit z-[2] ml-3"
                >
                  Vata
                </label>
                <select
                  id="vata"
                  className="w-full grow p-2 border-2 rounded-md text-center mt-[-1.5ch]"
                  value={ing.prakritiImpact.vata}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      prakritiImpact: {
                        ...prop.prakritiImpact,
                        vata: e.target.value,
                      },
                    }))
                  }
                >
                  <option value={"none"} selected>
                    Select
                  </option>
                  <option value={"Prana Vata"}>Prana Vata</option>
                  <option value={"Udana Vata"}>Udana Vata</option>
                  <option value={"Vyana Vata"}>Vyana Vata</option>
                  <option value={"Samana Vata"}>Samana Vata</option>
                  <option value={"Apana Vata"}>Apana Vata</option>
                </select>
              </div>
              <div className="flex flex-col grow">
                <label
                  htmlFor="kapha"
                  className="after:content-['*'] after:text-red-500 bg-white w-fit z-[2] ml-3"
                >
                  Kapha
                </label>
                <select
                  id="kapha"
                  className="w-full grow p-2 border-2 rounded-md text-center mt-[-1.5ch]"
                  value={ing.prakritiImpact.kapha}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      prakritiImpact: {
                        ...prop.prakritiImpact,
                        kapha: e.target.value,
                      },
                    }))
                  }
                >
                  <option value={"none"} selected>
                    Select
                  </option>
                  <option value={"Avalambaka Kapha"}>Avalambaka Kapha</option>
                  <option value={"Kledaka Kapha"}>Kledaka Kapha</option>
                  <option value={"Tarpaka Kapha"}>Tarpaka Kapha</option>
                  <option value={"Bodhaka Kapha"}>Bodhaka Kapha</option>
                  <option value={"Sleshaka Kapha"}>Sleshaka Kapha</option>
                </select>
              </div>
              <div className="flex flex-col grow">
                <label
                  htmlFor="pitta"
                  className="after:content-['*'] after:text-red-500 bg-white w-fit z-[2] ml-3"
                >
                  Pitta
                </label>
                <select
                  id="pitta"
                  className="w-full grow p-2 border-2 rounded-md text-center mt-[-1.5ch]"
                  value={ing.prakritiImpact.pitta}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      prakritiImpact: {
                        ...prop.prakritiImpact,
                        pitta: e.target.value,
                      },
                    }))
                  }
                >
                  <option value={"none"} selected>
                    Select
                  </option>
                  <option value={"Pachaka Pitta"}>Pachaka Pitta</option>
                  <option value={"Ranjaka Pitta"}>Ranjaka Pitta</option>
                  <option value={"Sadhaka Pitta"}>Sadhaka Pitta</option>
                  <option value={"Alochaka Pitta"}>Alochaka Pitta</option>
                  <option value={"Bhrajaka Pitta"}>Bhrajaka Pitta</option>
                </select>
              </div>
              <div className="flex flex-col grow">
                <label
                  htmlFor="vatareason"
                  className="bg-white w-fit z-[2] ml-3"
                >
                  Vata Reason
                </label>
                <select
                  id="vatareason"
                  className="w-full grow p-2 border-2 rounded-md text-center mt-[-1.5ch]"
                  value={ing.prakritiImpact.vataReason}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      prakritiImpact: {
                        ...prop.prakritiImpact,
                        vataReason: e.target.value,
                      },
                    }))
                  }
                >
                  <option value={"none"} selected>
                    Select
                  </option>
                  <option value={"Irregular Routine"}>Irregular Routine</option>
                  <option value={"Excessive Physical Activity"}>
                    Excessive Physical Activity
                  </option>
                  <option value={"Suppressed Urges"}>Suppressed Urges</option>
                  <option value={"Poor Diet"}>Poor Diet</option>
                  <option value={"Cold and Dry Weather"}>
                    Cold and Dry Weather
                  </option>
                  <option value={"Stress and Anxiety"}>
                    Stress and Anxiety
                  </option>
                </select>
              </div>
              <div className="flex flex-col grow">
                <label
                  htmlFor="kaphareason"
                  className="bg-white w-fit z-[2] ml-3"
                >
                  Kapha Reason
                </label>
                <select
                  id="kaphareason"
                  className="w-full grow p-2 border-2 rounded-md text-center mt-[-1.5ch]"
                  value={ing.prakritiImpact.kaphaReason}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      prakritiImpact: {
                        ...prop.prakritiImpact,
                        kaphaReason: e.target.value,
                      },
                    }))
                  }
                >
                  <option value={"none"} selected>
                    Select
                  </option>
                  <option value={"Excessive sweet, sour, and salty tastes"}>
                    Excessive sweet, sour, and salty tastes
                  </option>
                  <option value={"Heavy, oily, and cold foods"}>
                    Heavy, oily, and cold foods
                  </option>
                  <option value={"Lack of physical activity"}>
                    Lack of physical activity
                  </option>
                  <option value={"Sleeping during the day"}>
                    Sleeping during the day
                  </option>
                  <option value={"Cold and humid climates"}>
                    Cold and humid climates
                  </option>
                </select>
              </div>
              <div className="flex flex-col grow">
                <label
                  htmlFor="pittareason"
                  className="bg-white w-fit z-[2] ml-3"
                >
                  Pitta Reason
                </label>
                <select
                  id="pittareason"
                  className="w-full grow p-2 border-2 rounded-md text-center mt-[-1.5ch]"
                  value={ing.prakritiImpact.pittaReason}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      prakritiImpact: {
                        ...prop.prakritiImpact,
                        pittaReason: e.target.value,
                      },
                    }))
                  }
                >
                  <option value={"none"} selected>
                    Select
                  </option>
                  <option
                    value={
                      "Excessive consumption of pungent, sour, and salty foods"
                    }
                  >
                    Excessive consumption of pungent, sour, and salty foods
                  </option>
                  <option value={"Red meat"}>Red meat</option>
                  <option value={"Overwork and lack of rest"}>
                    Overwork and lack of rest
                  </option>
                  <option value={"Excessive sun exposure"}>
                    Excessive sun exposure
                  </option>
                  <option value={"Emotional stress and anger"}>
                    Emotional stress and anger
                  </option>
                </select>
              </div>
            </article>
          </article>
          <article className="flex flex-col gap-2">
            <h1>Benefits</h1>
            {ing.benefits.map((item) => (
              <div
                key={`benefits/${item.id}`}
                className="w-full flex justify-center items-center"
              >
                <input
                  value={item.value}
                  className="grow p-2 border-2 rounded-md text-gray-500"
                  onChange={(e) => {
                    setIng((prop) => ({
                      ...prop,
                      benefits: prop.benefits.map((inthere) => {
                        if (inthere.id === item.id) {
                          return { ...inthere, value: e.target.value };
                        } else {
                          return inthere;
                        }
                      }),
                    }));
                  }}
                />
                <RxCross2
                  className="icon mx-3 text-2xl text-gray-500"
                  onClick={(e) => {
                    e.target.style.animation =
                      "rotate 0.5s linear 0s infinite normal none";
                    setTimeout(() => {
                      setIng((prop) => ({
                        ...prop,
                        benefits: prop.benefits.filter(
                          (inthere) => inthere.id !== item.id
                        ),
                      }));
                    }, 2000);
                  }}
                />
              </div>
            ))}
            <strong
              className="w-fit cursor-pointer text-green-700"
              onClick={() => {
                addBenefit();
              }}
            >
              Add Another Items
            </strong>
          </article>
        </section>

        <article className="flex items-center justify-center gap-4">
          <button
            disabled={!save}
            type="button"
            className="bg-green-600 text-white py-2 px-8 rounded-lg"
            onClick={(e) => onSave2(e)}
          >
            Save
          </button>
          <button
            id="benefitsbtn"
            disabled={!add}
            type="button"
            className="bg-gray-600 text-white py-2 px-8 rounded-lg"
          >
            Next
          </button>
        </article>

        <strong ref={errorRef3} className="hidden self-center text-red-500">
          error section
        </strong>
      </section>
      {/* Properties */}
      <section id="properties" className="flex flex-col gap-4">
        <section className="flex flex-col p-4 rounded-lg shadow-[0.1rem_0.1rem_0.5rem_black] gap-4">
          <article className="flex flex-col gap-4">
            <h1>Ayurvedic Properties</h1>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label
                  htmlFor="rasa"
                  className="after:content-['*'] after:text-red-500 z-[2] bg-white w-fit ml-3"
                >
                  Rasa
                </label>
                <input
                  className="w-full p-2 rounded-md mt-[-1.5ch] border-2"
                  id="rasa"
                  name="rasa"
                  value={ing.properties.rasa}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      properties: { ...prop.properties, rasa: e.target.value },
                    }))
                  }
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="veerya"
                  className="after:content-['*'] after:text-red-500 z-[2] bg-white w-fit ml-3"
                >
                  Veerya
                </label>
                <input
                  className="w-full p-2 rounded-md border-2 mt-[-1.5ch]"
                  id="veerya"
                  name="veerya"
                  value={ing.properties.veerya}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      properties: {
                        ...prop.properties,
                        veerya: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="guna"
                  className="after:content-['*'] after:text-red-500 z-[2] bg-white w-fit ml-3"
                >
                  Guna
                </label>
                <input
                  className="w-full p-2 rounded-md border-2 mt-[-1.5ch]"
                  id="guna"
                  name="guna"
                  value={ing.properties.guna}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      properties: {
                        ...prop.properties,
                        guna: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="vipaka"
                  className="after:content-['*'] after:text-red-500 z-[2] bg-white w-fit ml-3"
                >
                  Vipaka
                </label>
                <input
                  className="w-full p-2 rounded-md border-2 mt-[-1.5ch]"
                  id="vipaka"
                  name="vipaka"
                  value={ing.properties.vipaka}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      properties: {
                        ...prop.properties,
                        vipaka: e.target.value,
                      },
                    }))
                  }
                />
              </div>
            </article>
          </article>
          <article className="flex flex-col gap-2">
            <h1>Important formulations</h1>
            {ing.formulation.map((item) => (
              <div
                key={`formulation/${item.id}`}
                className="w-full flex justify-center items-center"
              >
                <input
                  className="grow p-2 border-2 rounded-md text-gray-500"
                  onChange={(e) => {
                    setIng((prop) => ({
                      ...prop,
                      formulation: prop.formulation.map((inthere) => {
                        if (inthere.id === item.id) {
                          return { ...inthere, value: e.target.value };
                        } else {
                          return inthere;
                        }
                      }),
                    }));
                  }}
                  value={item.value}
                />
                <RxCross2
                  className="icon mx-3 text-2xl text-gray-500"
                  onClick={(e) => {
                    e.target.style.animation =
                      "rotate 0.5s linear 0s infinite normal none";
                    setTimeout(() => {
                      setIng((prop) => ({
                        ...prop,
                        formulation: prop.formulation.filter(
                          (inthere) => inthere.id !== item.id
                        ),
                      }));
                    }, 2000);
                  }}
                />
              </div>
            ))}
            <strong
              className="w-fit cursor-pointer text-green-700"
              onClick={() => {
                addFormula();
              }}
            >
              Add Another Items
            </strong>
          </article>
          <article className="flex flex-col gap-2">
            <h1>Therapeutic Uses</h1>
            {ing.therapyUses.map((item) => (
              <div
                key={`therapyuses/${item.id}`}
                className="w-full flex justify-center items-center"
              >
                <input
                  className="grow p-2 border-2 rounded-md text-gray-500"
                  onChange={(e) => {
                    setIng((prop) => ({
                      ...prop,
                      therapyUses: prop.therapyUses.map((inthere) => {
                        if (inthere.id === item.id) {
                          return { ...inthere, value: e.target.value };
                        } else {
                          return inthere;
                        }
                      }),
                    }));
                  }}
                  value={item.value}
                />
                <RxCross2
                  className="icon mx-3 text-2xl text-gray-500"
                  onClick={(e) => {
                    e.target.style.animation =
                      "rotate 0.5s linear 0s infinite normal none";
                    setTimeout(() => {
                      setIng((prop) => ({
                        ...prop,
                        therapyUses: prop.therapyUses.filter(
                          (inthere) => inthere.id !== item.id
                        ),
                      }));
                    }, 2000);
                  }}
                />
              </div>
            ))}
            <strong
              className="w-fit cursor-pointer text-green-700"
              onClick={() => {
                addTherapy();
              }}
            >
              Add Another Items
            </strong>
          </article>
        </section>

        <article className="flex items-center justify-center gap-4">
          <button
            disabled={!save}
            type="button"
            className="bg-green-600 text-white py-2 px-8 rounded-lg"
            onClick={(e) => onSave3(e)}
          >
            Save
          </button>
          <button
            id="propertiesbtn"
            disabled={!add}
            type="button"
            className="bg-gray-600 text-white py-2 px-8 rounded-lg"
          >
            Next
          </button>
        </article>

        <strong ref={errorRef4} className="hidden self-center text-red-500">
          error section
        </strong>
      </section>
      {/* Others */}
      <section id="other" className="flex flex-col gap-4">
        <section className="flex flex-col p-4 rounded-lg shadow-[0.1rem_0.1rem_0.5rem_black] gap-4">
          <h1>Plant Parts And Its Purpose</h1>
          {ing.plant.detail.map((item) => (
            <article
              key={`plantpart/${item.id}`}
              className="flex flex-wrap md:flex-nowrap gap-3 items-center w-full box-border"
            >
              <article className="flex grow flex-col">
                <label
                  htmlFor="plantpart"
                  className="after:content-['*'] after:text-red-500 ml-3 z-[2] bg-white w-fit"
                >
                  Plant Part
                </label>
                <select
                  className="border-2 rounded-md p-2 mt-[-1.5ch] text-center"
                  value={item.part}
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      plant: {
                        ...prop.plant,
                        detail: [
                          ...prop.plant.detail.map((inthere) => {
                            if (inthere.id === item.id) {
                              return { ...inthere, part: e.target.value };
                            } else {
                              return inthere;
                            }
                          }),
                        ],
                      },
                    }))
                  }
                >
                  <option value={"none"}>Select</option>
                  <option value={"Leaf"}>Leaf</option>
                  <option value={"Root"}>Root</option>
                  <option value={"Root Bark"}>Root Bark</option>
                  <option value={"Bark"}>Bark</option>
                  <option value={"Fruits"}>Fruits</option>
                  <option value={"Juice/Extract"}>Juice/Extract</option>
                  <option value={"Pulp"}>Pulp</option>
                </select>
              </article>
              <article className="flex grow flex-col">
                <label
                  htmlFor="plantpart"
                  className="after:content-['*'] after:text-red-500 ml-3 z-[2] bg-white w-fit"
                >
                  Discription
                </label>
                <input
                  value={item.description}
                  className="border-2 rounded-md p-2 mt-[-1.5ch]"
                  onChange={(e) =>
                    setIng((prop) => ({
                      ...prop,
                      plant: {
                        ...prop.plant,
                        detail: [
                          ...prop.plant.detail.map((inthere) => {
                            if (inthere.id === item.id) {
                              return {
                                ...inthere,
                                description: e.target.value,
                              };
                            } else {
                              return inthere;
                            }
                          }),
                        ],
                      },
                    }))
                  }
                />
              </article>
              <RxCross2
                className="icon text-2xl text-gray-500"
                onClick={(e) => {
                  e.target.style.animation =
                    "rotate 0.5s linear 0s infinite normal none";
                  setTimeout(() => {
                    setIng((prop) => ({
                      ...prop,
                      plant: {
                        ...prop.plant,
                        detail: [
                          ...prop.plant.detail.filter(
                            (inthere) => inthere.id !== item.id
                          ),
                        ],
                      },
                    }));
                  }, 2000);
                }}
              />
            </article>
          ))}
          <article className="flex gap-4 justify-start items-center">
            <button
              className="flex items-center gap-2 px-6 py-2 bg-green-600 rounded-md text-white"
              onClick={() => addPlant()}
            >
              <IoMdAdd className="text-2xl self-center" /> Add
            </button>
          </article>
          <table className="flex flex-col border-2 rounded-lg p-2">
            <thead className="flex gap-3 border-b-2">
              <th className="w-[30%] text-left">Plant Parts</th>
              <th className="w-[70%] text-left grow">Description</th>
            </thead>
            <tbody className="flex flex-col gap-3">
              {ing.plant.detail.length > 0 &&
              ing.plant.detail[0].part.length > 0 &&
              ing.plant.detail[0].description.length > 0 ? (
                ing.plant.detail.map((item) => (
                  <tr className="flex gap-3">
                    <td className="w-[30%]">{item.part}</td>
                    <td className="w-[70%] grow">{item.description}</td>
                  </tr>
                ))
              ) : (
                <strong className="text-red-500 text-center">
                  no result found !
                </strong>
              )}
            </tbody>
          </table>
          <article className="flex flex-col">
            <label
              htmlFor="combined"
              className="bg-white after:content-['*'] after:text-red-500 ml-3 w-fit z-[2]"
            >
              Best Combined With
            </label>
            <input
              id="combined"
              name="combined"
              className="p-2 mt-[-1.5ch] border-2 rounded-md"
              value={ing.plant.combinedWith}
              onChange={(e) =>
                setIng((prop) => ({
                  ...prop,
                  plant: { ...prop.plant, combinedWith: e.target.value },
                }))
              }
              required
            />
          </article>
          <article className="flex flex-col">
            <label
              htmlFor="location"
              className="bg-white after:content-['*'] after:text-red-500 ml-3 w-fit z-[2]"
            >
              Geographical Locations
            </label>
            <input
              id="location"
              name="location"
              className="p-2 mt-[-1.5ch] border-2 rounded-md"
              value={ing.plant.location}
              onChange={(e) =>
                setIng((prop) => ({
                  ...prop,
                  plant: { ...prop.plant, location: e.target.value },
                }))
              }
              required
            />
          </article>
        </section>

        <article className="flex items-center justify-center gap-4">
          <button
            disabled={!save}
            type="button"
            className="bg-green-600 text-white py-2 px-8 rounded-lg"
            onClick={(e) => onSave4(e)}
          >
            Save
          </button>
          <button
            id="otherbtn"
            disabled={!add}
            type="button"
            className="bg-gray-600 text-white py-2 px-8 rounded-lg"
          >
            Next
          </button>
        </article>

        <strong ref={errorRef5} className="hidden self-center text-red-500">
          error section
        </strong>
      </section>
      {/* Overview */}
      <section id="overview" className="flex flex-col gap-4">
        Overview
      </section>
    </section>
  ) : (
    <section className="p-4">
      <form className="flex p-4 flex-col w-screen md:w-[75vw] gap-3 box-border">
        <strong>Add Incredient</strong>
        <article className="flex w-full gap-2">
          <article className="left flex flex-col gap-2 w-[50%] p-4">
            <div className="relative flex flex-col items-start">
              <label
                htmlFor="name"
                className="after:content-['*'] after:text-red-500 bg-white z-[2] ml-3"
              >
                Specialty Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="p-2 border-2 rounded-md w-full mt-[-1.5ch] text-gray-500"
                required
                autoFocus
                value={ing.name}
                onChange={(e) =>
                  setIng((prop) => ({ ...prop, name: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="status" className="after:content-['*']">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-nowrap gap-1">
                  <input
                    id="active"
                    name="status"
                    type="radio"
                    value={`Active`}
                    required
                    onChange={(e) =>
                      setIng((prop) => ({ ...prop, status: e.target.value }))
                    }
                  />
                  <label htmlFor="active">Active</label>
                </div>
                <div className="flex flex-nowrap gap-1">
                  <input
                    id="inactive"
                    name="status"
                    type="radio"
                    value={`In Active`}
                    onChange={(e) =>
                      setIng((prop) => ({ ...prop, status: e.target.value }))
                    }
                  />
                  <label htmlFor="inactive">In Active</label>
                </div>
              </div>
            </div>
          </article>
          <article className="right flex flex-col gap-2 w-[50%] p-4">
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className=" after:content-['*'] bg-white w-fit z-[1] ml-3"
              >
                Speciality Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={`10`}
                value={ing.description}
                required
                className="w-full border-2 rounded-md mt-[-1.5ch] p-[1ch] text-gray-500 box-border"
                onChange={(e) =>
                  setIng((prop) => ({ ...prop, description: e.target.value }))
                }
              ></textarea>
            </div>
          </article>
        </article>
        <article className="flex w-[50%] items-center gap-2 p-4">
          <label className="flex flex-nowrap min-w-full border-2 rounded-md p-2 items-center">
            <GrAttachment />
            Attachment
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            onChange={(e) =>
              setIng((prop) => ({ ...prop, imageurl: e.target.value }))
            }
            required
          />
        </article>
        <article className="flex justify-end gap-4 px-4">
          <button
            id="clear"
            type="button"
            disabled={!clear}
            className="bg-gray-300 text-black py-2 px-6 rounded-lg"
            onClick={() => {
              setIng((prop) => ({ ...prop, name: "" }));
              setIng((prop) => ({ ...prop, description: "" }));
              setIng((prop) => ({ ...prop, status: "" }));
              setIng((prop) => ({ ...prop, imageurl: "" }));
              document.querySelector(
                'input[name="status"]:checked'
              ).checked = false;
            }}
          >
            Clear
          </button>
          <button
            type="button"
            disabled={!save}
            id="save"
            className="bg-green-600 text-white py-2 px-6 rounded-lg"
            onClick={(e) => onSave(e)}
          >
            Save
          </button>
          <button
            id="more"
            type="button"
            disabled={!add}
            className="bg-green-600 text-white py-2 px-6 rounded-lg"
            onClick={() => setMore(true)}
          >
            Add More details
          </button>
        </article>
        <article className="flex justify-end gap-4 px-4">
          <strong
            ref={errorRef1}
            className="error hidden text-red-600"
          ></strong>
        </article>
      </form>
    </section>
  );
}
