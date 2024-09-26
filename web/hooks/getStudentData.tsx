import { getContract, resolveMethod } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import config from "./config.json";
import { client } from "../app/client";
import { Abi } from "thirdweb/utils";

const contract = getContract({
  client,
  address: config.Luca3Auth.contractAddress,
  chain: baseSepolia,
});

export function getStudentData(cardUID: string) {
  const { data: studentData, isLoading } = useReadContract({
    contract,
    method: resolveMethod("students_"),
    params: [cardUID],
  });

  if (studentData?.[2] === "0x0000000000000000000000000000000000000000") {
    return { studentData: {}, isLoading: false };
  }
  return { studentData, isLoading: false };
}