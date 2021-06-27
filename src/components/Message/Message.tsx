import React from "react";
import { Message } from "semantic-ui-react";
type MessageProps = {
  title: string;
  content: string;
};
const CustomMessage: React.FC<MessageProps> = ({ title, content }) => {
  return (
    <Message>
      <Message.Header>{title}</Message.Header>
      <Message.Content>{content}</Message.Content>
    </Message>
  );
};

export default CustomMessage;
