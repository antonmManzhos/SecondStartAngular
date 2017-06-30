using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SecondStartAngular.Startup))]
namespace SecondStartAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
