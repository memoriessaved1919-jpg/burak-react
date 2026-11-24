import { createContext, useContext } from "react";
import { Member } from "../../libs/types/member";

interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
  orderBuilder: Date;
  setOrderBuilder: (input: Date) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined,
);

export const useGlobals = () => {
  // [CONTEXT 6/8] useGlobals — yorliq: useContext + Provider ichidaligini tekshirish
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobals within Provider");
  return context;
};

//“useGlobals hook’i useContext(GlobalContext)ni o’rab oladi:
// “Context’ni olish va bor-yo’qligini tekshirish useGlobals ichiga kirib ketdi.
// Komponentda esa faqat const { authMember } = useGlobals(); degan bitta qator qoldi.”
// komponentlar esa bitta qator bilan authMemberni oladi.”
