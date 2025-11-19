# Transaction

Types:

- <code><a href="./src/resources/transaction.ts">Currency</a></code>
- <code><a href="./src/resources/transaction.ts">MetadataCustomFields</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionChargeAuthorizationResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionExportResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionFetchTimelineResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionGetTotalsResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionInitializeResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionPartialDebitResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionVerifyResponse</a></code>

Methods:

- <code title="get /transaction/{id}">client.transaction.<a href="./src/resources/transaction.ts">retrieve</a>(id) -> TransactionRetrieveResponse</code>
- <code title="get /transaction">client.transaction.<a href="./src/resources/transaction.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="post /transaction/charge_authorization">client.transaction.<a href="./src/resources/transaction.ts">chargeAuthorization</a>({ ...params }) -> TransactionChargeAuthorizationResponse</code>
- <code title="get /transaction/export">client.transaction.<a href="./src/resources/transaction.ts">export</a>({ ...params }) -> TransactionExportResponse</code>
- <code title="get /transaction/timeline/{id}">client.transaction.<a href="./src/resources/transaction.ts">fetchTimeline</a>(id) -> TransactionFetchTimelineResponse</code>
- <code title="get /transaction/totals">client.transaction.<a href="./src/resources/transaction.ts">getTotals</a>({ ...params }) -> TransactionGetTotalsResponse</code>
- <code title="post /transaction/initialize">client.transaction.<a href="./src/resources/transaction.ts">initialize</a>({ ...params }) -> TransactionInitializeResponse</code>
- <code title="post /transaction/partial_debit">client.transaction.<a href="./src/resources/transaction.ts">partialDebit</a>({ ...params }) -> TransactionPartialDebitResponse</code>
- <code title="get /transaction/verify/{reference}">client.transaction.<a href="./src/resources/transaction.ts">verify</a>(reference) -> TransactionVerifyResponse</code>

# Charge

Types:

- <code><a href="./src/resources/charge.ts">ChargeCreateResponse</a></code>
- <code><a href="./src/resources/charge.ts">ChargeCheckStatusResponse</a></code>
- <code><a href="./src/resources/charge.ts">ChargeSubmitAddressResponse</a></code>
- <code><a href="./src/resources/charge.ts">ChargeSubmitBirthdayResponse</a></code>
- <code><a href="./src/resources/charge.ts">ChargeSubmitOtpResponse</a></code>
- <code><a href="./src/resources/charge.ts">ChargeSubmitPhoneResponse</a></code>
- <code><a href="./src/resources/charge.ts">ChargeSubmitPinResponse</a></code>

Methods:

- <code title="post /charge">client.charge.<a href="./src/resources/charge.ts">create</a>({ ...params }) -> ChargeCreateResponse</code>
- <code title="get /charge/{reference}">client.charge.<a href="./src/resources/charge.ts">checkStatus</a>(reference) -> ChargeCheckStatusResponse</code>
- <code title="post /charge/submit_address">client.charge.<a href="./src/resources/charge.ts">submitAddress</a>({ ...params }) -> ChargeSubmitAddressResponse</code>
- <code title="post /charge/submit_birthday">client.charge.<a href="./src/resources/charge.ts">submitBirthday</a>({ ...params }) -> ChargeSubmitBirthdayResponse</code>
- <code title="post /charge/submit_otp">client.charge.<a href="./src/resources/charge.ts">submitOtp</a>({ ...params }) -> ChargeSubmitOtpResponse</code>
- <code title="post /charge/submit_phone">client.charge.<a href="./src/resources/charge.ts">submitPhone</a>({ ...params }) -> ChargeSubmitPhoneResponse</code>
- <code title="post /charge/submit_pin">client.charge.<a href="./src/resources/charge.ts">submitPin</a>({ ...params }) -> ChargeSubmitPinResponse</code>

# Bulkcharge

Types:

- <code><a href="./src/resources/bulkcharge.ts">BulkchargeCreateResponse</a></code>
- <code><a href="./src/resources/bulkcharge.ts">BulkchargeRetrieveResponse</a></code>
- <code><a href="./src/resources/bulkcharge.ts">BulkchargeListResponse</a></code>
- <code><a href="./src/resources/bulkcharge.ts">BulkchargeListChargesResponse</a></code>
- <code><a href="./src/resources/bulkcharge.ts">BulkchargePauseResponse</a></code>
- <code><a href="./src/resources/bulkcharge.ts">BulkchargeResumeResponse</a></code>

Methods:

- <code title="post /bulkcharge">client.bulkcharge.<a href="./src/resources/bulkcharge.ts">create</a>([ ...body ]) -> BulkchargeCreateResponse</code>
- <code title="get /bulkcharge/{code}">client.bulkcharge.<a href="./src/resources/bulkcharge.ts">retrieve</a>(code) -> BulkchargeRetrieveResponse</code>
- <code title="get /bulkcharge">client.bulkcharge.<a href="./src/resources/bulkcharge.ts">list</a>({ ...params }) -> BulkchargeListResponse</code>
- <code title="get /bulkcharge/{code}/charges">client.bulkcharge.<a href="./src/resources/bulkcharge.ts">listCharges</a>(code, { ...params }) -> BulkchargeListChargesResponse</code>
- <code title="get /bulkcharge/pause/{code}">client.bulkcharge.<a href="./src/resources/bulkcharge.ts">pause</a>(code) -> BulkchargePauseResponse</code>
- <code title="get /bulkcharge/resume/{code}">client.bulkcharge.<a href="./src/resources/bulkcharge.ts">resume</a>(code) -> BulkchargeResumeResponse</code>

