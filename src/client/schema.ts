import { Observable } from 'graphql-typed-client'

export interface Query {
  getPayment: GetPaymentResponse
  __typename: 'Query'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

export interface GetPaymentResponse {
  payment: PaymentResponse
  __typename: 'GetPaymentResponse'
}

export interface PaymentResponse {
  uuid: String
  status: PaymentStatus
  __typename: 'PaymentResponse'
}

/** A list of supported payment methods */
export enum PaymentStatus {
  OPEN = 'OPEN',
  CANCELED = 'CANCELED',
  PENDING = 'PENDING',
  AUTHORIZED = 'AUTHORIZED',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  PAID = 'PAID',
}

export interface Mutation {
  initializePayment: InitializePaymentResponse
  createPayment: CreatePaymentResponse
  __typename: 'Mutation'
}

/** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSONObject = any

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

export interface InitializePaymentResponse {
  methods: PaymentMethodResponse[]
  __typename: 'InitializePaymentResponse'
}

export interface PaymentMethodResponse {
  method: PaymentMethod
  title: String
  gateway: PaymentGateway
  /** The issuers are used for certain payment methods (for example iDEAL) to specify the bank chosen by the customer. */
  issuers: PaymentMethodIssuerResponse[]
  /** Fields that are required for tax compliance. You can either present your customer with these fields in the checkout, or let us handle it when you redirect the user. */
  fields: FieldResponse[]
  __typename: 'PaymentMethodResponse'
}

/** A list of supported payment methods */
export enum PaymentMethod {
  IDEAL = 'IDEAL',
  CREDITCARD = 'CREDITCARD',
  PAYPAL = 'PAYPAL',
  BANCONTACT = 'BANCONTACT',
}

/** A list of supported gateway providers */
export enum PaymentGateway {
  MOLLIE = 'MOLLIE',
  MULTISAFEPAY = 'MULTISAFEPAY',
  PAYPAL = 'PAYPAL',
  STRIPE = 'STRIPE',
  ADYEN = 'ADYEN',
}

export interface PaymentMethodIssuerResponse {
  id: String
  title: String
  __typename: 'PaymentMethodIssuerResponse'
}

export interface FieldResponse {
  identifier: String
  type: FieldType
  name: String
  enum: FieldEnumResponse[]
  description: String
  __typename: 'FieldResponse'
}

/** A list of possible field types for tax indicators */
export enum FieldType {
  ENUM = 'ENUM',
}

export interface FieldEnumResponse {
  value: String
  label: String
  fields: FieldResponse[] | null
  __typename: 'FieldEnumResponse'
}

