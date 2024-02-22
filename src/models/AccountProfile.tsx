export interface AccountProfile {
  id: number,
  uuid: string;
  accessToken: string;
  name: string;
  lastName: string;
  rut: string;
  email: string;
  password: string;
  isRemembered: boolean
  organizationName: string;
}
