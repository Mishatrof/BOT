


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Discord;
using Discord.Commands;
using Discord.WebSocket;

namespace Bot.Modules
{
   public class ping : ModuleBase<SocketCommandContext>
    {
        [Command("Gaben")]
        public async Task PingASync()
        {
            await ReplyAsync("Это пасхалка !!! радуйся!! создатель перед тобой!");
        }

        [Command("PC")]
        public async Task PCASync()
        {
            await ReplyAsync("НУ просто дали тебе PC (не топовый)");
            var user = Context.User;
            var role = Context.Guild.Roles.FirstOrDefault(x => x.Name == "PC");
             

            await (user as IGuildUser).AddRoleAsync(role);

            

        }
        [Command("XB")]
        public async Task XBASync()
        {
            await ReplyAsync(" Мы добавили тебе роль Коробочки ");
            var user = Context.User;
            var role = Context.Guild.Roles.FirstOrDefault(x => x.Name == "XB");


            await (user as IGuildUser).AddRoleAsync(role);
        }
        [Command("PS")]
        public async Task PSASync()
        {

            await ReplyAsync("Мы добавили тебе роль Плойки");
            var user = Context.User;
            var role = Context.Guild.Roles.FirstOrDefault(x => x.Name == "PS");


            await (user as IGuildUser).AddRoleAsync(role);

           
        }
        

    }
}
