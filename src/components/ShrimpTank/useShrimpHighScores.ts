import { useEffect, useState } from "react";
import { getWorldRecord, isSupabaseConfigured } from "../../services/supabase";

export const useShrimpHighScores = (isOpen: boolean) => {
  const [worldRecord, setWorldRecord] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen || !isSupabaseConfigured) return;
    let isCurrent = true;
    void getWorldRecord()
      .then((record) => {
        if (isCurrent) setWorldRecord(record);
      })
      .catch(() => {
        if (isCurrent) setWorldRecord(null);
      });
    return () => {
      isCurrent = false;
    };
  }, [isOpen]);

  return { worldRecord };
};