# Subaccount

Types:

- <code><a href="./src/resources/subaccount.ts">SubaccountCreateResponse</a></code>
- <code><a href="./src/resources/subaccount.ts">SubaccountRetrieveResponse</a></code>
- <code><a href="./src/resources/subaccount.ts">SubaccountUpdateResponse</a></code>
- <code><a href="./src/resources/subaccount.ts">SubaccountListResponse</a></code>

Methods:

- <code title="post /subaccount">client.subaccount.<a href="./src/resources/subaccount.ts">create</a>({ ...params }) -> SubaccountCreateResponse</code>
- <code title="get /subaccount/{code}">client.subaccount.<a href="./src/resources/subaccount.ts">retrieve</a>(code) -> SubaccountRetrieveResponse</code>
- <code title="put /subaccount/{code}">client.subaccount.<a href="./src/resources/subaccount.ts">update</a>(code, { ...params }) -> SubaccountUpdateResponse</code>
- <code title="get /subaccount">client.subaccount.<a href="./src/resources/subaccount.ts">list</a>({ ...params }) -> SubaccountListResponse</code>

# Split

Types:

- <code><a href="./src/resources/split/split.ts">SplitCreate</a></code>
- <code><a href="./src/resources/split/split.ts">SplitSubaccountsArray</a></code>
- <code><a href="./src/resources/split/split.ts">SplitCreateResponse</a></code>
- <code><a href="./src/resources/split/split.ts">SplitRetrieveResponse</a></code>
- <code><a href="./src/resources/split/split.ts">SplitUpdateResponse</a></code>
- <code><a href="./src/resources/split/split.ts">SplitListResponse</a></code>

Methods:

- <code title="post /split">client.split.<a href="./src/resources/split/split.ts">create</a>({ ...params }) -> SplitCreateResponse</code>
- <code title="get /split/{id}">client.split.<a href="./src/resources/split/split.ts">retrieve</a>(id) -> SplitRetrieveResponse</code>
- <code title="put /split/{id}">client.split.<a href="./src/resources/split/split.ts">update</a>(id, { ...params }) -> SplitUpdateResponse</code>
- <code title="get /split">client.split.<a href="./src/resources/split/split.ts">list</a>({ ...params }) -> SplitListResponse</code>

## Subaccount

Types:

- <code><a href="./src/resources/split/subaccount.ts">SplitSubaccounts</a></code>
- <code><a href="./src/resources/split/subaccount.ts">SubaccountAddResponse</a></code>
- <code><a href="./src/resources/split/subaccount.ts">SubaccountRemoveResponse</a></code>

Methods:

- <code title="post /split/{id}/subaccount/add">client.split.subaccount.<a href="./src/resources/split/subaccount.ts">add</a>(id, { ...params }) -> SubaccountAddResponse</code>
- <code title="post /split/{id}/subaccount/remove">client.split.subaccount.<a href="./src/resources/split/subaccount.ts">remove</a>(id, { ...params }) -> SubaccountRemoveResponse</code>

# Terminal

Types:

- <code><a href="./src/resources/terminal/terminal.ts">TerminalActivationToggle</a></code>
- <code><a href="./src/resources/terminal/terminal.ts">TerminalRetrieveResponse</a></code>
- <code><a href="./src/resources/terminal/terminal.ts">TerminalUpdateResponse</a></code>
- <code><a href="./src/resources/terminal/terminal.ts">TerminalListResponse</a></code>
- <code><a href="./src/resources/terminal/terminal.ts">TerminalCommissionResponse</a></code>
- <code><a href="./src/resources/terminal/terminal.ts">TerminalDecommissionResponse</a></code>
- <code><a href="./src/resources/terminal/terminal.ts">TerminalFetchStatusResponse</a></code>

Methods:

- <code title="get /terminal/{terminal_id}">client.terminal.<a href="./src/resources/terminal/terminal.ts">retrieve</a>(terminalID) -> TerminalRetrieveResponse</code>
- <code title="put /terminal/{terminal_id}">client.terminal.<a href="./src/resources/terminal/terminal.ts">update</a>(terminalID, { ...params }) -> TerminalUpdateResponse</code>
- <code title="get /terminal">client.terminal.<a href="./src/resources/terminal/terminal.ts">list</a>({ ...params }) -> TerminalListResponse</code>
- <code title="post /terminal/commission_device">client.terminal.<a href="./src/resources/terminal/terminal.ts">commission</a>({ ...params }) -> TerminalCommissionResponse</code>
- <code title="post /terminal/decommission_device">client.terminal.<a href="./src/resources/terminal/terminal.ts">decommission</a>({ ...params }) -> TerminalDecommissionResponse</code>
- <code title="get /terminal/{terminal_id}/presence">client.terminal.<a href="./src/resources/terminal/terminal.ts">fetchStatus</a>(terminalID) -> TerminalFetchStatusResponse</code>

## Event

Types:

