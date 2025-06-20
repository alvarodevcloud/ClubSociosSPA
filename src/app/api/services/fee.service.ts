/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiFeeGet } from '../fn/fee/api-fee-get';
import { ApiFeeGet$Params } from '../fn/fee/api-fee-get';
import { apiFeeIdDelete } from '../fn/fee/api-fee-id-delete';
import { ApiFeeIdDelete$Params } from '../fn/fee/api-fee-id-delete';
import { apiFeeIdGet } from '../fn/fee/api-fee-id-get';
import { ApiFeeIdGet$Params } from '../fn/fee/api-fee-id-get';
import { apiFeeIdPut } from '../fn/fee/api-fee-id-put';
import { ApiFeeIdPut$Params } from '../fn/fee/api-fee-id-put';
import { apiFeeMemberMemberIdGet } from '../fn/fee/api-fee-member-member-id-get';
import { ApiFeeMemberMemberIdGet$Params } from '../fn/fee/api-fee-member-member-id-get';
import { apiFeePost } from '../fn/fee/api-fee-post';
import { ApiFeePost$Params } from '../fn/fee/api-fee-post';

@Injectable({ providedIn: 'root' })
export class FeeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiFeeGet()` */
  static readonly ApiFeeGetPath = '/api/Fee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFeeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeGet$Response(params?: ApiFeeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFeeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFeeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeGet(params?: ApiFeeGet$Params, context?: HttpContext): Observable<void> {
    return this.apiFeeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFeePost()` */
  static readonly ApiFeePostPath = '/api/Fee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFeePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFeePost$Response(params?: ApiFeePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFeePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFeePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFeePost(params?: ApiFeePost$Params, context?: HttpContext): Observable<void> {
    return this.apiFeePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFeeMemberMemberIdGet()` */
  static readonly ApiFeeMemberMemberIdGetPath = '/api/Fee/member/{memberId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFeeMemberMemberIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeMemberMemberIdGet$Response(params: ApiFeeMemberMemberIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFeeMemberMemberIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFeeMemberMemberIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeMemberMemberIdGet(params: ApiFeeMemberMemberIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiFeeMemberMemberIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFeeIdGet()` */
  static readonly ApiFeeIdGetPath = '/api/Fee/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFeeIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeIdGet$Response(params: ApiFeeIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFeeIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFeeIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeIdGet(params: ApiFeeIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiFeeIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFeeIdPut()` */
  static readonly ApiFeeIdPutPath = '/api/Fee/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFeeIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFeeIdPut$Response(params: ApiFeeIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFeeIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFeeIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFeeIdPut(params: ApiFeeIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiFeeIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFeeIdDelete()` */
  static readonly ApiFeeIdDeletePath = '/api/Fee/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFeeIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeIdDelete$Response(params: ApiFeeIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFeeIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFeeIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFeeIdDelete(params: ApiFeeIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiFeeIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
