import { useEffect } from "react";
import { APP_CONFIG } from "../constants/appConfig";

export function usePageTitle(pageName) {
    useEffect(() => {
        document.title = pageName ? `${pageName} - ${APP_CONFIG.name}` : APP_CONFIG.name
    }, [pageName])
}