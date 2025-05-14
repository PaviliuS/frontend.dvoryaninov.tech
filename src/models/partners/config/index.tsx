import { BigDataIcon } from "../assets/big-data";
import { EdgeTechIcon } from "../assets/edge-tech";
import { InnoPravoIcon } from "../assets/innopravo";
import { MegafonIcon } from "../assets/megafon";
import { NovaRollIcon } from "../assets/novaroll";
import { SberIcon } from "../assets/sber";
import type { PartnerType } from "../types";

export const partners: PartnerType[] = [
  { id: 1, name: "BigData", icon: BigDataIcon },
  { id: 2, name: "NovaRoll", icon: NovaRollIcon },
  { id: 3, name: "Sber", icon: SberIcon },
  { id: 4, name: "Megafon", icon: MegafonIcon },
  { id: 5, name: "InnoPravo", icon: InnoPravoIcon },
  { id: 6, name: "EdgeTech", icon: EdgeTechIcon },
];
