import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
//   import MetaData from './Metadata';
  import { useAuth } from '../Auth';
import { toast } from "react-hot-toast";
import { useStore } from "../Store";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

  const Signup = () => {

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [file, setFile] = useState();
    const {signUp, updateName} = useAuth();
    const { addUser } = useStore();

  
    const handleRegister = async (e) => {

      e.preventDefault();

      try {
        //Create user
        const res = await signUp(email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${name + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName:name,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName:name,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    };
 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        {/* <ColorModeSwitcher /> */}
        {/* <MetaData title='Signup'/> */}
        <form>
          <VStack
            alignItems={"stretch"}
            spacing={"8"}
            w={["full", "96"]}
            m={"auto"}
          >
            <Heading alignSelf={"center"}>DearDiary</Heading>
            <Avatar alignSelf={"center"} boxSize={"32"} />
  
            <VStack>
              <Input
                placeholder={"Name"}
                type={"text"}
                required
                focusBorderColor={"black"}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder={"Email"}
                type={"email"}
                required
                focusBorderColor={"black"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder={"Password"}
                type={"password"}
                required
                focusBorderColor={"black"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder={"Avatar"}
                type="file"
                required
                focusBorderColor={"black"}
                onChange={(e) => setFile(e.target.files[0])}
              />
  
              <Button
                bg='black'
                color='white'
                type={"submit"}
                onClick={handleRegister}
              >
                Sign Up
              </Button>
            </VStack>
  
            <Text textAlign={"right"}>
              Already Signed Up?{" "}
              <Button variant={"link"} color='black'>
                <Link to={"/login"}>Log In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;