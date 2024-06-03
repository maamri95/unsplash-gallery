import ky, {Options} from "ky";

export class KyFactory {
    static createInstance(
        kyConfig?: Options,
    ): typeof ky {
        return ky.create({
            ...(kyConfig ?? {}),
        });
    }
}