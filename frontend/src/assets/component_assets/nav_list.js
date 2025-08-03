import { MdDashboard } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { GiHerbsBundle } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { VscReferences } from "react-icons/vsc";
import { MdDashboardCustomize } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { RiRefund2Fill } from "react-icons/ri";
import { FaBullseye } from "react-icons/fa";

export const navList = () => {
  const list = [
    {
      id: 1,
      name: "Dashboard",
      path: "dashboard",
      icon: MdDashboard,
    },
    {
      id: 2,
      name: "Doctor",
      path: "doctor",
      icon: FaUserDoctor,
    },
    {
      id: 3,
      name: "Patients",
      path: "patients",
      icon: HiUserGroup,
    },
    {
      id: 4,
      name: "Appointment",
      path: "appointment",
      icon: SlCalender,
    },
    {
      id: 5,
      name: "Specialties",
      path: "specialties",
      icon: FaBullseye,
    },
    {
      id: 6,
      name: "Ingredients",
      path: "ingredients",
      icon: GiHerbsBundle,
      sub_list: [
        {
          id: 1,
          name: "Ingredients list",
          path: "ingredients_list",
          icon: FaClipboardList,
        },
        {
          id: 2,
          name: "Add Ingredients",
          path: "add_ingredients",
          icon: MdAssignmentAdd,
        },
      ],
    },
    {
      id: 7,
      name: "Coupons",
      path: "coupons",
      icon: RiCoupon2Fill,
    },
    {
      id: 8,
      name: "Concerns",
      path: "concerns",
      icon: SlCalender,
    },
    {
      id: 9,
      name: "Referral",
      path: "referral",
      icon: VscReferences,
    },
    {
      id: 10,
      name: "Customization",
      path: "customization",
      icon: MdDashboardCustomize,
    },
    {
      id: 11,
      name: "Wallet",
      path: "wallet",
      icon: IoWallet,
    },
    {
      id: 12,
      name: "Refund",
      path: "refund",
      icon: RiRefund2Fill,
    },
  ];
  return list;
};
