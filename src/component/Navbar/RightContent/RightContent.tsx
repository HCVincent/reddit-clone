import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  //   user: any;
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <div>
      <Flex justify="center" align="center">
        <AuthModal />
        <AuthButtons />
      </Flex>
    </div>
  );
};
export default RightContent;
