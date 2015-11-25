export class GitAccount {
    constructor(private htmlUrl: string,
                private login: string,
                private email: string,
                private avatarUrl: string,
                private bio: string) { }

    public get HtmlUrl() { return this.htmlUrl; }
    public get Login() { return this.login; }
    public get Email() { return this.email; }
    public get AvatarUrl() { return this.avatarUrl; }
    public get Bio() { return this.bio; }
}