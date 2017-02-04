import {TwitterUser} from  "./TwitterUser";

const user1 = new TwitterUser();
user1.username = "@hpierce1102";
user1.realName = "Hayden Pierce";
user1.profileImageUrl = "example.com/image.jpg";
user1.verified = false;

const user2 = new TwitterUser();
user2.username = "@example123";
user2.realName = "Jane Doe";
user2.profileImageUrl = "example.com/image.png";
user2.verified = false;

const user3 = new TwitterUser();
user3.username = "@realDonaldTrump";
user3.realName= "Donald J. Trump";
user3.profileImageUrl = "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg";
user3.verified = true;

const ExampleTwitterUsers = [user1, user2, user3];

export { ExampleTwitterUsers };

