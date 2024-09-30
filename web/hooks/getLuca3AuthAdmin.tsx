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
  abi: config.Luca3Auth.abi as Abi,
});

export function getLuca3AuthAdmin() {
  const { data: admin, isLoading } = useReadContract({
    contract,
    method: resolveMethod("admin_"),
    params: [],
  });

  return { admin, isLoading };
}
