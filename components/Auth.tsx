import { useState, useEffect, useRef } from "react";
import SocialLogin from "@biconomy/web3-auth";
import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { ethers } from "ethers";
import { css } from "@emotion/css";

export default function Auth() {
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [interval, enableInterval] = useState<boolean>(false);
  const sdkRef = useRef<SocialLogin | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return <div></div>;
}
