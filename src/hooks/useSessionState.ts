import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

const useSessionState = (): {
  session: string | JwtPayload;
} => {};

export default useSessionState;
