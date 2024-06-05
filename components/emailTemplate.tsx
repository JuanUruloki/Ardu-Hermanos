import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,email,message,
}) => (
  <div>
    <h1>Nueva consulta de: {name}!</h1>
    <h2>Responder al email: {email}</h2>
    <p>Mensaje: {message}</p>
  </div>
);
