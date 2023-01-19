const
  rpcGenerator = require("discordrpcgenerator"),

  // 1060989610433466429
  IMAGE_NAME = "logo",
  LARGE_TEXT = "Master Smp",
  SMALL_TEXT = "Bot",
  LINK = "https://twitter.com/GamerKi55404375?t=1WSkZ_aJaWjtbm-At64LMA&s=09";
 
module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
  .then(image => client.user.setPresence(
    new rpcGenerator.Rpc()
      .setName("twitch")
      .setUrl(LINK)
      .setType("STREAMING")
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setAssetsLargeText(SMALL_TEXT)
      .setDetails(LARGE_TEXT)
      .toDiscord()
  ));
