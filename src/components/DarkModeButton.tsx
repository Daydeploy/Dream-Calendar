import { useEffect, useState } from "react";
import icon from "@/assets/darkmode.jpg";

export const DarkModeButton = () => {
  const [isDark, setIsDark] = useState(false); //Create state called isDark(false), setIsDark is the function to change it

  useEffect(() => {                            //Whenever isDark changes this code runs
    const html = document.documentElement;     
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}
    style={{

      }}
    >
      <img src={icon}
      style={{ width: 24, height: 24, display: "block", objectFit: "cover" }}
      />
    </button>
  )
}

export default DarkModeButton