export interface CreatePaymentResponse {
  uuid: String
  redirectUrl: String
  __typename: 'CreatePaymentResponse'
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export interface QueryRequest {
  getPayment?: [{ input: GetPaymentInput }, GetPaymentResponseRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface GetPaymentInput {
  uuid: String
}

export interface GetPaymentResponseRequest {
  payment?: PaymentResponseRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PaymentResponseRequest {
  uuid?: boolean | number
  status?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MutationRequest {
  initializePayment?: [{ input: InitializePaymentInput }, InitializePaymentResponseRequest]
  createPayment?: [{ input: CreatePaymentInput }, CreatePaymentResponseRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InitializePaymentInput {
  customer: CustomerDto
  transaction: TransactionDto
}

export interface CustomerDto {
  /** IETF language tags (rfc5646). E.g. nl-NL, nl, en-GB et cetera. */
  locale: String
  /** Tax indicators already known within your application. */
  taxIndicators?: JSONObject | null
}

export interface TransactionDto {
  price: MoneyInput
  description?: String | null
}

export interface MoneyInput {
  /** The amount of the monetary value represented as an integer (in cents). E.g. € 5,25 should be passed as 525. */
  amount: Int
  /** The ISO 4217 currency code for this monetary value. */
  currencyCode: String
}

export interface InitializePaymentResponseRequest {
  methods?: PaymentMethodResponseRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PaymentMethodResponseRequest {
  method?: boolean | number
  title?: boolean | number
  gateway?: boolean | number
  /** The issuers are used for certain payment methods (for example iDEAL) to specify the bank chosen by the customer. */
  issuers?: PaymentMethodIssuerResponseRequest
  /** Fields that are required for tax compliance. You can either present your customer with these fields in the checkout, or let us handle it when you redirect the user. */
  fields?: FieldResponseRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PaymentMethodIssuerResponseRequest {
  id?: boolean | number
  title?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FieldResponseRequest {
  identifier?: boolean | number
  type?: boolean | number
  name?: boolean | number
  enum?: FieldEnumResponseRequest
  description?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FieldEnumResponseRequest {
  value?: boolean | number
  label?: boolean | number
  fields?: FieldResponseRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CreatePaymentInput {
  transaction: TransactionDto
  customer: CustomerDto
  /** The payment method you would like to use. If omitted, a payment selector screen will be shown. */
  method?: PaymentMethod | null
  /** Additional data for the payment method chosen (for example, issuer bank). */
  methodData?: JSONObject | null
  /** The payment gateway you would like to use. If omitted, the default gateway as configured in your account will be used. */
  gateway?: PaymentGateway | null
  /** A unique payment reference for your system. */
  reference?: String | null
  /** The URL we will call with status updates for the payment. */
  webhookUrl?: String | null
  /** The url we will redirect the customer to after successful/failed payment. */
  redirectUrl?: String | null
}

export interface CreatePaymentResponseRequest {
  uuid?: boolean | number
  redirectUrl?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const GetPaymentResponse_possibleTypes = ['GetPaymentResponse']
export const isGetPaymentResponse = (obj: { __typename: String }): obj is GetPaymentResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return GetPaymentResponse_possibleTypes.includes(obj.__typename)
}

const PaymentResponse_possibleTypes = ['PaymentResponse']
export const isPaymentResponse = (obj: { __typename: String }): obj is PaymentResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PaymentResponse_possibleTypes.includes(obj.__typename)
}

const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj: { __typename: String }): obj is Mutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Mutation_possibleTypes.includes(obj.__typename)
}

const InitializePaymentResponse_possibleTypes = ['InitializePaymentResponse']
export const isInitializePaymentResponse = (obj: { __typename: String }): obj is InitializePaymentResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return InitializePaymentResponse_possibleTypes.includes(obj.__typename)
}

const PaymentMethodResponse_possibleTypes = ['PaymentMethodResponse']
export const isPaymentMethodResponse = (obj: { __typename: String }): obj is PaymentMethodResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PaymentMethodResponse_possibleTypes.includes(obj.__typename)
}

const PaymentMethodIssuerResponse_possibleTypes = ['PaymentMethodIssuerResponse']
export const isPaymentMethodIssuerResponse = (obj: { __typename: String }): obj is PaymentMethodIssuerResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PaymentMethodIssuerResponse_possibleTypes.includes(obj.__typename)
}

const FieldResponse_possibleTypes = ['FieldResponse']
export const isFieldResponse = (obj: { __typename: String }): obj is FieldResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return FieldResponse_possibleTypes.includes(obj.__typename)
}

const FieldEnumResponse_possibleTypes = ['FieldEnumResponse']
export const isFieldEnumResponse = (obj: { __typename: String }): obj is FieldEnumResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return FieldEnumResponse_possibleTypes.includes(obj.__typename)
}

const CreatePaymentResponse_possibleTypes = ['CreatePaymentResponse']
export const isCreatePaymentResponse = (obj: { __typename: String }): obj is CreatePaymentResponse => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CreatePaymentResponse_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  getPayment: (args: {
    input: GetPaymentInput
  }) => GetPaymentResponsePromiseChain & {
    execute: (request: GetPaymentResponseRequest, defaultValue?: GetPaymentResponse) => Promise<GetPaymentResponse>
  }
}

export interface QueryObservableChain {
  getPayment: (args: {
    input: GetPaymentInput
  }) => GetPaymentResponseObservableChain & {
    execute: (request: GetPaymentResponseRequest, defaultValue?: GetPaymentResponse) => Observable<GetPaymentResponse>
  }
}

export interface GetPaymentResponsePromiseChain {
  payment: PaymentResponsePromiseChain & {
    execute: (request: PaymentResponseRequest, defaultValue?: PaymentResponse) => Promise<PaymentResponse>
  }
}

export interface GetPaymentResponseObservableChain {
  payment: PaymentResponseObservableChain & {
    execute: (request: PaymentResponseRequest, defaultValue?: PaymentResponse) => Observable<PaymentResponse>
  }
}

export interface PaymentResponsePromiseChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  status: { execute: (request?: boolean | number, defaultValue?: PaymentStatus) => Promise<PaymentStatus> }
}

export interface PaymentResponseObservableChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  status: { execute: (request?: boolean | number, defaultValue?: PaymentStatus) => Observable<PaymentStatus> }
}

export interface MutationPromiseChain {
  initializePayment: (args: {
    input: InitializePaymentInput
  }) => InitializePaymentResponsePromiseChain & {
    execute: (
      request: InitializePaymentResponseRequest,
      defaultValue?: InitializePaymentResponse,
    ) => Promise<InitializePaymentResponse>
  }
  createPayment: (args: {
    input: CreatePaymentInput
  }) => CreatePaymentResponsePromiseChain & {
    execute: (request: CreatePaymentResponseRequest, defaultValue?: CreatePaymentResponse) => Promise<CreatePaymentResponse>
  }
}

export interface MutationObservableChain {
  initializePayment: (args: {
    input: InitializePaymentInput
  }) => InitializePaymentResponseObservableChain & {
    execute: (
      request: InitializePaymentResponseRequest,
      defaultValue?: InitializePaymentResponse,
    ) => Observable<InitializePaymentResponse>
  }
  createPayment: (args: {
    input: CreatePaymentInput
  }) => CreatePaymentResponseObservableChain & {
    execute: (
      request: CreatePaymentResponseRequest,
      defaultValue?: CreatePaymentResponse,
    ) => Observable<CreatePaymentResponse>
  }
}

export interface InitializePaymentResponsePromiseChain {
  methods: {
    execute: (
      request: PaymentMethodResponseRequest,
      defaultValue?: PaymentMethodResponse[],
    ) => Promise<PaymentMethodResponse[]>
  }
}

export interface InitializePaymentResponseObservableChain {
  methods: {
    execute: (
      request: PaymentMethodResponseRequest,
      defaultValue?: PaymentMethodResponse[],
    ) => Observable<PaymentMethodResponse[]>
  }
}

export interface PaymentMethodResponsePromiseChain {
  method: { execute: (request?: boolean | number, defaultValue?: PaymentMethod) => Promise<PaymentMethod> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  gateway: { execute: (request?: boolean | number, defaultValue?: PaymentGateway) => Promise<PaymentGateway> }
  /** The issuers are used for certain payment methods (for example iDEAL) to specify the bank chosen by the customer. */
  issuers: {
    execute: (
      request: PaymentMethodIssuerResponseRequest,
      defaultValue?: PaymentMethodIssuerResponse[],
    ) => Promise<PaymentMethodIssuerResponse[]>
  }
  /** Fields that are required for tax compliance. You can either present your customer with these fields in the checkout, or let us handle it when you redirect the user. */
  fields: { execute: (request: FieldResponseRequest, defaultValue?: FieldResponse[]) => Promise<FieldResponse[]> }
}

export interface PaymentMethodResponseObservableChain {
  method: { execute: (request?: boolean | number, defaultValue?: PaymentMethod) => Observable<PaymentMethod> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  gateway: { execute: (request?: boolean | number, defaultValue?: PaymentGateway) => Observable<PaymentGateway> }
  /** The issuers are used for certain payment methods (for example iDEAL) to specify the bank chosen by the customer. */
  issuers: {
    execute: (
      request: PaymentMethodIssuerResponseRequest,
      defaultValue?: PaymentMethodIssuerResponse[],
    ) => Observable<PaymentMethodIssuerResponse[]>
  }
  /** Fields that are required for tax compliance. You can either present your customer with these fields in the checkout, or let us handle it when you redirect the user. */
  fields: { execute: (request: FieldResponseRequest, defaultValue?: FieldResponse[]) => Observable<FieldResponse[]> }
}

export interface PaymentMethodIssuerResponsePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface PaymentMethodIssuerResponseObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface FieldResponsePromiseChain {
  identifier: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  type: { execute: (request?: boolean | number, defaultValue?: FieldType) => Promise<FieldType> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  enum: { execute: (request: FieldEnumResponseRequest, defaultValue?: FieldEnumResponse[]) => Promise<FieldEnumResponse[]> }
  description: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface FieldResponseObservableChain {
  identifier: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  type: { execute: (request?: boolean | number, defaultValue?: FieldType) => Observable<FieldType> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  enum: {
    execute: (request: FieldEnumResponseRequest, defaultValue?: FieldEnumResponse[]) => Observable<FieldEnumResponse[]>
  }
  description: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface FieldEnumResponsePromiseChain {
  value: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  label: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  fields: {
    execute: (request: FieldResponseRequest, defaultValue?: FieldResponse[] | null) => Promise<FieldResponse[] | null>
  }
}

export interface FieldEnumResponseObservableChain {
  value: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  label: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  fields: {
    execute: (request: FieldResponseRequest, defaultValue?: FieldResponse[] | null) => Observable<FieldResponse[] | null>
  }
}

export interface CreatePaymentResponsePromiseChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  redirectUrl: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface CreatePaymentResponseObservableChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  redirectUrl: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}
