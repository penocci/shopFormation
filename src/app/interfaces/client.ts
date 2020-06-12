export interface Client {
  '@id'?: string;
  nickName?: string;
  dateCreationCompte?: Date;
  email?: string;
  roles?: any;
  password?: string;
  nom?: string;
  prenom?: string;
  dateNaissance?: Date;
  tel?: string;
  adresses?: string[];
  adress?: string[];
  readonly username?: string;
  readonly salt?: any;
  id?: string;
}
