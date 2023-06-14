import { withIronSession } from "next-iron-session";
import { type } from "os";


async function handler(req:any, res:any) {
  req.session.set("user", { name: "John", email: "john@example.com" });
  await req.session.save();
  
  res.send("Session has been set!");
}

export default withIronSession(handler, {
  password: "a-very-long-password-of-at-least-32-characters",
  cookieName: "your-cookie-name",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

