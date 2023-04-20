import { FaBomb, FaCarAlt, FaKeyboard } from "react-icons/fa";
import {
  GiCard6Spades,
  GiSnakeSpiral,
  GiSuicide,
  GiTicTacToe,
} from "react-icons/gi";
import { RiNumber2 } from "react-icons/ri";
import { TbBuildingBridge2 } from "react-icons/tb";

import type { GameInfo, GameInfoCollection } from "../../../lib/types/components/common";


import CarGame from "./carcrash/CarGame";

import React from "react";

/**
 * Collection of all the games present in the application.
 */
const games: GameInfoCollection = {

  1: {
    id: 3,
    name: "Car Game",
    component: <CarGame />,
    image: "images/carGame.png",
    altImage: "images/race-car.gif",
    description:
      "Use left and right arrow buttons to escape the red car from blue car to win the game!",
    helpContent:
      "Use left and right arrow buttons to escape the red car from blue car to win the game!",
    icon: FaCarAlt,
  }
 
};

/**
 * Get all the games and their info
 *
 * @param gameIds gameids to filter
 * @returns List of Games and their info
 */
export const getGameInfo = (gameIds: number[] | null = null): GameInfo[] => {
  if (gameIds === null) return Object.values(games);
  return Object.values(games).filter((game:any) => gameIds.includes(game.id));
};

export const isValidGameId = (gameId: number) => {
  return Object.values(games).findIndex((e:any) => e.id === gameId) > -1;
};

export default games;
