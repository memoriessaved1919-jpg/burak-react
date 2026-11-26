import axios from "axios";
import { serverApi } from "../../libs/config";
import {
  LoginInput,
  Member,
  MemberInput,
  MemberUpdateInput,
} from "../../libs/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers result:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getProduct:", err);
      throw err;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log("getRestaurant result:", result);

      const restaurant: Member = result.data;
      return restaurant;
    } catch (err) {
      console.log("Error, getRestaurant:", err);
      throw err;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      // [AUTH 5/10] So'rov ketadi: axios.post + withCredentials (backend cookie'si saqlansin)
      // [AUTH 6/10] Backend tekshiradi: signup → bcrypt.hash + create, login → findOne + bcrypt.compare
      // [AUTH 7/10] Backend token yasab accessToken cookie'siga qo'yadi va member'ni qaytaradi
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      // kelgan malumotni localStoragega joylab olyapmiz
      // [AUTH 8/10] localStorage'ga yoziladi: refresh'dan keyin ham login saqlansin
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("Error, signup:", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("login:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("Error, login:", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      // [LOGOUT 4/8] Backend tekshiradi: verifyAuth cookie'dagi tokenni tekshiradi
      // [LOGOUT 5/8] Backend accessToken cookie'sini maxAge: 0 bilan o'chiradi
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("logout:", result);

      // [LOGOUT 6/8] localStorage tozalanadi: memberData o'chiriladi
      localStorage.removeItem("memberData");

      return result.data.logout;
    } catch (err) {
      console.log("Error, logout:", err);
      throw err;
    }
  }

  public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const formData = new FormData();
      formData.append("memberNick", input.memberNick || "");
      formData.append("memberPhone", input.memberPhone || "");
      formData.append("memberAddress", input.memberAddress || "");
      formData.append("memberDesc", input.memberDesc || "");
      formData.append("memberImage", input.memberImage || "");

      const result = await axios(`${serverApi}/member/update`, {
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/fomr-data",
        },
      });

      console.log("updateMember:", result);

      const member: Member = result.data;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, updateMember:", err);
      throw err;
    }
  }
}

export default MemberService;
