import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export function pushToExternalLink(router: AppRouterInstance, link: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    router.push(`/linkExternal?targetUrl=${link}`);
}