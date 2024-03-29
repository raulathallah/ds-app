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

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.auth);

  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [phone, setPhone] = useState("");

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordC, setErrorPasswordC] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Card
      shadow="none"
      style={{ border: "1px solid gainsboro", width: 500 }}
      className="p-4"
    >
      <CardBody className="text-center">
        <TextCustom text="Sign Up" type="label-lg" />
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
          label="Email"
          type="email"
          labelPlacement={"inside"}
          value={email}
          onValueChange={setEmail}
          isInvalid={errorEmail}
          errorMessage={errorEmail && "Please enter email"}
          placeholder="email@mail.com"
        />
        <Input
          className="text-left"
          label="Phone"
          labelPlacement={"inside"}
          value={phone}
          onValueChange={setPhone}
          isInvalid={errorPhone}
          errorMessage={errorPhone && "Please enter phone number"}
          placeholder="0812..."
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
        <Input
          className="text-left"
          type={isVisible ? "text" : "password"}
          label="Confirm Password"
          value={passwordC}
          onValueChange={setPasswordC}
          isInvalid={errorPasswordC}
          errorMessage={errorPasswordC && "Confirm your password"}
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
        <Button color="primary" isDisabled>
          Sign Up
        </Button>
        <Link href={"/login"} className="w-full text-sm">
          Login
        </Link>
      </CardBody>
    </Card>
  );
};

export default SignUp;
