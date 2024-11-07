import { CompilerContextProvider } from "@/context/useCompilerContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CompilerContextProvider>
      <Component {...pageProps} />
    </CompilerContextProvider>
  ) 
}
