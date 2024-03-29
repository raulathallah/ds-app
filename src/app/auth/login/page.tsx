"use client";
import TextCustom from "@/components/Text";
import { login, resetAuth } from "@/redux/slices/auth-services";
import { AppDispatch, RootState } from "@/redux/store";
import { User } from "@/type";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.auth);

  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onLogin = () => {
    if (!username) setErrorUsername(true);
    else setErrorUsername(false);
    if (!password) setErrorPassword(true);
    else setErrorPassword(false);

    if (username && password) {
      const body = {
        username,
        password,
      };
      dispatch(login(body));
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      router.replace("/");
    } else {
      console.log("ERROR LOGIN");
    }
    dispatch(resetAuth());
  }, [data]);

  return (
    <Card
      shadow="none"
      style={{ border: "1px solid gainsboro", width: 500 }}
      className="p-4"
    >
      <CardBody className="text-center">
        <TextCustom text="Login" type="label-lg" />
      </CardBody>
      <CardBody className="grid gap-4 text-center">
        <Input
          className="text-left"
          label="Username"
          labelPlacement={"inside"}
          value={username}
          onValueChange={setUsername}
          isInvalid={errorUsername}
          errorMessage={errorUsername && "Please enter username"}
          placeholder="Enter your username"
        />
        <Input
          className="text-left"
          type={isVisible ? "text" : "password"}
          label="Password"
          value={password}
          onValueChange={setPassword}
          isInvalid={errorPassword}
          errorMessage={errorPassword && "Please enter password"}
          labelPlacement={"inside"}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </button>
          }
          placeholder="Enter your password"
        />
        <Button color="primary" onClick={onLogin}>
          Login
        </Button>
        <Link href={"/auth/sign-up"} className="w-full text-sm">
          Sign up
        </Link>
      </CardBody>
    </Card>
  );
};

export default Login;
