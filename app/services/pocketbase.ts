import PocketBase from 'pocketbase';

export class PocketBaseClient {
  private static instance: PocketBaseClient;
  public pb: PocketBase ;

  private constructor() {
    this.pb = new PocketBase("http://64.23.151.138/");
    this.pb.autoCancellation(false);
  }

  public static getInstance(): PocketBaseClient {
    if (!this.instance) {
      this.instance = new PocketBaseClient();
    }
    return this.instance;
  }

}