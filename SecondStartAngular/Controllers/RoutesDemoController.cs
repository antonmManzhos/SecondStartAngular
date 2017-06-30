using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SecondStartAngular.Controllers
{
    public class RoutesDemoController : Controller
    {
        public ActionResult One()
        {
            return View();
        }
        public ActionResult Second(int donuts = 0)
        {
            ViewBag.Donuts = donuts;
            return View();
        }
        [Authorize]
        public ActionResult Third()
        {
            return View();
        }
    }
}