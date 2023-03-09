import { HttpParams } from "@angular/common/http";
import { param } from "../models/param";

interface IHttpBuilder {
    setRootRoute(rootRoute: string): void;
    appendParam(paramKey: string, value: any): this;
    appendParams(param: param[]): this;
    buildParams(): HttpParams;
    buildRoute(): string;
}

export class HttpBuilder implements IHttpBuilder {
    private rootRoute?: string;
    private params: HttpParams;

    constructor (rootRoute?: string) {
        this.rootRoute = rootRoute;
        this.params = new HttpParams();
    }

    setRootRoute(rootRoute: string): void {
        this.rootRoute = rootRoute;
    }

    appendParam(paramKey: string, value: any): this {
        if (value) {
            this.params = this.params.append(paramKey, value)
        }
        return this;
    }

    appendParams(params: param[]): this {
        if (params) {
            params.forEach(param => {
                this.appendParam(param.key, param.value);
            });
        }
        return this;
    }

    buildParams(): HttpParams {
        return this.params;
    }

    buildRoute(rootRoute?: string): string {
        if (rootRoute) this.rootRoute = rootRoute;
        return this.params.keys().length ? this.rootRoute + '?' + this.params.toString() : this.rootRoute!;
    }
}