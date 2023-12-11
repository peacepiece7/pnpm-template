import Youtube from "@api/youtube";
import YoutubeClient from "@api/youtubeClient";
import { YoutubeApiContext } from "@context/YoutubeApiContext";
import { ReactNode } from "react";

const client = new YoutubeClient();
const youtube = new Youtube(client);

interface YoutubeApiProviderProps {
  children: ReactNode;
}
export function YoutubeApiProvider({ children }: YoutubeApiProviderProps) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
