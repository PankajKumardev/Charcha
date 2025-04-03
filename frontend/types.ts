type ChatGroupType = {
  id: string;
  title: string;
  user_id: number;
  passcode: string;
  created_at: string;
};

type ChatMessageType = {
  id: string;
  group_id: string;
  user_id: number;
  message: string;
  created_at: string;
}