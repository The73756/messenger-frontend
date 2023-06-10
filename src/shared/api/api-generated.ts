/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LoginWithEmailDto {
  /**
   * Email пользователя
   * @example "Kolby35@yahoo.com"
   */
  email: string;
  /**
   * Пароль. Минимальная длина 6 символов
   * @example "Pa$$w0rD"
   */
  password: string;
}

export interface LoginResponse {
  /** JWT access токен */
  accessToken: string;
}

export interface RegisterWithEmailDto {
  /**
   * Email пользователя
   * @example "Kayla.Walker@yahoo.com"
   */
  email: string;
  /**
   * Пароль. Минимальная длина 6 символов
   * @example "Pa$$w0rD"
   */
  password: string;
  /**
   * Повторно тот же пароль.
   * @example "Pa$$w0rD"
   */
  confirmPassword: string;
}

export interface RegisterResponse {
  /**
   * Результат выполнения запроса регистрации через телефон
   * @example true
   */
  result: boolean;
}

export interface ResponseMany {
  /**
   * Сколько взять записей в БД
   * @max 30
   * @default 25
   * @example 4
   */
  limit?: number;
  /**
   * Сколько нужно отступить записей, что-бы взять N. Высчитывается по ф-уле: offset = offset * limit
   * @example 2
   */
  offset?: number;
  /**
   * Кол-во записей в БД
   * @default []
   * @example 4
   */
  total: number;
  /**
   * Набор данных
   * @default []
   */
  rows: any[][];
}

export interface UserResponse {
  /**
   * Идентификатор пользователя
   * @example "4b044673-09ae-4b92-8a67-dcfd0b5dc159"
   */
  id: string;
  /**
   * Электронная почта пользователя
   * @example "Alexandro91@gmail.com"
   */
  email: string;
  /**
   * Дата создания учетной записи
   * @format date-time
   * @default "2023-06-10T06:51:36.030Z"
   * @example "2022-12-31T21:00:00.000Z"
   */
  createdAt: string;
  /**
   * Псевдоним пользователя
   * @example "CoolUser"
   */
  nickname?: string;
  /**
   * Имя пользователя
   * @example "Иван"
   */
  firstName?: string;
  /**
   * Фамилия пользователя
   * @example "Иванов"
   */
  lastName?: string;
  /**
   * Дата рождения пользователя
   * @format date-time
   * @example "1989-12-31T21:00:00.000Z"
   */
  birthday?: string;
  /**
   * Пол пользователя
   * @example "мужской"
   */
  sex?: string;
  /**
   * Список URL фотографий пользователя
   * @default []
   * @example ["https://example.com/photo1.jpg","https://example.com/photo2.jpg"]
   */
  photo: string[];
  /**
   * Номер телефона пользователя
   * @example "79320526937"
   */
  phone?: number;
  /**
   * Статус пользователя
   * @example "Онлайн"
   */
  status?: string;
  /**
   * Информация о пользователе
   * @example "Люблю путешествовать и кататься на велосипеде."
   */
  aboutMe?: string;
  /**
   * Роли пользователя в системе
   * @example ["user","admin"]
   */
  roles: string[];
}

export interface UpdateUserDto {
  /**
   * Email пользователя
   * @example "Marge.Kerluke@yahoo.com"
   */
  email?: string;
  /**
   * Ник пользователя
   * @example "nickname"
   */
  nickname?: string;
  /**
   * Имя пользователя
   * @example "Иван"
   */
  firstName?: string;
  /**
   * Фамилия пользователя
   * @example "Иванов"
   */
  lastName?: string;
  /**
   * Дата рождения
   * @example "Mon Jan 10 2000 03:00:00 GMT+0300 (Moscow Standard Time)"
   */
  birthday?: string;
  /**
   * Пол пользователя
   * @example "муж"
   */
  sex?: string;
  /**
   * Фото пользователя
   * @example "/photos/1.jpg"
   */
  photo?: string[];
  /**
   * Тел пользователя
   * @example "7 991-080-8530"
   */
  phone?: string;
  /**
   * Статус пользователя
   * @example "CREATED"
   */
  status?: string;
  /**
   * Описание пользователя
   * @example "Что-то интересное обо мне"
   */
  aboutMe?: string;
  /**
   * Пароль пользователя
   * @example "Qwerty1234!"
   */
  password?: string;
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://95.163.240.197/api/",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Noname Messenger
 * @version 1.0
 * @baseUrl http://95.163.240.197/api/
 * @contact
 *
 * ## API простого мессенджера
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Авторизация с помощью email и пароля
     *
     * @tags Auth
     * @name AuthControllerLoginWithEmail
     * @summary Авторизация с email и паролем
     * @request POST:/api/auth/login/email
     */
    authControllerLoginWithEmail: (data: LoginWithEmailDto, params: RequestParams = {}) =>
      this.request<LoginResponse, any>({
        path: `/api/auth/login/email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Регистрация с помощью email и пароля
     *
     * @tags Auth
     * @name AuthControllerRegisterByEmail
     * @summary Регистрация через email и пароль
     * @request POST:/api/auth/register/email
     */
    authControllerRegisterByEmail: (data: RegisterWithEmailDto, params: RequestParams = {}) =>
      this.request<RegisterResponse, any>({
        path: `/api/auth/register/email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновление пары токенов
     *
     * @tags Auth
     * @name AuthControllerRefreshTokens
     * @summary Обновление пары access и refersh токенов
     * @request POST:/api/auth/refresh-tokens
     */
    authControllerRefreshTokens: (params: RequestParams = {}) =>
      this.request<LoginResponse, any>({
        path: `/api/auth/refresh-tokens`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных пользователей
     *
     * @tags Users
     * @name UsersControllerFindAll
     * @summary Получить пользователей
     * @request GET:/api/users
     * @secure
     */
    usersControllerFindAll: (
      query?: {
        /**
         * Сколько взять записей в БД
         * @max 30
         * @default 25
         * @example 4
         */
        limit?: number;
        /**
         * Сколько нужно отступить записей, что-бы взять N. Высчитывается по ф-уле: offset = offset * limit
         * @example 2
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponseMany, any>({
        path: `/api/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных пользователя по авторизованному userId
     *
     * @tags Users
     * @name UsersControllerFindOne
     * @summary Получение пользователя
     * @request GET:/api/users/{userId}
     * @secure
     */
    usersControllerFindOne: (userId: string, params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/api/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновление данных пользователя по авторизованному userId
     *
     * @tags Users
     * @name UsersControllerUpdateOne
     * @summary Обновление данных пользователя
     * @request PUT:/api/users/{userId}
     * @secure
     */
    usersControllerUpdateOne: (userId: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/api/users/${userId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление пользователя по авторизованному userId
     *
     * @tags Users
     * @name UsersControllerDeleteOne
     * @summary Удаление пользователя
     * @request DELETE:/api/users/{userId}
     * @secure
     */
    usersControllerDeleteOne: (userId: string, params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/api/users/${userId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Найти пользователя по email
     *
     * @tags Users
     * @name UsersControllerFindByEmail
     * @summary Данные пользователя по его email
     * @request GET:/api/users/email/{email}
     * @secure
     */
    usersControllerFindByEmail: (email: string, params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/api/users/email/${email}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных по авторизованному пользователю
     *
     * @tags User
     * @name UserControllerGetCurrentUser
     * @summary Данные пользователя
     * @request GET:/api/user
     * @secure
     */
    userControllerGetCurrentUser: (params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/api/user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
