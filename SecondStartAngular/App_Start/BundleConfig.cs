using System.Web;
using System.Web.Optimization;

namespace SecondStartAngular
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/angular.min.js")
                .Include("~/Scripts/angular-route.min.js")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/SecondStartAngular.js"));
        }
    }
}
