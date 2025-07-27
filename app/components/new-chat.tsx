import { useEffect } from "react";
import { Path } from "../constant";
import { IconButton } from "./button";
import styles from "./new-chat.module.scss";

import LeftIcon from "../icons/left.svg";
import LightningIcon from "../icons/lightning.svg";

import { useNavigate } from "react-router-dom";
import Locale from "../locales";
import { useAppConfig, useChatStore } from "../store";

export function NewChat() {
  const navigate = useNavigate();
  const chatStore = useChatStore();
  const config = useAppConfig();

  // Automatically create a new chat session and navigate to it
  useEffect(() => {
    const newSession = chatStore.newSession();
    navigate(Path.Chat);
  }, [chatStore, navigate]);

  return (
    <div className={styles["new-chat"]}>
      <div className={styles["new-chat-container"]}>
        <div className={styles["new-chat-header"]}>
          <div className={styles["new-chat-title"]}>
            <div className={styles["new-chat-sub-title"]}>
              {Locale.NewChat.Title}
            </div>
          </div>
          <div className={styles["new-chat-actions"]}>
            <IconButton
              text={Locale.NewChat.Return}
              icon={<LeftIcon />}
              onClick={() => navigate(Path.Home)}
            />
          </div>
        </div>

        <div className={styles["new-chat-content"]}>
          <div className={styles["new-chat-item"]}>
            <LightningIcon />
            <div>Creating new chat...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
