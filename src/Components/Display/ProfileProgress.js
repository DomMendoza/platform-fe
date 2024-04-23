import React from "react";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ScreenLockPortraitIcon from "@mui/icons-material/ScreenLockPortrait";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import PasswordIcon from "@mui/icons-material/Password";
import ProgressModal from "../ProgressModal";

// components
import Login from "../../Layouts/Login";
import PersonalInfo from "../ProfileProgress/PersonalInfo";

//redux
import { useSelector } from "react-redux";
import {
  handlePersonalInfoOpen,
  handlePersonalInfoClose,
  handleAccountVerOpen,
  handleAccountVerClose,
  handlePhoneVerOpen,
  handlePhoneVerClose,
  handleTransacPassOpen,
  handleTransacPassClose,
  handleLoginPassOpen,
  handleLoginPassClose,
} from "../../Slice/ModalSlice";

function ProfileProgress() {
  const {
    personalInfoOpen,
    accountVerOpen,
    phoneVerOpen,
    transacPassOpen,
    loginPassOpen,
  } = useSelector((state) => ({
    personalInfoOpen: state.modal.personalInfoOpen,
    accountVerOpen: state.modal.accountVerOpen,
    phoneVerOpen: state.modal.phoneVerOpen,
    transacPassOpen: state.modal.transacPassOpen,
    loginPassOpen: state.modal.loginPassOpen,
  }));

  const modalConfigs = [
    {
      openAction: handlePersonalInfoOpen,
      closeAction: handlePersonalInfoClose,
      selector: personalInfoOpen,
      icon: <FingerprintIcon />,
      title: "Personal Information",
      subtitle: "Complete the personal information.",
      component: <PersonalInfo />,
    },
    {
      openAction: handleAccountVerOpen,
      closeAction: handleAccountVerClose,
      selector: accountVerOpen,
      icon: <AdminPanelSettingsIcon />,
      title: "Account Verification",
      subtitle: "Complete the personal information.",
      component: <PersonalInfo />,
    },
    {
      openAction: handlePhoneVerOpen,
      closeAction: handlePhoneVerClose,
      selector: phoneVerOpen,
      icon: <ScreenLockPortraitIcon />,
      title: "Phone Verification",
      subtitle: "Bind your phone to retrieve password.",
      component: <PersonalInfo />,
    },
    {
      openAction: handleTransacPassOpen,
      closeAction: handleTransacPassClose,
      selector: transacPassOpen,
      icon: <WifiPasswordIcon />,
      title: "Transaction Password",
      subtitle: "Verify identity for any fund operation.",
      component: <PersonalInfo />,
    },
    {
      openAction: handleLoginPassOpen,
      closeAction: handleLoginPassClose,
      selector: loginPassOpen,
      icon: <PasswordIcon />,
      title: "Login Password",
      subtitle: "Verify identity for any fund operation.",
      component: <PersonalInfo />,
    },
  ];

  const modals = modalConfigs.map((config) => (
    <ProgressModal
      key={config.title}
      open={config.openAction}
      close={config.closeAction}
      selector={config.selector}
      icon={config.icon}
      title={config.title}
      subtitle={config.subtitle}
      component={config.component}
    />
  ));

  return (
    <div className="rounded-lg bg-indigo-100 flex flex-col lg:flex-row gap-2 py-4 px-2 h-full">
      <div className="left-container flex-1 flex flex-col gap-2 px-1">
        <div className="top w-full flex justify-between items-center">
          <p className="text-xs xl:text-sm font-bold">Complete your profile:</p>
          <p className="text-xs xl:text-sm">20/100</p>
        </div>
        <div className="bottom w-full flex justify-center items-center h-full">
          <div
            className="progress-container border-[1px] border-black rounded-full w-full h-5"
            style={{ boxShadow: "0px 5px 10px -8px rgba(0,0,0,0.5) inset" }}
          >
            <div className="progress-fill h-full w-[80%] rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
          </div>
        </div>
      </div>
      <div className="right-container lg:w-[75%] w-full grid grid-cols-5 px-2 ">
        {modals}
      </div>
    </div>
  );
}

export default ProfileProgress;
