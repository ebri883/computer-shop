import dynamic from "next/dynamic";

const IcAwesomeWhatsapp = dynamic(
  () => import("./IcAwesomeWhatsapp.component"),
  {
    ssr: false,
  }
);
const IcFeathermail = dynamic(() => import("./IcFeathermail.component"), {
  ssr: false,
});
const IcFeatherUser = dynamic(() => import("./IcFeatherUser.component"), {
  ssr: false,
});
const IcFeatherShoppingBag = dynamic(
  () => import("./IcFeatherShoppingBag.component"),
  {
    ssr: false,
  }
);
const IcSiteLogo = dynamic(() => import("./IcSiteLogo.component"), {
  ssr: false,
});
const IcOpenJustifyLeft = dynamic(
  () => import("./IcOpenJustifyLeft.component"),
  {
    ssr: false,
  }
);
const IcFeatherSearch = dynamic(() => import("./IcFeatherSearch.component"), {
  ssr: false,
});
const IcAwesomeTimes = dynamic(() => import("./IcAwesomeTimes.component"), {
  ssr: false,
});
const IcAwesomeFacebook = dynamic(
  () => import("./IcAwesomeFacebook.component"),
  {
    ssr: false,
  }
);
const IcAwesomeTwitter = dynamic(() => import("./IcAwesomeTwitter.component"), {
  ssr: false,
});
const IcAwesomeYoutube = dynamic(() => import("./IcAwesomeYoutube.component"), {
  ssr: false,
});
const IcAwesomeInstagram = dynamic(
  () => import("./IcAwesomeInstagram.component"),
  {
    ssr: false,
  }
);
const IcFeatherPhone = dynamic(() => import("./IcFeatherPhone.component"), {
  ssr: false,
});
const IcNounQuality = dynamic(() => import("./IcNounQuality.component"), {
  ssr: false,
});
const IcNounBox = dynamic(() => import("./IcNounBox.component"), {
  ssr: false,
});
const IcNounSupport = dynamic(() => import("./IcNounSupport.component"), {
  ssr: false,
});
const IcNounPayment = dynamic(() => import("./IcNounPayment.component"), {
  ssr: false,
});
const IcFeatherTrash = dynamic(() => import("./IcFeatherTrash.component"), {
  ssr: false,
});
const IcIonicIosClose = dynamic(() => import("./IcIonicIosClose.component"), {
  ssr: false,
});

const Icons = {
  IcAwesomeWhatsapp: <IcAwesomeWhatsapp />,
  IcFeathermail: <IcFeathermail />,
  IcFeatherUser: <IcFeatherUser />,
  IcFeatherShoppingBag: <IcFeatherShoppingBag />,
  IcSiteLogo: <IcSiteLogo />,
  IcOpenJustifyLeft: <IcOpenJustifyLeft />,
  IcFeatherSearch: <IcFeatherSearch />,
  IcAwesomeTimes: <IcAwesomeTimes />,
  IcAwesomeFacebook: <IcAwesomeFacebook />,
  IcAwesomeTwitter: <IcAwesomeTwitter />,
  IcAwesomeYoutube: <IcAwesomeYoutube />,
  IcAwesomeInstagram: <IcAwesomeInstagram />,
  IcFeatherPhone: <IcFeatherPhone />,
  IcNounQuality: <IcNounQuality />,
  IcNounBox: <IcNounBox />,
  IcNounSupport: <IcNounSupport />,
  IcNounPayment: <IcNounPayment />,
  IcFeatherTrash: <IcFeatherTrash />,
  IcIonicIosClose: <IcIonicIosClose />,
};

export default Icons;
