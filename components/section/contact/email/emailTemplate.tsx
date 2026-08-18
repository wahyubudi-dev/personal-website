interface EmailTemplateProps {
  fullname: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  fullname,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h4>Hello Wahyu</h4>
      <p>i&#96;m {fullname}, nice to meet you</p>
      <p>{message}</p>
      <br />
      <br />
      <p>Regards,</p>
      <p>{fullname}</p>
      <p>{email}</p>
    </div>
  );
}
