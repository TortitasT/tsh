// deno-lint-ignore-file ban-types
import { OS_SLASH, PSH_USERNAME } from "./_constants.ts";

class Filter {
  constructor(public name: string, public action: Function) {}
}

const filters: Filter[] = [
  new Filter("route", (route: string) => {
    if (route.includes(PSH_USERNAME)) {
      return `~${OS_SLASH}` +
        route.slice(
          route.indexOf(PSH_USERNAME) + PSH_USERNAME.length + 1,
          route.length,
        );
    }
    return route;
  }),
];

export default function filter(searchFilter: string, value: string) {
  for (const filter of filters) {
    if (filter.name == searchFilter) {
      return filter.action(value);
    }
  }
}
