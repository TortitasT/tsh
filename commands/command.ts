// deno-lint-ignore-file ban-types
export default class Command {
  constructor(
    public name: string,
    public description: string,
    public action: Function,
  ) {}
}