- <code><a href="./src/resources/terminal/event.ts">EventFetchStatusResponse</a></code>
- <code><a href="./src/resources/terminal/event.ts">EventSendResponse</a></code>

Methods:

- <code title="get /terminal/{terminal_id}/event/{event_id}">client.terminal.event.<a href="./src/resources/terminal/event.ts">fetchStatus</a>(eventID, { ...params }) -> EventFetchStatusResponse</code>
- <code title="post /terminal/{id}/event">client.terminal.event.<a href="./src/resources/terminal/event.ts">send</a>(id, { ...params }) -> EventSendResponse</code>

# VirtualTerminal

Types:

- <code><a href="./src/resources/virtual-terminal/virtual-terminal.ts">VirtualTerminalCreateResponse</a></code>
- <code><a href="./src/resources/virtual-terminal/virtual-terminal.ts">VirtualTerminalRetrieveResponse</a></code>
- <code><a href="./src/resources/virtual-terminal/virtual-terminal.ts">VirtualTerminalUpdateResponse</a></code>
- <code><a href="./src/resources/virtual-terminal/virtual-terminal.ts">VirtualTerminalListResponse</a></code>
- <code><a href="./src/resources/virtual-terminal/virtual-terminal.ts">VirtualTerminalDeactivateResponse</a></code>

Methods:

- <code title="post /virtual_terminal">client.virtualTerminal.<a href="./src/resources/virtual-terminal/virtual-terminal.ts">create</a>({ ...params }) -> VirtualTerminalCreateResponse</code>
- <code title="get /virtual_terminal/{code}">client.virtualTerminal.<a href="./src/resources/virtual-terminal/virtual-terminal.ts">retrieve</a>(code) -> VirtualTerminalRetrieveResponse</code>
- <code title="put /virtual_terminal/{code}">client.virtualTerminal.<a href="./src/resources/virtual-terminal/virtual-terminal.ts">update</a>(code, { ...params }) -> VirtualTerminalUpdateResponse</code>
- <code title="get /virtual_terminal">client.virtualTerminal.<a href="./src/resources/virtual-terminal/virtual-terminal.ts">list</a>({ ...params }) -> VirtualTerminalListResponse</code>
- <code title="put /virtual_terminal/{code}/deactivate">client.virtualTerminal.<a href="./src/resources/virtual-terminal/virtual-terminal.ts">deactivate</a>(code) -> VirtualTerminalDeactivateResponse</code>

## Destination

Types:

- <code><a href="./src/resources/virtual-terminal/destination.ts">DestinationAssignResponse</a></code>
- <code><a href="./src/resources/virtual-terminal/destination.ts">DestinationUnassignResponse</a></code>

Methods:

- <code title="post /virtual_terminal/{code}/destination/assign">client.virtualTerminal.destination.<a href="./src/resources/virtual-terminal/destination.ts">assign</a>(code, { ...params }) -> DestinationAssignResponse</code>
- <code title="post /virtual_terminal/{code}/destination/unassign">client.virtualTerminal.destination.<a href="./src/resources/virtual-terminal/destination.ts">unassign</a>(code, { ...params }) -> DestinationUnassignResponse</code>

## SplitCode

Types:

- <code><a href="./src/resources/virtual-terminal/split-code.ts">SplitCodeAddResponse</a></code>
- <code><a href="./src/resources/virtual-terminal/split-code.ts">SplitCodeRemoveResponse</a></code>

Methods:

- <code title="put /virtual_terminal/{code}/split_code">client.virtualTerminal.splitCode.<a href="./src/resources/virtual-terminal/split-code.ts">add</a>(code, { ...params }) -> SplitCodeAddResponse</code>
- <code title="delete /virtual_terminal/{code}/split_code">client.virtualTerminal.splitCode.<a href="./src/resources/virtual-terminal/split-code.ts">remove</a>(code, { ...params }) -> SplitCodeRemoveResponse</code>

# Customer

Types:

- <code><a href="./src/resources/customer/customer.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerFetchMandateAuthorizationsResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerInitializeDirectDebitResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerSetRiskActionResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerTriggerActivationChargeResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerValidateResponse</a></code>

Methods:

