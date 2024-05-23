import NextAuth from "next-auth"
import { Provider } from "next-auth/providers"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { Admin } from "../../../lib/db"
import { dbConnect } from "../../../lib/dbConnect"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials :{
        username: { label: "Username", type: "text", placeholder:"Enter your username here...",required: true,},
        email: { label: "Email", type: "email", placeholder:"Enter your email here...",required: true},
        password: { label: "Password", type: "password", placeholder:"Enter your password here...", required: true}
      },
      async authorize(credentials, req){
        await dbConnect()


        // checking if credentials are recieved or not
        if(!credentials)
          {
            return null;
          }
          const username = credentials.username;
          const email = credentials.email;
          const password = credentials.password; 
          
          // checking if user exists or not in the database
          const admin = await Admin.findOne({username});

          // if user not found
          if(!admin){
            const newUser ={username:username,
             email:email,
             password:password};
          const newAdmin = new Admin(newUser);
          await newAdmin.save();
          console.log(newAdmin);
          return {
            id: newAdmin._id,
            name: newAdmin.username
          }
          }
          else{
            // if user found
            if(admin.password !== password){return null;
            }

 // if user found and authenticated
 return {
  id: admin._id,
  name: admin.username,
  email: admin.email
 }
}
    }
    }),
  ] as Provider[] ,
  secret: process.env.NEXTAUTH_SECRET,
  session:{
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt:{
    encryption: true,
  },

}

export default NextAuth(authOptions)