import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AccountByEmailAsAdminResponse, AccountCreationRequest, AccountCreationResponse, AddTenantMemberRequest, AddTenantPhotoResponse, AdminSettingRequest, BusinessSettingRequest, CreateTenantRequest, CreateTenantResponse, ListTenantPhotosResponse, PasswordlessTokenGenerationRequest, SessionsForAccountResponse, TenantMembersResponse, TenantsResponse, TokenGenerationRequest, TokenGenerationResponse, VerifyCodeRequest, VerifyCodeResponse } from './models/client';

@Injectable({

	providedIn: 'root'
  
  })
  export class ConnectionService {
	  constructor(private http: HttpClient){}
  
	  readonly _baseUrl = "http://localhost:2023";
  
	  private handleError(error: HttpErrorResponse) {
  
		  if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error);
		  } else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(
			  `Backend returned code ${error.status} body was: `, error.error);
		  }
		  // Return an observable with a user-facing error message.
		  return throwError(() => new Error('Something bad happened; please try again later.'));
	  }
	  /** AccountByEmailAsAdmin find and returns an account with admin access control.  */
	  accountByEmailAsAdmin(email: string): Observable<AccountByEmailAsAdminResponse> {
		  return this.http.get<AccountByEmailAsAdminResponse>(this._baseUrl + "/accounts/by-email/" + email)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** AddTenantMember adds a member to the tenant.  */
	  addTenantMember(tenantID: string, request: AddTenantMemberRequest): Observable<unknown> {
		  return this.http.post(this._baseUrl + "/tenants/" + tenantID + "/members", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	//   addTenantPhoto(tenantID: string): Observable<AddTenantPhotoResponse> {
	// 	  return this.http.post<AddTenantPhotoResponse>(this._baseUrl + "/tenants/" + tenantID + "/photos")
	// 		  .pipe(
	// 			  catchError(this.handleError)
	// 		  );
	//   }
	  /** CreateAccount is the endpoint used for creating new user accounts.  */
	  createAccount(request: AccountCreationRequest): Observable<AccountCreationResponse> {
		  return this.http.post<AccountCreationResponse>(this._baseUrl + "/accounts/", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }



	  
	  /** CreateTenant creates a new tenant.  */
	  createTenant(request: CreateTenantRequest): Observable<CreateTenantResponse> {
		  return this.http.post<CreateTenantResponse>(this._baseUrl + "/tenants/", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	  deleteProfilePhoto(): Observable<unknown> {
		  return this.http.delete(this._baseUrl + "/accounts/self/photo")
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	  deleteTenantPhoto(tenantID: string, photoID: string): Observable<unknown> {
		  return this.http.delete(this._baseUrl + "/tenants/" + tenantID + "/photos/by-id/" + photoID)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	  downloadProfilePhoto(): Observable<unknown> {
		  return this.http.get(this._baseUrl + "/accounts/self/photo")
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	  downloadTenantPhoto(tenantID: string, photoID: string): Observable<unknown> {
		  return this.http.get(this._baseUrl + "/tenants/" + tenantID + "/photos/by-id/" + photoID)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	  generatePasswordlessToken(request: PasswordlessTokenGenerationRequest): Observable<unknown> {
		  return this.http.post(this._baseUrl + "/accounts/self/passwordless", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** GenerateToken creates a new token for the user.  */
	  generateToken(request: TokenGenerationRequest): Observable<TokenGenerationResponse> {
		  return this.http.post<TokenGenerationResponse>(this._baseUrl + "/accounts/self/sessions/", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	  listTenantPhotos(tenantID: string): Observable<ListTenantPhotosResponse> {
		  return this.http.get<ListTenantPhotosResponse>(this._baseUrl + "/tenants/" + tenantID + "/photos")
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** RevokeSession revokes a session for the account.  */
	  revokeSession(sessionID: string): Observable<unknown> {
		  return this.http.delete(this._baseUrl + "/accounts/self/sessions/" + sessionID + "/")
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** SessionsForAccount lists the sessions for an account.  */
	  sessionsForAccount(): Observable<SessionsForAccountResponse> {
		  return this.http.get<SessionsForAccountResponse>(this._baseUrl + "/accounts/self/sessions/")
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** SetAdmin sets whether an user is an admin.  */
	  setAdmin(accountID: string, request: AdminSettingRequest): Observable<unknown> {
		  return this.http.post(this._baseUrl + "/accounts/" + accountID + "/admin", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** SetBusiness sets whether an account is a business account.  */
	  setBusiness(accountID: string, request: BusinessSettingRequest): Observable<unknown> {
		  return this.http.post(this._baseUrl + "/accounts/" + accountID + "/business", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /**  */
	//   setProfilePhoto(): Observable<unknown> {
	// 	  return this.http.post(this._baseUrl + "/accounts/self/photo")
	// 		  .pipe(
	// 			  catchError(this.handleError)
	// 		  );
	//   }
	  /** TenantMembers lists the members of a tenant.  */
	  tenantMembers(tenantID: string): Observable<TenantMembersResponse> {
		  return this.http.get<TenantMembersResponse>(this._baseUrl + "/tenants/" + tenantID + "/members")
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** Tenants lists all tenants.  */
	  tenants(): Observable<TenantsResponse> {
		  return this.http.get<TenantsResponse>(this._baseUrl + "/tenants/")
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
	  /** VerifyCode verifies a code and returns it's scope.  */
	  verifyCode(request: VerifyCodeRequest): Observable<VerifyCodeResponse> {
		  return this.http.post<VerifyCodeResponse>(this._baseUrl + "/accounts/self/verify", request)
			  .pipe(
				  catchError(this.handleError)
			  );
	  }
  }
  