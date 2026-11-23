import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../libs/types/member";
import { GlobalContext } from "../hooks/useGlobals";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // cookieni va accessTokenni tekshiryapmiz
  const cookies = new Cookies();
  // Ular bolmaganda localStoragedagi memberDatani o'chirish mantigi
  // [CONTEXT 2/8] Cookie tekshiriladi: token yo'q bo'lsa, eski memberData o'chiriladi
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData");

  // cookie bosa
  // [CONTEXT 3/8] authMember tiklanadi: localStorage'dagi memberData bilan boshlanadi
  const [authMember, setAuthMember] = useState<Member | null>(
    // datani o'qib
    localStorage.getItem("memberData")
      ? // uni JSON formatdan objectga o'giryapmiz va u authMemberni boshlangich qiymati boladi
        JSON.parse(localStorage.getItem("memberData") as string)
      : null,
  );

  console.log(" === verify === ");

  return (
    // bu yerda useGlobalga login bolgan userni datasi berilyapti
    // endi komponentlar ichida useGlobals orqali authMember va setAuthMember'ni ishlatish mumkin
    // [CONTEXT 4/8] Taxtaga ilinadi: value orqali authMember va setAuthMember
    <GlobalContext.Provider value={{ authMember, setAuthMember }}>
      {/* [CONTEXT 5/8] Hamma ko'ra oladi: children = App va undagi hamma komponent */}
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