- <code title="post /customer">client.customer.<a href="./src/resources/customer/customer.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /customer/{code}">client.customer.<a href="./src/resources/customer/customer.ts">retrieve</a>(code) -> CustomerRetrieveResponse</code>
- <code title="put /customer/{code}">client.customer.<a href="./src/resources/customer/customer.ts">update</a>(code, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /customer">client.customer.<a href="./src/resources/customer/customer.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="get /customer/{id}/directdebit-mandate-authorizations">client.customer.<a href="./src/resources/customer/customer.ts">fetchMandateAuthorizations</a>(id) -> CustomerFetchMandateAuthorizationsResponse</code>
- <code title="post /customer/{id}/initialize-direct-debit">client.customer.<a href="./src/resources/customer/customer.ts">initializeDirectDebit</a>(id, { ...params }) -> CustomerInitializeDirectDebitResponse</code>
- <code title="post /customer/set_risk_action">client.customer.<a href="./src/resources/customer/customer.ts">setRiskAction</a>({ ...params }) -> CustomerSetRiskActionResponse</code>
- <code title="put /customer/{id}/directdebit-activation-charge">client.customer.<a href="./src/resources/customer/customer.ts">triggerActivationCharge</a>(id, { ...params }) -> CustomerTriggerActivationChargeResponse</code>
- <code title="post /customer/{code}/identification">client.customer.<a href="./src/resources/customer/customer.ts">validate</a>(code, { ...params }) -> CustomerValidateResponse</code>

## Authorization

Types:

- <code><a href="./src/resources/customer/authorization.ts">AuthorizationDeactivateResponse</a></code>
- <code><a href="./src/resources/customer/authorization.ts">AuthorizationInitializeResponse</a></code>
- <code><a href="./src/resources/customer/authorization.ts">AuthorizationVerifyResponse</a></code>

Methods:

- <code title="post /customer/authorization/deactivate">client.customer.authorization.<a href="./src/resources/customer/authorization.ts">deactivate</a>({ ...params }) -> AuthorizationDeactivateResponse</code>
- <code title="post /customer/authorization/initialize">client.customer.authorization.<a href="./src/resources/customer/authorization.ts">initialize</a>({ ...params }) -> AuthorizationInitializeResponse</code>
- <code title="get /customer/authorization/verify/{reference}">client.customer.authorization.<a href="./src/resources/customer/authorization.ts">verify</a>(reference) -> AuthorizationVerifyResponse</code>

# Directdebit

Types:

- <code><a href="./src/resources/directdebit.ts">DirectdebitListMandateAuthorizationsResponse</a></code>
- <code><a href="./src/resources/directdebit.ts">DirectdebitTriggerActivationChargeResponse</a></code>

Methods:

- <code title="get /directdebit/mandate-authorizations">client.directdebit.<a href="./src/resources/directdebit.ts">listMandateAuthorizations</a>({ ...params }) -> DirectdebitListMandateAuthorizationsResponse</code>
- <code title="put /directdebit/activation-charge">client.directdebit.<a href="./src/resources/directdebit.ts">triggerActivationCharge</a>({ ...params }) -> DirectdebitTriggerActivationChargeResponse</code>

# DedicatedAccount

Types:

- <code><a href="./src/resources/dedicated-account/dedicated-account.ts">DedicatedAccountCreateResponse</a></code>
- <code><a href="./src/resources/dedicated-account/dedicated-account.ts">DedicatedAccountRetrieveResponse</a></code>
- <code><a href="./src/resources/dedicated-account/dedicated-account.ts">DedicatedAccountListResponse</a></code>
- <code><a href="./src/resources/dedicated-account/dedicated-account.ts">DedicatedAccountDeleteResponse</a></code>
- <code><a href="./src/resources/dedicated-account/dedicated-account.ts">DedicatedAccountAssignResponse</a></code>
- <code><a href="./src/resources/dedicated-account/dedicated-account.ts">DedicatedAccountFetchProvidersResponse</a></code>
- <code><a href="./src/resources/dedicated-account/dedicated-account.ts">DedicatedAccountRequeryResponse</a></code>

Methods:

- <code title="post /dedicated_account">client.dedicatedAccount.<a href="./src/resources/dedicated-account/dedicated-account.ts">create</a>({ ...params }) -> DedicatedAccountCreateResponse</code>
- <code title="get /dedicated_account/{id}">client.dedicatedAccount.<a href="./src/resources/dedicated-account/dedicated-account.ts">retrieve</a>(id) -> DedicatedAccountRetrieveResponse</code>
- <code title="get /dedicated_account">client.dedicatedAccount.<a href="./src/resources/dedicated-account/dedicated-account.ts">list</a>({ ...params }) -> DedicatedAccountListResponse</code>
- <code title="delete /dedicated_account/{id}">client.dedicatedAccount.<a href="./src/resources/dedicated-account/dedicated-account.ts">delete</a>(id) -> DedicatedAccountDeleteResponse</code>
- <code title="post /dedicated_account/assign">client.dedicatedAccount.<a href="./src/resources/dedicated-account/dedicated-account.ts">assign</a>({ ...params }) -> DedicatedAccountAssignResponse</code>
- <code title="get /dedicated_account/available_providers">client.dedicatedAccount.<a href="./src/resources/dedicated-account/dedicated-account.ts">fetchProviders</a>() -> DedicatedAccountFetchProvidersResponse</code>
- <code title="get /dedicated_account/requery">client.dedicatedAccount.<a href="./src/resources/dedicated-account/dedicated-account.ts">requery</a>({ ...params }) -> DedicatedAccountRequeryResponse</code>

## Split

Types:

- <code><a href="./src/resources/dedicated-account/split.ts">SplitCreateResponse</a></code>
- <code><a href="./src/resources/dedicated-account/split.ts">SplitRemoveResponse</a></code>

Methods:

- <code title="post /dedicated_account/split">client.dedicatedAccount.split.<a href="./src/resources/dedicated-account/split.ts">create</a>({ ...params }) -> SplitCreateResponse</code>
- <code title="delete /dedicated_account/split">client.dedicatedAccount.split.<a href="./src/resources/dedicated-account/split.ts">remove</a>({ ...params }) -> SplitRemoveResponse</code>

# ApplePay

## Domain

Types:

- <code><a href="./src/resources/apple-pay/domain.ts">ApplePayParam</a></code>
- <code><a href="./src/resources/apple-pay/domain.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/apple-pay/domain.ts">DomainRegisterResponse</a></code>
- <code><a href="./src/resources/apple-pay/domain.ts">DomainUnregisterResponse</a></code>

Methods:

- <code title="get /apple-pay/domain">client.applePay.domain.<a href="./src/resources/apple-pay/domain.ts">list</a>({ ...params }) -> DomainListResponse</code>
- <code title="post /apple-pay/domain">client.applePay.domain.<a href="./src/resources/apple-pay/domain.ts">register</a>({ ...params }) -> DomainRegisterResponse</code>
- <code title="delete /apple-pay/domain">client.applePay.domain.<a href="./src/resources/apple-pay/domain.ts">unregister</a>({ ...params }) -> DomainUnregisterResponse</code>

# Plan

Types:

- <code><a href="./src/resources/plan.ts">PlanCreateResponse</a></code>
- <code><a href="./src/resources/plan.ts">PlanRetrieveResponse</a></code>
- <code><a href="./src/resources/plan.ts">PlanUpdateResponse</a></code>
- <code><a href="./src/resources/plan.ts">PlanListResponse</a></code>

Methods:

- <code title="post /plan">client.plan.<a href="./src/resources/plan.ts">create</a>({ ...params }) -> PlanCreateResponse</code>
- <code title="get /plan/{code}">client.plan.<a href="./src/resources/plan.ts">retrieve</a>(code) -> PlanRetrieveResponse</code>
- <code title="put /plan/{code}">client.plan.<a href="./src/resources/plan.ts">update</a>(code, { ...params }) -> PlanUpdateResponse</code>
- <code title="get /plan">client.plan.<a href="./src/resources/plan.ts">list</a>({ ...params }) -> PlanListResponse</code>

# Subscription

Types:

- <code><a href="./src/resources/subscription/subscription.ts">SubscriptionToggle</a></code>
- <code><a href="./src/resources/subscription/subscription.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscription/subscription.ts">SubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/subscription/subscription.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscription/subscription.ts">SubscriptionDisableResponse</a></code>
- <code><a href="./src/resources/subscription/subscription.ts">SubscriptionEnableResponse</a></code>

Methods:

- <code title="post /subscription">client.subscription.<a href="./src/resources/subscription/subscription.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /subscription/{code}">client.subscription.<a href="./src/resources/subscription/subscription.ts">retrieve</a>(code) -> SubscriptionRetrieveResponse</code>
- <code title="get /subscription">client.subscription.<a href="./src/resources/subscription/subscription.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /subscription/disable">client.subscription.<a href="./src/resources/subscription/subscription.ts">disable</a>({ ...params }) -> SubscriptionDisableResponse</code>
- <code title="post /subscription/enable">client.subscription.<a href="./src/resources/subscription/subscription.ts">enable</a>({ ...params }) -> SubscriptionEnableResponse</code>

## Manage

Types:

- <code><a href="./src/resources/subscription/manage.ts">ManageGenerateUpdateLinkResponse</a></code>
- <code><a href="./src/resources/subscription/manage.ts">ManageSendUpdateLinkResponse</a></code>

Methods:

- <code title="get /subscription/{code}/manage/link">client.subscription.manage.<a href="./src/resources/subscription/manage.ts">generateUpdateLink</a>(code) -> ManageGenerateUpdateLinkResponse</code>
- <code title="post /subscription/{code}/manage/email">client.subscription.manage.<a href="./src/resources/subscription/manage.ts">sendUpdateLink</a>(code) -> ManageSendUpdateLinkResponse</code>

# Transferrecipient

Types:

- <code><a href="./src/resources/transferrecipient.ts">TransferRecipientCreate</a></code>
- <code><a href="./src/resources/transferrecipient.ts">TransferrecipientCreateResponse</a></code>
- <code><a href="./src/resources/transferrecipient.ts">TransferrecipientRetrieveResponse</a></code>
- <code><a href="./src/resources/transferrecipient.ts">TransferrecipientUpdateResponse</a></code>
- <code><a href="./src/resources/transferrecipient.ts">TransferrecipientListResponse</a></code>
- <code><a href="./src/resources/transferrecipient.ts">TransferrecipientDeleteResponse</a></code>
- <code><a href="./src/resources/transferrecipient.ts">TransferrecipientCreateBulkResponse</a></code>

Methods:

- <code title="post /transferrecipient">client.transferrecipient.<a href="./src/resources/transferrecipient.ts">create</a>({ ...params }) -> TransferrecipientCreateResponse</code>
- <code title="get /transferrecipient/{code}">client.transferrecipient.<a href="./src/resources/transferrecipient.ts">retrieve</a>(code) -> TransferrecipientRetrieveResponse</code>
- <code title="put /transferrecipient/{code}">client.transferrecipient.<a href="./src/resources/transferrecipient.ts">update</a>(code, { ...params }) -> TransferrecipientUpdateResponse</code>
- <code title="get /transferrecipient">client.transferrecipient.<a href="./src/resources/transferrecipient.ts">list</a>({ ...params }) -> TransferrecipientListResponse</code>
- <code title="delete /transferrecipient/{code}">client.transferrecipient.<a href="./src/resources/transferrecipient.ts">delete</a>(code) -> TransferrecipientDeleteResponse</code>
- <code title="post /transferrecipient/bulk">client.transferrecipient.<a href="./src/resources/transferrecipient.ts">createBulk</a>({ ...params }) -> TransferrecipientCreateBulkResponse</code>

# Transfer

Types:

- <code><a href="./src/resources/transfer.ts">TransferBase</a></code>
- <code><a href="./src/resources/transfer.ts">TransferListResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferDisableOtpResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferEnableOtpResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferExportResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferFetchResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferFinalizeResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferFinalizeDisableOtpResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferInitiateResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferInitiateBulkResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferResendOtpResponse</a></code>
- <code><a href="./src/resources/transfer.ts">TransferVerifyResponse</a></code>

Methods:

- <code title="get /transfer">client.transfer.<a href="./src/resources/transfer.ts">list</a>({ ...params }) -> TransferListResponse</code>
- <code title="post /transfer/disable_otp">client.transfer.<a href="./src/resources/transfer.ts">disableOtp</a>() -> TransferDisableOtpResponse</code>
- <code title="post /transfer/enable_otp">client.transfer.<a href="./src/resources/transfer.ts">enableOtp</a>() -> TransferEnableOtpResponse</code>
- <code title="get /transfer/export">client.transfer.<a href="./src/resources/transfer.ts">export</a>({ ...params }) -> TransferExportResponse</code>
- <code title="get /transfer/{code}">client.transfer.<a href="./src/resources/transfer.ts">fetch</a>(code) -> TransferFetchResponse</code>
- <code title="post /transfer/finalize_transfer">client.transfer.<a href="./src/resources/transfer.ts">finalize</a>({ ...params }) -> TransferFinalizeResponse</code>
- <code title="post /transfer/disable_otp_finalize">client.transfer.<a href="./src/resources/transfer.ts">finalizeDisableOtp</a>({ ...params }) -> TransferFinalizeDisableOtpResponse</code>
- <code title="post /transfer">client.transfer.<a href="./src/resources/transfer.ts">initiate</a>({ ...params }) -> TransferInitiateResponse</code>
- <code title="post /transfer/bulk">client.transfer.<a href="./src/resources/transfer.ts">initiateBulk</a>({ ...params }) -> TransferInitiateBulkResponse</code>
- <code title="post /transfer/resend_otp">client.transfer.<a href="./src/resources/transfer.ts">resendOtp</a>({ ...params }) -> TransferResendOtpResponse</code>
- <code title="get /transfer/verify/{reference}">client.transfer.<a href="./src/resources/transfer.ts">verify</a>(reference) -> TransferVerifyResponse</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceFetchResponse</a></code>
- <code><a href="./src/resources/balance.ts">BalanceFetchLedgerResponse</a></code>

Methods:

- <code title="get /balance">client.balance.<a href="./src/resources/balance.ts">fetch</a>() -> BalanceFetchResponse</code>
- <code title="get /balance/ledger">client.balance.<a href="./src/resources/balance.ts">fetchLedger</a>({ ...params }) -> BalanceFetchLedgerResponse</code>

# Paymentrequest

Types:

- <code><a href="./src/resources/paymentrequest.ts">PaymentRequestLineItemsArray</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentRequestTaxArray</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestCreateResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestRetrieveResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestUpdateResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestListResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestArchiveResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestFinalizeResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestGetTotalsResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestSendNotificationResponse</a></code>
- <code><a href="./src/resources/paymentrequest.ts">PaymentrequestVerifyResponse</a></code>

Methods:

- <code title="post /paymentrequest">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">create</a>({ ...params }) -> PaymentrequestCreateResponse</code>
- <code title="get /paymentrequest/{id}">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">retrieve</a>(id) -> PaymentrequestRetrieveResponse</code>
- <code title="put /paymentrequest/{id}">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">update</a>(id, { ...params }) -> PaymentrequestUpdateResponse</code>
- <code title="get /paymentrequest">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">list</a>({ ...params }) -> PaymentrequestListResponse</code>
- <code title="post /paymentrequest/archive/{id}">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">archive</a>(id) -> PaymentrequestArchiveResponse</code>
- <code title="post /paymentrequest/finalize/{id}">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">finalize</a>(id) -> PaymentrequestFinalizeResponse</code>
- <code title="get /paymentrequest/totals">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">getTotals</a>() -> PaymentrequestGetTotalsResponse</code>
- <code title="post /paymentrequest/notify/{id}">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">sendNotification</a>(id) -> PaymentrequestSendNotificationResponse</code>
- <code title="get /paymentrequest/verify/{id}">client.paymentrequest.<a href="./src/resources/paymentrequest.ts">verify</a>(id) -> PaymentrequestVerifyResponse</code>

# Product

Types:

- <code><a href="./src/resources/product.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/product.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/product.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/product.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/product.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /product">client.product.<a href="./src/resources/product.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /product/{id}">client.product.<a href="./src/resources/product.ts">retrieve</a>(id) -> ProductRetrieveResponse</code>
- <code title="put /product/{id}">client.product.<a href="./src/resources/product.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /product">client.product.<a href="./src/resources/product.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="delete /product/{id}">client.product.<a href="./src/resources/product.ts">delete</a>(id) -> ProductDeleteResponse</code>

# Storefront

Types:

- <code><a href="./src/resources/storefront/storefront.ts">StorefrontCreateResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontRetrieveResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontUpdateResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontListResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontDeleteResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontDuplicateResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontFetchOrdersResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontPublishResponse</a></code>
- <code><a href="./src/resources/storefront/storefront.ts">StorefrontVerifySlugResponse</a></code>

Methods:

- <code title="post /storefront">client.storefront.<a href="./src/resources/storefront/storefront.ts">create</a>({ ...params }) -> StorefrontCreateResponse</code>
- <code title="get /storefront/{id}">client.storefront.<a href="./src/resources/storefront/storefront.ts">retrieve</a>(id) -> StorefrontRetrieveResponse</code>
- <code title="put /storefront/{id}">client.storefront.<a href="./src/resources/storefront/storefront.ts">update</a>(id, { ...params }) -> StorefrontUpdateResponse</code>
- <code title="get /storefront">client.storefront.<a href="./src/resources/storefront/storefront.ts">list</a>({ ...params }) -> StorefrontListResponse</code>
- <code title="delete /storefront/{id}">client.storefront.<a href="./src/resources/storefront/storefront.ts">delete</a>(id) -> StorefrontDeleteResponse</code>
- <code title="post /storefront/{id}/duplicate">client.storefront.<a href="./src/resources/storefront/storefront.ts">duplicate</a>(id) -> StorefrontDuplicateResponse</code>
- <code title="get /storefront/{id}/order">client.storefront.<a href="./src/resources/storefront/storefront.ts">fetchOrders</a>(id) -> StorefrontFetchOrdersResponse</code>
- <code title="post /storefront/{id}/publish">client.storefront.<a href="./src/resources/storefront/storefront.ts">publish</a>(id) -> StorefrontPublishResponse</code>
- <code title="get /storefront/verify/{slug}">client.storefront.<a href="./src/resources/storefront/storefront.ts">verifySlug</a>(slug) -> StorefrontVerifySlugResponse</code>

## Product

Types:

- <code><a href="./src/resources/storefront/product.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/storefront/product.ts">ProductAddResponse</a></code>

Methods:

- <code title="get /storefront/{id}/product">client.storefront.product.<a href="./src/resources/storefront/product.ts">list</a>(id) -> ProductListResponse</code>
- <code title="post /storefront/{id}/product">client.storefront.product.<a href="./src/resources/storefront/product.ts">add</a>(id, { ...params }) -> ProductAddResponse</code>

# Order

Types:

- <code><a href="./src/resources/order.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderFetchProductOrdersResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderValidateResponse</a></code>

Methods:

- <code title="post /order">client.order.<a href="./src/resources/order.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /order/{id}">client.order.<a href="./src/resources/order.ts">retrieve</a>(id) -> OrderRetrieveResponse</code>
- <code title="get /order">client.order.<a href="./src/resources/order.ts">list</a>({ ...params }) -> OrderListResponse</code>
- <code title="get /order/product/{id}">client.order.<a href="./src/resources/order.ts">fetchProductOrders</a>(id) -> OrderFetchProductOrdersResponse</code>
- <code title="get /order/{code}/validate">client.order.<a href="./src/resources/order.ts">validate</a>(code) -> OrderValidateResponse</code>

# Page

Types:

- <code><a href="./src/resources/page.ts">PageCreateResponse</a></code>
- <code><a href="./src/resources/page.ts">PageRetrieveResponse</a></code>
- <code><a href="./src/resources/page.ts">PageUpdateResponse</a></code>
- <code><a href="./src/resources/page.ts">PageListResponse</a></code>
- <code><a href="./src/resources/page.ts">PageAddProductResponse</a></code>
- <code><a href="./src/resources/page.ts">PageCheckSlugAvailabilityResponse</a></code>

Methods:

- <code title="post /page">client.page.<a href="./src/resources/page.ts">create</a>({ ...params }) -> PageCreateResponse</code>
- <code title="get /page/{id}">client.page.<a href="./src/resources/page.ts">retrieve</a>(id) -> PageRetrieveResponse</code>
- <code title="put /page/{id}">client.page.<a href="./src/resources/page.ts">update</a>(id, { ...params }) -> PageUpdateResponse</code>
- <code title="get /page">client.page.<a href="./src/resources/page.ts">list</a>({ ...params }) -> PageListResponse</code>
- <code title="post /page/{id}/product">client.page.<a href="./src/resources/page.ts">addProduct</a>(id, { ...params }) -> PageAddProductResponse</code>
- <code title="get /page/check_slug_availability/{slug}">client.page.<a href="./src/resources/page.ts">checkSlugAvailability</a>(slug) -> PageCheckSlugAvailabilityResponse</code>

# Settlement

Types:

- <code><a href="./src/resources/settlement.ts">SettlementListResponse</a></code>
- <code><a href="./src/resources/settlement.ts">SettlementRetrieveTransactionsResponse</a></code>

Methods:

- <code title="get /settlement">client.settlement.<a href="./src/resources/settlement.ts">list</a>({ ...params }) -> SettlementListResponse</code>
- <code title="get /settlement/{id}/transactions">client.settlement.<a href="./src/resources/settlement.ts">retrieveTransactions</a>(id) -> SettlementRetrieveTransactionsResponse</code>

# Integration

## PaymentSessionTimeout

Types:

- <code><a href="./src/resources/integration/payment-session-timeout.ts">PaymentSessionTimeoutRetrieveResponse</a></code>
- <code><a href="./src/resources/integration/payment-session-timeout.ts">PaymentSessionTimeoutUpdateResponse</a></code>

Methods:

- <code title="get /integration/payment_session_timeout">client.integration.paymentSessionTimeout.<a href="./src/resources/integration/payment-session-timeout.ts">retrieve</a>() -> PaymentSessionTimeoutRetrieveResponse</code>
- <code title="put /integration/payment_session_timeout">client.integration.paymentSessionTimeout.<a href="./src/resources/integration/payment-session-timeout.ts">update</a>({ ...params }) -> PaymentSessionTimeoutUpdateResponse</code>

# Refund

Types:

- <code><a href="./src/resources/refund.ts">RefundCreateResponse</a></code>
- <code><a href="./src/resources/refund.ts">RefundRetrieveResponse</a></code>
- <code><a href="./src/resources/refund.ts">RefundListResponse</a></code>
- <code><a href="./src/resources/refund.ts">RefundRetryWithCustomerDetailsResponse</a></code>

Methods:

- <code title="post /refund">client.refund.<a href="./src/resources/refund.ts">create</a>({ ...params }) -> RefundCreateResponse</code>
- <code title="get /refund/{id}">client.refund.<a href="./src/resources/refund.ts">retrieve</a>(id) -> RefundRetrieveResponse</code>
- <code title="get /refund">client.refund.<a href="./src/resources/refund.ts">list</a>({ ...params }) -> RefundListResponse</code>
- <code title="post /refund/retry_with_customer_details/{id}">client.refund.<a href="./src/resources/refund.ts">retryWithCustomerDetails</a>(id, { ...params }) -> RefundRetryWithCustomerDetailsResponse</code>

# Dispute

Types:

- <code><a href="./src/resources/dispute.ts">DisputeHistoryArray</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeMessagesArray</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeRetrieveResponse</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeUpdateResponse</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeListResponse</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeAddEvidenceResponse</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeExportResponse</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeFetchUploadURLResponse</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeListTransactionDisputesResponse</a></code>
- <code><a href="./src/resources/dispute.ts">DisputeResolveResponse</a></code>

Methods:

- <code title="get /dispute/{id}">client.dispute.<a href="./src/resources/dispute.ts">retrieve</a>(id) -> DisputeRetrieveResponse</code>
- <code title="put /dispute/{id}">client.dispute.<a href="./src/resources/dispute.ts">update</a>(id, { ...params }) -> DisputeUpdateResponse</code>
- <code title="get /dispute">client.dispute.<a href="./src/resources/dispute.ts">list</a>({ ...params }) -> DisputeListResponse</code>
- <code title="post /dispute/{id}/evidence">client.dispute.<a href="./src/resources/dispute.ts">addEvidence</a>(id, { ...params }) -> DisputeAddEvidenceResponse</code>
- <code title="get /dispute/export">client.dispute.<a href="./src/resources/dispute.ts">export</a>({ ...params }) -> DisputeExportResponse</code>
- <code title="get /dispute/{id}/upload_url">client.dispute.<a href="./src/resources/dispute.ts">fetchUploadURL</a>(id) -> DisputeFetchUploadURLResponse</code>
- <code title="get /dispute/transaction/{id}">client.dispute.<a href="./src/resources/dispute.ts">listTransactionDisputes</a>(id) -> DisputeListTransactionDisputesResponse</code>
- <code title="put /dispute/{id}/resolve">client.dispute.<a href="./src/resources/dispute.ts">resolve</a>(id, { ...params }) -> DisputeResolveResponse</code>

# Bank

Types:

- <code><a href="./src/resources/bank.ts">BankListResponse</a></code>
- <code><a href="./src/resources/bank.ts">BankResolveAccountResponse</a></code>
- <code><a href="./src/resources/bank.ts">BankValidateAccountResponse</a></code>

Methods:

- <code title="get /bank">client.bank.<a href="./src/resources/bank.ts">list</a>({ ...params }) -> BankListResponse</code>
- <code title="get /bank/resolve">client.bank.<a href="./src/resources/bank.ts">resolveAccount</a>({ ...params }) -> BankResolveAccountResponse</code>
- <code title="post /bank/validate">client.bank.<a href="./src/resources/bank.ts">validateAccount</a>({ ...params }) -> BankValidateAccountResponse</code>

# Decision

Types:

- <code><a href="./src/resources/decision.ts">DecisionResolveBinResponse</a></code>

Methods:

- <code title="get /decision/bin/{bin}">client.decision.<a href="./src/resources/decision.ts">resolveBin</a>(bin) -> DecisionResolveBinResponse</code>

# Country

Types:

- <code><a href="./src/resources/country.ts">CountryListResponse</a></code>

Methods:

- <code title="get /country">client.country.<a href="./src/resources/country.ts">list</a>() -> CountryListResponse</code>

# AddressVerification

Types:

- <code><a href="./src/resources/address-verification.ts">AddressVerificationListStatesResponse</a></code>

Methods:

- <code title="get /address_verification/states">client.addressVerification.<a href="./src/resources/address-verification.ts">listStates</a>({ ...params }) -> AddressVerificationListStatesResponse</code>
