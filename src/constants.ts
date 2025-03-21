export enum OPERATING_SYSTEMS {
    WINDOWS = "Windows_NT",
    LINUX = "Linux",
  }
  
  export const CHROME_EXECUTABLE_PATH_SERVER =
    process.env.os === OPERATING_SYSTEMS.WINDOWS
      ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
      : "/usr/bin/google-chrome"; 
  
