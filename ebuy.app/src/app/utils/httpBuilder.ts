import { HttpParams } from "@angular/common/http";
import { param } from "../models/param";

interface IHttpBuilder {
    setRootRoute(rootRoute: string): void;
    setUrl(url: string): void;
    appendParam(paramKey: string, value: any): this;
    appendParams(param: param[]): this;
    buildParams(): HttpParams;
    buildRoute(url?: string, rootRoute?: string): string;
    destroy(): void;
}

export class HttpBuilder implements IHttpBuilder {
    private url: string;
    private rootRoute: string;
    private params: HttpParams;

    constructor (url?: string, rootRoute?: string) {
        this.url = url ?? '';
        this.rootRoute = rootRoute ?? '';
        this.params = new HttpParams();
    }

    public setRootRoute(rootRoute: string): void {
        this.rootRoute = rootRoute;
    }

    public setUrl(url: string): void {
        this.url = url;
    }

    public appendParam(paramKey: string, value: any): this {
        if (value) {
            this.params = this.params.append(paramKey, value)
        }
        return this;
    }

    public appendParams(params: param[]): this {
        if (params) {
            params.forEach(param => {
                this.appendParam(param.key, param.value);
            });
        }
        return this;
    }

    public buildParams(): HttpParams {
        return this.params;
    }

    public buildRoute(url?: string, rootRoute?: string): string {
        if (rootRoute) this.rootRoute = rootRoute;
        if (url) this.url = url;

        return this.params.keys().length ? (this.url + this.rootRoute + '?' + this.params.toString()) : (this.url + this.rootRoute ?? '');
    }

    public destroy(): void {
        this.params = new HttpParams();
    }
}