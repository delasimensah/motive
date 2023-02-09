import dashboard from "@assets/icons/sidenav/dashboard.svg";
import dashboardWhite from "@assets/icons/sidenav/dashboard-white.svg";
import assets from "@assets/icons/sidenav/assets.svg";
import assetsWhite from "@assets/icons/sidenav/assets-white.svg";
import booking from "@assets/icons/sidenav/booking.svg";
import bookingWhite from "@assets/icons/sidenav/booking-white.svg";
import sell from "@assets/icons/sidenav/sell.svg";
import sellWhite from "@assets/icons/sidenav/sell-white.svg";
import buy from "@assets/icons/sidenav/buy.svg";
import buyWhite from "@assets/icons/sidenav/buy-white.svg";
import services from "@assets/icons/sidenav/services.svg";
import servicesWhite from "@assets/icons/sidenav/services-white.svg";
import calendar from "@assets/icons/sidenav/calendar.svg";
import calendarWhite from "@assets/icons/sidenav/calendar-white.svg";
import messages from "@assets/icons/sidenav/messages.svg";
import messagesWhite from "@assets/icons/sidenav/messages-white.svg";
import settings from "@assets/icons/sidenav/settings.svg";
import settingsWhite from "@assets/icons/sidenav/settings-white.svg";

const links = {
  top: [
    {
      link: "/",
      title: "Dashboard",
      icon: { light: dashboard, dark: dashboardWhite },
    },
    {
      link: "/assets",
      title: "Assets",
      icon: { light: assets, dark: assetsWhite },
    },
    {
      link: "/booking",
      title: "Booking",
      icon: { light: booking, dark: bookingWhite },
    },
    {
      link: "/sell-car",
      title: "Sell Car",
      icon: { light: sell, dark: sellWhite },
    },
    {
      link: "/buy-car",
      title: "Buy Car",
      icon: { light: buy, dark: buyWhite },
    },
    {
      link: "/services",
      title: "Services",
      icon: { light: services, dark: servicesWhite },
    },
    {
      link: "/calendar",
      title: "Calendar",
      icon: { light: calendar, dark: calendarWhite },
    },
    {
      link: "/messages",
      title: "Messages",
      icon: { light: messages, dark: messagesWhite },
    },
  ],
  bottom: [
    {
      link: "/settings",
      title: "Settings",
      icon: { light: settings, dark: settingsWhite },
    },
  ],
};

export default links;
